//returns the infomations about the experience with the given UID
function getExperienceById(experienceId){
  var path = "/api/experience/" + experienceId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//returns the infomations about all the experiences in the system
function getAllExperiences(){
  var path = "/api/experience/";
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//creates a new experience in the system
function createNewExperience(Experience) {
  var path = "/api/experience/";
  return fetch(path, {
    method: 'post',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        experience: Experience
    }),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//updatees an experience in the system
function editExperience(experienceId, Experience) {
  var path = "/api/experience/" + experienceId;
  return fetch(path, {
    method: 'put',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        experience: Experience
    }),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//deletes an experience in the system
function deleteExperience(experienceId) {
  var path = "/api/experience/" + experienceId;
  return fetch(path, {
      method: 'DELETE',
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      credentials: "include"
  }).then((response) => {
      return response.json;
  }).catch((err) => {
      console.log(err);
  });
}


export default {getExperienceById, getAllExperiences, deleteExperience, editExperience, createNewExperience}
