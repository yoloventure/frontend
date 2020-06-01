import React from 'react';
import {Link} from 'react-router';

class NavbarLoginOrProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const loginOrProfile = (auth) => {
      let loginColorClass=""
      let userNameStyles={}
      if (this.props.textColor === "black") {
        loginColorClass="btn btn-outline-dark dropdown-toggle"
        userNameStyles={color:'black',marginTop:'65%',marginLeft:"120%","fontSize":"15px","opacity":"0.75"}
      } else {
        loginColorClass="btn btn-outline-light dropdown-toggle"
        userNameStyles={color:'white',marginTop:'65%',marginLeft:"120%",fontSize:'15px',"opacity":"0.75"}

      }

      return auth.isAuthenticated===1 ?
        <li>
        <div className='row'>
          <div className='col-2'>
          <img style={{borderRadius: '50%'}} src='http://via.placeholder.com/60x60'/>
          </div>

          <div className='col-2  ' style={{marginLeft:'34%', marginTop:'10%'}} >
                <li class="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className={loginColorClass}>{auth.userName} <span class="caret"></span></button>
                    <ul class="dropdown-menu dropdown-menu-right mt-2">
                       <li class="px-3 py-2">
                           <form class="form" role="form">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Sign Out</button>
                                </div>

                            </form>
                        </li>
                    </ul>

                    </li>


           </div>
         </div>
         </li>

        :

        <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
        <li class="dropdown order-1">
            <button type="button" id="dropdownMenu1" data-toggle="dropdown" className={loginColorClass}>Login <span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right mt-2">
               <li class="px-3 py-2">
                   <form class="form" role="form">
                        <div class="form-group">
                            <input id="emailInput" placeholder="Email" class="form-control form-control-sm" type="text" required=""/>
                        </div>
                        <div class="form-group">
                            <input id="passwordInput" placeholder="Password" class="form-control form-control-sm" type="text" required=""/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </div>
                        <div class="form-group text-center">
                            <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                        </div>
                    </form>
                </li>
            </ul>



        </li>
        </ul>
    };


    return (
      <div>

          {loginOrProfile(this.props.auth)}

      </div>
    );
  }
};

// NavbarLoginOrProfile.propTypes = {
//   auth: React.PropTypes.object.isRequired
// };

export default NavbarLoginOrProfile;
