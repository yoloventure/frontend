import React from 'react';
import {Link} from 'react-router';
import APIAuth from "../api/APIAuth";

class NavbarLoginOrProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  logout() {
    APIAuth.logout().then();
  }



  render() {
    const styleLi = {
      marginLeft:'12%',
      marginRight:'12%'

    };
    const styles2 = {
      color: "",

    };
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
                                    <button type="submit" class="btn btn-primary btn-block">Sign I</button>
                                </div>

                            </form>
                        </li>
                    </ul>

                    </li>


           </div>
         </div>
         </li>

        :




                       <li className="nav-item active" style={styleLi}>
                         <a className="nav-link " style={styles2} href="login">Login</a>
                       </li>
                       

            {
             //     ) : (
             //
             //       <li className="nav-item active" style={styleLi}>
             //         <a className="nav-link " style={styles2} href="/" onClick = {this.logout}>
             //           Logout
             //         </a>
             //       </li>
             //     )
             // }{
             //   !firebase.auth().currentUser ?
             //     (
             }

             {//     ) : (
             //       <li className="nav-item active" style={styleLi}>
             //         <a className="nav-link " style={styles2} href="">
             //           {firebase.auth().currentUser.email}
             //         </a>
             //       </li>
             //     )
             // }
            }


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
