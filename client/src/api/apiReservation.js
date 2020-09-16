import axios from 'axios';

//returns the infomations about the reservation with the given ID
function getReservationById(reservationId) {
  var path = "/api/reservation/" + reservationId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//returns the infomations about all the reservations in the system
function getAllReservations() {
  var path = "/api/reservation/";
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

function getReservationByExperienceId(experienceId) {
  var path = "/api/reservation/experience/" + experienceId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

function getReservationByUserId(userId) {
  var path = "/api/reservation/user/" + userId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//creates a new reservation in the system
function createReservation(Reservation) {
  var path = "/api/reservation/";
  return fetch(path, {
    method: 'post',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify(Reservation),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//updatees an reservation in the system
function editReservation(reservationId, Reservation) {
  var path = "/api/reservation/" + reservationId;
  return fetch(path, {
    method: 'put',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify(Reservation),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//deletes an reservation in the system
function deleteReservation(reservationId) {
  var path = "/api/reservation/" + reservationId;
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

function approveReservation(reservationId) {
  var reservation = getReservationById(reservationId);

  reservation.approval = 'approved'; // update approval status
  editReservation(reservationId, reservation);
}

function rejectReservation(reservationId) {
  var reservation = getReservationById(reservationId);

  reservation.approval = 'rejected'; // update approval status
  editReservation(reservationId, reservation);
}

export default { getReservationById, getAllReservations, getReservationByExperienceId, getReservationByUserId, deleteReservation, editReservation, createReservation, approveReservation, rejectReservation }
