//returns the infomations about the chat with the given UID
function getChatById(chatId){
  var path = "/api/chat/" + chatId;
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//returns the infomations about all the chats in the system
function getAllChats(){
  var path = "/api/chat/";
  return fetch(path, {
      method: 'get',
      credentials: "include"
  }).then((response) => {
      return response.json();
  }).catch((err) => {
      console.log(err);
  });
}

//creates a new chat in the system
function createChat(Chat) {
  var path = "/api/chat/";
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

//updatees an chat in the system(after the chat,update the register link to google drive recording)
function editChat(experienceId, Experience) {
  var path = "/api/chat/" + chatId;
  return fetch(path, {
    method: 'put',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        chat: Chat
    }),
    credentials: "include"
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    console.log(err);
  });
}

//deletes an experience in the system
function deleteChat(experienceId) {
  var path = "/api/chat/" + chatId;
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


export default {getChatById, getAllChats, deleteChat, editChat, createChat}
