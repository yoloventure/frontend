import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';
import { returnErrors } from './errorActions';


export const loadUser =()=>  (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    }); //set user to loading state
    console.log("load called")

    var path = "/api/user/userInfoFromToken";//decode the token
    return fetch(path, {
        method: 'post',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify({token:localStorage.getItem('token').split(' ')[1]})

    }).then((response) => {

      response.json().then((data)=>{

            dispatch({
                type: USER_LOADED,
                payload: data
            })
      })
    }).catch((err) => {
              dispatch({
                  type: AUTH_ERROR
              })
    });


};


//Set up config/header and token

export const tokenConfig = (getState) => {
     //get the token from current state
     const token = getState().auth.token;

     //headers
     const config = {

             "Content-type": "application/json"

     }

     //if token then add to headers
     if(token) {
         config['x-auth-token'] = token;
     }

     return config;
};

export const register = (user) => {


  return (dispatch) => {
  var path = "/api/auth/register";
  var userInfo=user;
  fetch(path, {
      method: 'post',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(user.email + ':' + user.password).toString('base64')
      }),
      body: JSON.stringify({
          username: user.email,
          fname: user.fname,
          lname: user.lname,
          job_interest: user.job_interest,
          email: user.email
      }),
      credentials: "include"
  }).then((res) => {
            if (res.status===200){
                        var email=userInfo.email
                        var password=userInfo.password
                        var path2 = "/api/auth/login";
                        fetch(path2, {
                            method: 'post',
                            headers: new Headers({
                                'Authorization': 'Basic ' + new Buffer(email + ':' + password).toString('base64')
                            }),
                            credentials: "include"
                        }).then((response) => {
                            response.json().then((data)=>{
                              console.log('registered')
                              console.log(data)

                                      dispatch({
                                          type: LOGIN_SUCCESS,
                                          payload: data
                                      })
                                      //Start to Load User Now
                                      dispatch(loadUser())


                            });
                        }).catch((err) => {
                          console.log(err);


                        });

            }else{
              console.log('errore ')

              dispatch({
                  type: REGISTER_FAIL
              })

            }
  })
  .catch((err) => {

  });
}
}
    //
    // axios
    //     .post('/api/users', body, config)
    //     .then((res) => {
    //         dispatch({
    //             type: REGISTER_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch((err) => {
    //         dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')); //dispatch to error reducer
    //         dispatch({
    //             type: REGISTER_FAIL
    //         })
    //     });


export const login = ({ email, password }) =>{


  return (dispatch) => {

    var path = "/api/auth/login";
    return fetch(path, {
        method: 'post',
        headers: new Headers({
            'Authorization': 'Basic ' + new Buffer(email + ':' + password).toString('base64')
        }),
        credentials: "include"
    }).then((response) => {
        if(response.status===200){
        response.json().then((data)=>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data
            })
            console.log('now gonna load')
            dispatch(loadUser())


        });
      }else{
        console.log('first'+err)
        dispatch({
            type:LOGIN_FAIL
        })
      }
    }).catch((err) => {
      console.log('first'+err)
      dispatch({
          type:LOGIN_FAIL
      })
    });


}
}
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}
