import APIAuth from "./APIAuth";
import APIHost from "./APIHost";
import APIUser from "./APIUser";

function submitApp(hostApp) {
  var user = {
    fname: hostApp.fname,
    lname: hostApp.lname,
    email: hostApp.email,
    password: hostApp.password,
    job_interests: hostApp.job_interests
  }
  var newUser = null;
  APIAuth.register(user).then(data => {
    newUser = data;
  });

  var host = {
    user: newUser._id,
    gender: host.gender,
    phone: host.phone,
    title: host.title,
    //company: createCompany(), //ref
    description: host.description,
    //location: createLocation(), //ref
    offering: [host.offerOne, host.offerTwo, host.offerThree],
    moreOffering: [host.moreOne, host.moreTwo, host.moreThree],
    expertise: host.expertise,
    //experiences: createExperience(), //ref
    approval: 'pending',
  }
  APIHost.createNewHost(host);
}

function approveApp(hostId) {
  var host = APIHost.getHostById(hostId);
  var user = APIUser.selectedUser(host.user); // change host model to store username instead of ObjectId?

  user.hostId = host.id; // link user to host
  APIUser.editUser(host.user, user);

  host.approval = 'approved'; // update host status
  APIHost.editHost(hostId, host);
}

function rejectApp(hostId) {
  var host = APIHost.getHostById(hostId);

  host.approval = 'rejected'; // update host status
  APIHost.editHost(hostId, host);
}

export default { submitApp, approveApp, rejectApp }
