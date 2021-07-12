import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./hostRegister.css";
import "../components/regFormComponents/imgSubmit.css";
import Navbar from "../components/navbar";
import RegistrationFooter from "../components/registrationFooter";
import Round2_Page1 from "../components/regFormComponents/round2_Page1";
import Round2_Page2 from "../components/regFormComponents/round2_Page2";
import Round2_Page3 from "../components/regFormComponents/round2_Page3";
import Round2_Page4 from "../components/regFormComponents/round2_Page4";
import APIHostApp from "../api/apiHostApp";
import APIUser from "../api/apiUser";
import APIHost from "../api/apiHost";
import PropTypes from 'prop-types';
import { register,loadUser } from '../actions/authActions';
import axios from 'axios';

//all the needed information to connect to our azure storage
//how to test this functionality: 
// 1. log in to your yolo shadow account
// 2. go to http://localhost:5000/hostregister/round2
// 3. upload the pictures 
// 4. log in to azure portal with yolo tech gmail
// 5. Go to storage account, then go to containers

const {BlobServiceClient,StorageSharedKeyCredential,AZCloudBlobContainer} = require("@azure/storage-blob");
const AccountKey = "N+77w9avm+pK9dRjYIZthW2T5Fx5okTIjdPX6XCteyWbkmYJECFu0ydqqPiln0dTlbPNLKJEh/dpd2rRl+CK5Q==";
const account = "yoloshadowstorage";
const connStr = "DefaultEndpointsProtocol=https;AccountName=yoloshadowstorage;AccountKey=N+77w9avm+pK9dRjYIZthW2T5Fx5okTIjdPX6XCteyWbkmYJECFu0ydqqPiln0dTlbPNLKJEh/dpd2rRl+CK5Q==;EndpointSuffix=core.windows.net";
const sas = "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2025-04-04T03:35:25Z&st=2021-04-03T19:35:25Z&spr=https&sig=fCqTGZeiR9LbU641e7FbC7uogVs8jMDsEYOfhXBxzbg%3D";


