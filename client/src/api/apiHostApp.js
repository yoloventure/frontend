import APIAuth from "./apiAuth";
import APIHost from "./apiHost";
import APIUser from "./apiUser";
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

function submitApp(hostApp){
//   // var user = {
//   //   fname: hostApp.fname,
//   //   lname: hostApp.lname,
//   //   email: hostApp.email,
//   //   password: hostApp.password,
//   //   job_interests: hostApp.job_interests
//   // }
//   var user = {
//     fname: "test",
//     lname: "test",
//     email: "test@abdul",
//     password: "test",
//     job_interests: "nil"
//   }
//   console.log('here')
//   var newUser = null;
//   props.register(user).then(() => {
//      props.loadUser()
//   });
//
//   // var host = {
//   //   user: newUser._id,
//   //   gender: host.gender,
//   //   phone: host.phone,
//   //   title: host.title,
//   //   //company: createCompany(), //ref
//   //   description: host.description,
//   //   //location: createLocation(), //ref
//   //   offering: [host.offerOne, host.offerTwo, host.offerThree],
//   //   moreOffering: [host.moreOne, host.moreTwo, host.moreThree],
//   //   expertise: host.expertise,
//   //   //experiences: createExperience(), //ref
//   //   approval: 'pending',
//   // }
//   var host = {
//     user: props.auth.user._id,
//     category: "",
//     title:"",
//     street: "",
//     city: "",
//     state:"",
//     description: "",
//     offering: ["","",""],
//
//
//     expertise:"",
//     // experiences: createExperience(), //ref
//     approval: 'pending',
//   }
//
//   APIHost.createNewHost(host);
}

function approveApp(hostId) {
  var host = APIHost.getHostById(hostId);
  var user = APIUser.selectedUser(host.user); // change host model to store username instead of ObjectId?

  user.hostId = host._id; // link user to host
  APIUser.editUser(host.user, user);

  host.approval = 'approved'; // update host status
  APIHost.editHost(hostId, host);
}

function rejectApp(hostId) {
  var host = APIHost.getHostById(hostId);

  host.approval = 'rejected'; // update host status
  APIHost.editHost(hostId, host);
}

function submitAppRound2(hostApp) {
  // upload images

  for (var i=0; i<hostApp.files.length; i++) {
    const data = new FormData();
    data.append('file', hostApp.files[i]);
    data.append('hostId', hostId);

  //   const config = {     
  //   headers: { 'content-type': 'multipart/form-data' }
  // }
  //   axios.post("api/fileUpload", data, config)
  //       .then(res => {
  //         console.log(res.statusText)
  //       });
   }
  
  // update host availability
  var hostId = hostApp.hostId;
  var host = APIHost.getHostById(hostId);
   host.availability = [hostApp.dateRange.startDate, hostApp.dateRange.endDate];
  //host.gender = "female";
  APIHost.editHost(hostId, host);
}

submitApp.propTypes = {
    register: PropTypes.func.isRequired,
    loadUser:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({
    auth:state.auth //item represents the entire state
});



export default {submitApp,  approveApp, rejectApp, submitAppRound2 };
