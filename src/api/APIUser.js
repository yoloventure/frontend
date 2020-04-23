import firebase from "../config/firebase"


const userRef = firebase.database().ref('users');

//returns the infomations about the user with the given UID
function getUserById(userId){
    userRef.child(userId).once("value", (snapshot)=>{
        return  JSON.stringify(snapshot.val());
      }, (errorObject)=>{
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

//returns the infomations about the current user or null if not logged in

function getCurrentUser(){
    userRef.child(firebase.auth().currentUser.uid).once("value", (snapshot)=>{
        return  JSON.stringify(snapshot.val());
      }, (errorObject) => {
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

//returns the infomations about all the users in the system
function getAllUsers(){
    var res = []
    userRef.once("value", (snapshot) =>{
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

//creates a new user in the system
function createNewUser(User) {
    var newUser = JSON.stringify({
        userId: User.uid,
        fname: User.fname,
        lname: User.lname,
        email: User.email,
        hostId: false,
        mname: User.mname || "",
        joinedSince: Date.now(),
        job_interests: User.job_interests,
    });

    userRef.child(User.uid).set({
        newUser
    });
}

function editUser(User) {

    var newUser = JSON.stringify({
        fname: User.fname,
        lname: User.lname,
        email: User.email,
        mname: User.mname,
        job_interests: User.job_interests,
    });
    userRef.child(User.uid).update({
        newUser
    });
}


function deleteUser(userId) {

}



export default {getUserById, getCurrentUser, getAllUsers, deleteUser, editUser, createNewUser}
