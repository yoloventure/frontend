import APIHost_Notification_Queue from "./APIHost_Notification_Queue"

//returns the infomations about the Host with the given UID
function getHostNotificationById(hostId){
  var path = "/api/host_Notification_Queue/" + hostId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//returns the infomations about the current Host or null if not logged in
// function getCurrentHost(){
//   var user = getCurrentUser();
//   var hostId = user.hostId;
//   if (hostId != null) {
//     return getHostById(hostId);
//   } else {
//     return null;
//   }
// }

//returns the infomations about all the hosts in the system
function getAllHostNotifications(){
  var path = "/api/host_Notification_Queue/";
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//creates a new Host in the system
function createNewHostNotificationQueue(notification) {
  console.log(JSON.stringify(host))
  var path = "/api/host_Notification_Queue/";

  return fetch(path, {
    method: 'post',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify(notification),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}


// function editHostNotificationQueue(hostId, data) {
//   var path = "/api/host/" + hostId;
//   return fetch(path, {
//     method: 'put',
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         "idImage": data.idImage,
//         "workingImage": data.workingImage,
//         "availability": data.availability,
//     }),
//     credentials: "include"
//   }).then((response) => {
//     return response.json();
//   }).catch((err) => {
//     console.log(err);
//   });
// }

// function deleteHost(hostId) {
//   var path = "/api/host/" + hostId;
//   return fetch(path, {
//       method: 'DELETE',
//       headers: new Headers({
//           'Content-Type': 'application/json'
//       }),
//       credentials: "include"
//   }).then((response) => {
//       return response.json;
//   }).catch((err) => {
//       console.log(err);
//   });
// }



export default {getHostNotificationById, getAllHostNotifications,createNewHostNotificationQueue}
