// @route   POST /login
// Basic Authorization with fetch, encode username and password to create a new header

function login(username, password) {
    var path = "/api/auth/login";
    return fetch(path, {
        method: 'post',
        headers: new Headers({
            'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
        }),
        credentials: "include"
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    });
}

//@Route: Register
function register(User) {
    var path = "/api/auth/register";
    return fetch(path, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + new Buffer(User.email + ':' + User.password).toString('base64')
        }),
        body: JSON.stringify({
            username: User.email,
            fname: User.fname,
            lname: User.lname,
            job_interest: User.job_interest,
            email: User.email
        }),
        credentials: "include"
    });
}




//@Route: Logout
function logout() {
    var path = "/api/auth/logout";
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


export default { login, logout, register };
