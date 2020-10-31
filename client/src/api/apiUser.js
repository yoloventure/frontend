// @route   GET api/user/current
// @desc    Returns current user logging in
// @access  Private
function getCurrentUser(){
    var path = "/api/user/current";
    return fetch(path, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        credentials: "include"
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    });
}



// @route   GET api/user/
// @desc    get all users from database
// @access  Private
function getAllUsers(){
    var path = "/api/user/";
    return fetch(path, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        credentials: "include"
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    });
}



// SHOW - shows more info about one user
// @route   GET api/user/:username/edit
// @desc    get a user detail to edit
// @access  Private
function selectedUser(username) {
    var path = "/api/user/"+username+"/edit";
    return fetch(path, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        credentials: "include"
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    });
}

// @route   PUT api/user/:username/edit
// @desc    eit a user
// @access  Private
function editUser(username, User) {
    var path = "/api/user/" + username + "/edit";
    return fetch(path, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            user: User
    }),
    credentials: "include"
}).then((response) => {
    return response.json();
}).catch((err) => {
    console.log(err);
});
}

// @route   DELETE api/user/:username
// @desc    delete a user
// @access  Private
function deleteUser(username) {
    var path = "/api/user/" + username;
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

export default {getCurrentUser, getAllUsers, selectedUser, editUser, deleteUser};
