

//returns the infomations about the Host with the given UID
function getHostById(hostId){

}

//returns the infomations about the current Host or null if not logged in

function getCurrentHost(){

}
//returns the infomations about all the hosts in the system
function getAllHosts(){

}

//creates a new Host in the system
function createNewHost(Host) {

}

function editHost(Host) {

    var newHost = {
        fname: Host.fname,
        lname: Host.lname,
        email: Host.email,
        mname: Host.mname,
        job_interests: Host.job_interests,
    };

}


function deleteHost(hostId) {

}



export default {getHostById, getCurrentHost, getAllHosts, deleteHost, editHost, createNewHost}
