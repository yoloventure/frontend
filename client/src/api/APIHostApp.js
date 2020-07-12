import APIAuth from "./APIAuth";
import APIHost from "./APIHost";
import APIUser from "./APIUser";
import axios from 'axios';

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
  // update host availability
  var hostId = hostApp.hostId;
  var host = APIHost.getHostById(hostId);
  host.availability = [hostApp.dateRange.startDate, hostApp.dateRange.endDate];
  APIHost.editHost(hostId, host);

  // upload images
  for (var i=0; i<hostApp.files.length; i++) {
    const data = new FormData();
    data.append('file', hostApp.files[i]);
    data.append('hostId', hostId);

    axios.post("/api/file/upload", data, {
        })
        .then(res => {
          console.log(res.statusText)
        });
  }
}

export default { submitApp, approveApp, rejectApp, submitAppRound2 }
