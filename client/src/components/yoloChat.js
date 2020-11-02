import React from "react";
import "../home/homepage.css";
import chat1 from "../photos/chat1.png";
import chat2 from "../photos/chat2.png";


class YoloChat extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname:""
      //translateValue: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }
    handleChange(event) {
    const {id,value}=event.target
    this.setState({ [id]: value });
  }
    handleSubmit(event) {
    event.preventDefault();
    if(!this.state.fname || !this.state.lname || !this.state.email){
      alert("Please fill all fields before submitting")
      return;

    }
    return fetch("/api/emailList", {
      method: "POST",

      body: JSON.stringify({
        fname: this.state.fname,
        lname:this.state.lname,
        email: this.state.email
      }),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("You have successfully subscribed to our Newsletter.");
          this.setState({ email: "" });
        } else if (response.status === 409) {
          alert("You have already subscribed to our Newsletter. Thank you!");
          this.setState({ email: "" });
        }else{
          alert("Please try again, there was an error in getting you subscribed!");
          
        }
        return response;
      })
      .catch(error => error);
  }



  render() {
    return (
      <div class="chat_container">
      <div className='row d-flex justify-content-center pt-5 pb-3 '>
          <h2 style={{"fontStyle":"normal","fontWeight":"800","fontSize":"50px","lineHeight":"163.35%","textAlign":"center","color":"#FCFCFC"}}
          > Yolo Chat</h2>
      </div>
      <div className='row d-flex justify-content-center  ' style={{paddingBottom:'4%'}} >
          <h3 style={{fontSize:"18px",fontStyle:"normal",fontWeight:"500",lineHeight:"35px",textAlign:"center",color:"#FCFCFC"}}
          > Join us to explore the secret sauce of professionals </h3>
      </div>
       <div className="row d-flex justify-content-around ">
      <div class="col text-center">
         <img src={chat2} />
          <h2 style={{"fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"36px","textAlign":"center","color":"#14D2B8","margin-top":"36px"}}
          >Chat with Alex Marinov</h2>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >September 13</h3>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >2020 2PM-3PM EST</h3>
          <button className="learnmore mt-3 mb-2" style={{background:'#150433',fontStyle: "normal" ,fontWeight: '500',fontSize: '13.5px', lineHeight: '20px',alignItems: 'center',  letterSpacing: '2px',color: '#FCFCFC'}}>Register</button>
      </div>
      <div>
         <div class="col text-center">
         <img src={chat1} />
          <h2 style={{"fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"36px","textAlign":"center","color":"#14D2B8","margin-top":"36px"}}
          >Chat with Alex Marinov</h2>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >September 13</h3>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >2020 2PM-3PM EST</h3>
          <button className="learnmore mt-3 mb-2" style={{background:'#150433',fontStyle: "normal" ,fontWeight: '500',fontSize: '13.5px', lineHeight: '20px',alignItems: 'center',  letterSpacing: '2px',color: '#FCFCFC'}}>Register</button>
      </div>
      </div>
       <div className="col text-center">
         <img src={chat1} />
          <h2 style={{"fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"36px","textAlign":"center","color":"#14D2B8","margin-top":"36px"}}
          >Chat with Alex Marinov</h2>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >September 13</h3>
          <h3 style={{"fontStyle":"normal","fontWeight":"400","fontSize":"18px","lineHeight":"29.4px","textAlign":"center","color":"#FCFCFC","margin-top":"4px"}}
          >2020 2PM-3PM EST</h3>
          <button className="learnmore mt-3 mb-2" style={{background:'#150433',fontStyle: "normal" ,fontWeight: '500',fontSize: '13.5px', lineHeight: '20px',alignItems: 'center',  letterSpacing: '2px',color: '#FCFCFC'}}>Register</button>
      </div>
       </div>
       <div className="col text-center" style={{paddingTop:'70px'}}>
      <div className='row d-flex justify-content-center'  >
          <h3 style={{fontSize:"18px", fontFamily:"Mplus 1p",fontStyle:"normal",fontWeight:"500",lineHeight:"35.64px",textAlign:"center",color:"#FCFCFC"}}
          > Stay tuned for more Yolo events! </h3>
      </div>

      <form action="" onSubmit={this.handleSubmit}>
          <div className='row justify-content-center' style={{paddingTop:'20px'}}>
              <div className="col-12 col-md-5 ">
                  <input
                      className="subscribeInput text-center float-right"
                      style={{width:"129px",background:'#150433',color:"#FCFCFC", fontWeight:"600", fontSize:"18px"}}
                      type="text"
                      id="fname"
                      placeholder="FIRST NAME"
                      value={this.state.fname}
                      onChange={this.handleChange}
                  />
              </div>


                  <div className="col-12 col-md-2" style={{paddingRight:'34px',paddingLeft:'34px'}}>
                  <input
                      className="subscribeInput text-center"
                    style={{width:"129px",background:'#150433',color:"#FCFCFC", fontWeight:"600", fontSize:"18px"}}
                    type="text"
                    id="lname"
                    placeholder="LAST NAME"
                    value={this.state.lname}
                    onChange={this.handleChange}
                  />
                  </div>
              <div className="col-12 col-md-5">
                  <input
                      className="subscribeInput text-center float-left"
                      style={{width:"129px",background:'#150433',color:"#FCFCFC", fontWeight:"600", fontSize:"18px"}}
                      type="email"
                      id="email"
                      placeholder="EMAIL"
                      value={this.state.email}
                      onChange={this.handleChange}
                  />
              </div>

        </div>  
                <div className="row d-flex justify-content-center pb-5" style={{paddingTop:'39px'}}>
                  <input type="submit" name="SUBSCRIBE" className="learnmore" style={{background:'#150433',fontStyle: "normal" ,fontWeight: '500',fontSize: '13.5px', lineHeight: '20px',alignItems: 'center',  letterSpacing: '2px',color: '#FCFCFC'}} />
                </div>
              </form>
      </div>
      </div>
    
    );
  }
}

export default YoloChat;