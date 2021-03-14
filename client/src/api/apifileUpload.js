import axios from "axios";
function uploadFiles(formData) {
  var path = "/api/fileUpload/";
  return axios.post(path, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export default { uploadFiles };
