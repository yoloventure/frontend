import firebase from "../config/firebase"


const hostRef = firebase.database().ref('hosts');

//returns the infomations about the Host with the given UID
function getHostById(hostId){
    hostRef.child(hostId).once("value", (snapshot)=>{
        return  JSON.stringify(snapshot.val());
      }, (errorObject)=>{
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

//returns the infomations about the current Host or null if not logged in

function getCurrentHost(){
    hostRef.child(firebase.auth().currentUser.uid).once("value", (snapshot)=>{
        return  JSON.stringify(snapshot.val());
      }, (errorObject) => {
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

//returns the infomations about all the hosts in the system
function getAllHosts(){
    var res = []
    hostRef.once("value", (snapshot) =>{
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

//creates a new Host in the system
function createNewHost(Host) {

    return hostRef.child(Host.uid).set(Host).then().catch();
}

function editHost(Host) {

    var newHost = {
        fname: Host.fname,
        lname: Host.lname,
        email: Host.email,
        mname: Host.mname,
        job_interests: Host.job_interests,
    };
    return hostRef.child(Host.uid).update(newHost).then().catch();

}


function deleteHost(hostId) {

}



export default {getHostById, getCurrentHost, getAllHosts, deleteHost, editHost, createNewHost}
