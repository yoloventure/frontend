import React , {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard } from 'mdbreact';
import firebase from "../config/firebase"
class Login extends Component {
    state = {
        email: '',
        password : ''
    }
    login = (e) => {
        firebase.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((res) => {
            console.log("user at firebase",res);

        }).catch((e)=>{
            console.log("error",e)
        })
    }
    passwordOn = (e) => {
        let password = e.target.value;
        this.setState({password});
    }
    emailOn = (e) => {
        let email = e.target.value;
        this.setState({email});
    }
    submitOn = (e) => {
        this.login(e);
    }
    nameOn = (e) => {
        let name = e.target.value;
        this.setState({name});
    }
    confirmEmailOn = (e) => {
        let confirmEmail = e.target.value;
        this.setState({confirmEmail});
    }
    render(){
        return(
            <MDBContainer >
                <MDBRow style={{"textAlign":"center"}}>
                    <MDBCard style = {{"width":"145%",'textAlign':"-webkit-center"}} className = "mt-5">
                        <MDBCol md="4" className="col-md-offset-4">
                            <form>
                                <p className="h5 text-center mb-4" onClick = {()=>this.setState({toggle:!this.state.toggle})}>{this.state.toggle ? <span>LogIn to Your Application</span> : <span>LogIn</span> }</p>
                                <span>Type your email</span>
                                <div className="grey-text">
                                    <MDBInput
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange = {(e)=>this.emailOn(e)}
                                    />
                                    <span>Type your password</span>
                                    <MDBInput
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        onChange = {(e)=>this.passwordOn(e)}
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onClick = {(e)=>this.submitOn(e)}><span>LogIn</span> </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default Login;
