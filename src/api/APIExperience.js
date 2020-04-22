import firebase from "../config/firebase"


const experienceRef = firebase.database().ref('experiences');



//returns the infomations about the experience with the given UID
function getExperienceById(experienceId){
    experienceRef.child(experienceId).once("value", (snapshot)=>{
        return  JSON.stringify(snapshot.val());
      }, (errorObject)=>{
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

//returns the infomations about all the experiences in the system
function getAllExperiences(){
    var res = []
    experienceRef.once("value", (snapshot) =>{
        ;
        snapshot.forEach(
            (childVal)=>{
                res.push(childVal.val());
            }
        )
      },  (errorObject)=> {
        console.log("The read failed: " + errorObject.code);
    });
    return res;
}

//creates a new experience in the system
function createNewExperience(Experience) {
    var experienceId = experienceRef.push();
    var newExperience = JSON.stringify({
        experienceId: experienceId.key,
        description: Experience.description,
        availability: Experience.availability,
        industry: Experience.industry,
        hostId: firebase.auth().currentUser.uid,
        length: Experience.length,
        title: Experience.title,
        cratedOn: Date.now(),
    });

    experienceRef.child(experienceId.key).set({
        newExperience
    });
}

//updatees an experience in the system
function editExperience(Experience) {

    var newExperience = JSON.stringify({
        description: Experience.description,
        availability: Experience.availability,
        industry: Experience.industry,
        length: Experience.length,
        title: Experience.title,
    });
    experienceRef.child(Experience.experienceId).update({
        newExperience
    });
}

//deletes an experience in the system
function deleteExperience(experienceId) {
    experienceRef.child(experienceId).remove();
}


export default {getExperienceById, getAllExperiences, deleteExperience, editExperience, createNewExperience}