class HostRegister_Round2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        hostId: null, 
        dateRange: null, 
        files: [],
        workingImage: "",
        idImage: "" ,
        availability: [],
        email:"",
        fname:""
      },
      counter: 1,
      progress: 25,
    };

    this.handleDateRange = this.handleDateRange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.auth.user);
    const user = this.props.auth.user;
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          hostId: user.hostId,
          fname: user.fname,
          email: user.email
        }
      }
    });

    toast.configure();
  }

  goNext = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        progress: prevState.progress + 25,
        goNext: false
      }
    }, this.handleSubmit);
  }
  goPrev = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
        progress: prevState.progress - 25,
        goPrev: false
      }
    }, this.handleSubmit);
  }

  handleDateRange(dateRange) {
    this.setState(prevState => {
        return {
          data: {
            ...prevState.data,
            dateRange: dateRange
          }
        }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleFileUpload(file, index) {
    this.setState(prevState => {
        prevState.data.files[index] = file;
        return {
          data: {
            ...prevState.data,
          }
        }
    }, () => {
      console.log(this.state.data);
    });

  }
  handleSubmit() {
    if (this.state.counter == 4 && this.formValidation()) {
      console.log("Submit API called");
      const { data } = this.state;
      console.log(data);
      const start = new Date(this.state.data.dateRange.startDate);
      const end = new Date(this.state.data.dateRange.endDate);
      const availability2 = [start,end];

      //create a client for our azure storage account from @azure/storage-blob library
      const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);
      //client for the hostworkingimages container that stores all working images 
      const containerClient = blobServiceClient.getContainerClient("hostworkingimages");
      //client for the hostidimages container that stores all the id images
      const containerClient2 = blobServiceClient.getContainerClient("hostidimages");
      //uploaded id image from user
      const idImage = this.state.data.files[1];
      //uploaded working image from user
      //note: I tried to make the user be able to upload multiple working images but 
      //the whole constructor was built based on single uploading in our components file
      //and database, it will cause many times and bugs to change the whole thing so I decided to 
      //leave it for now. Now user can only upload one imge during working.
      const workingImage = this.state.data.files[0];
      //manually name the images files, which is the image type + the hostid that the images belong to
      const workingblobName = "host_working_image"+this.state.data.hostId;
      const idblobName = "host_id_image"+this.state.data.hostId;
      //create specific clients for each specific image
      const blockBlobClient = containerClient.getBlockBlobClient(workingblobName);
      const blockBlobClient2 = containerClient2.getBlockBlobClient(idblobName);
      //upload the images to azure
      blockBlobClient.uploadBrowserData(workingImage);
      blockBlobClient2.uploadBrowserData(idImage); 
      var uploadpath = "/api/host/" + this.state.data.hostId;
      //initialize the url for id and woking image that will be stored
      var workingImageUrl = "https://yoloshadowstorage.blob.core.windows.net/hostworkingimages/"+workingblobName;
      var idImageUrl =  "https://yoloshadowstorage.blob.core.windows.net/hostidimages/"+idblobName;
      //update the current state  
      this.setState({ 
        data: {
          ...this.state.data,
            availability: [...this.state.data.availability,...availability2],
            "workingImage": workingImageUrl,
            "idImage": idImageUrl
          }
        }, () => {
          //update the data base and now the two image urls will be stored in database as two strings
          return fetch(uploadpath, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "workingImage": workingImageUrl,
                "idImage": idImageUrl,
                "availability": this.state.data.availability,
                "fname": this.state.data.fname,
                "email": this.state.data.email
            }),
            credentials: "include"
          }).then((response) => {
            return response.json();
          }).catch((err) => {
            console.log(err);
          });
          }); 
    }
  }

  formValidation() {
    const data = this.state.data;
    let success = true;

    if (!data.dateRange) {
      toast.error("You need to specify your availability", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 3, progress: 75});
      success = false;
    }
    if (!data.files[0]) {
      toast.error("You need to upload an ID", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 3, progress: 75});
      success = false;
    }
    if (!data.files[1]) {
      toast.error("You need to upload a picture of you at work", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 3, progress: 75});
      success = false;
    }

    return success;
  }

  handlePageRender(counter) {
    switch(counter) {
      case 1:
        return <Round2_Page1 handleDateRange={this.handleDateRange} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 2:
        return <Round2_Page2 handleFileUpload={this.handleFileUpload} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 3:
        return <Round2_Page3 handleFileUpload={this.handleFileUpload} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 4:
        return <Round2_Page4 goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
    }
  }

  render() {

     const { isAuthenticated, user } = this.props.auth;
        //      let fname='noOne'
        // try {

        //     fname=user.fname

        // }
        // catch(err) {
        //      console.log("hi there")
        // }
    return (
      <div className="container-fluid app">

        <Helmet>
            <title>Apply to be a host | YoloShadow</title>
        </Helmet>

        <div className="nav pb-5">
          <Navbar textColor={"black"} />
        </div>

        <div className="container pt-5 mt-5 mb-5">
          <div className="top row">
            <div className="col-md-4">
            </div>
            <div className="col apply ml-5">
              <p>Apply To Be A Host</p>
            </div>
          </div>
        </div>

        <div className="main container">
          {/*Progress Bar*/}

          <div onSubmit={this.handleSubmit}>
            <div className="row mt-5">
              <div className="col-sm-2" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"140%","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
                <p>PROGRESS</p>
              </div>

              <div className="col-sm-10 progress" style={{ height: "2px" }}>
                <div
                  className={"progress-bar  w-" + this.state.progress}
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/*Components go here: replace with components */}

            <div className="insert">
              {this.handlePageRender(this.state.counter)}
            </div>
          </div>
        </div>

        <div className="footerpages">
          <RegistrationFooter />
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(HostRegister_Round2);

