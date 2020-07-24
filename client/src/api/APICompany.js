//returns the infomations about the company with the given UID
function getCompanyById(companyId){
  var path = "/api/company/" + companyId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//returns the infomations about all the companies in the system
function getAllCompanies(){
  var path = "/api/company/";
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//creates a new company in the system
function createCompany(Company) {
  var path = "/api/company/";
  return fetch(path, {
    method: 'post',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        company: Company
    }),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//updatees an company in the system
function editCompany(companyId, Company) {
  var path = "/api/company/" + companyId;
  return fetch(path, {
    method: 'put',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        company: Company
    }),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//deletes an company in the system
function deleteCompany(companyId) {
  var path = "/api/company/" + companyId;
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


export default {getCompanyById, getAllCompanies, deleteCompany, editCompany, createCompany}
