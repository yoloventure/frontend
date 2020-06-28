// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
import axios from 'axios';
import {Button} from 'reactstrap'

class Page2 extends React.Component {


  constructor(props){
    super(props)

    this.state={
      addressResults:new Array(11)
    }
  }

  handleSubmitAddress = (e) => {
      e.preventDefault();


      const config = {
          headers: {
              "Content-type": "application/json"

          }
      };

      const body = JSON.stringify({
        street: this.props.host.street,
        city: this.props.host.city,
        state:this.props.host.state
      });

      axios
          .post('/api/addressValidator', body, config)
          .then(res => {
              console.log("aa gaya")
              const items=res.data
              let tempArray=[]
              console.log(items);
              items.forEach((element)=>{
                tempArray.push(
                  <button onClick={(e)=>this.selectAddress(e)}>{element.text}</button>
                )
                this.setState({addressResults:tempArray})
              })
          })
          .catch(err => {
            console.log(err)

          });
  }
  selectAddress=(e)=>{
    console.log(e.target.innerHTML)
    var addressArray=e.target.innerHTML.split(', ')
    var street=addressArray[0]
    var cityState=addressArray[1].split(' ')
    console.log('street:'+street + "city:"+cityState[0]+"cityState:"+cityState[1])
    this.props.updateStateAddress(street,cityState[0],cityState[1])

  }



  render() {


    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
                    <div className="container-fluid">
                        <div className="row">
                          <h3 className="join">Join a global community of hosts</h3>
                        </div>
                        <div className="row">
                          <h3 className="where">Where are you based?</h3>
                        </div>
                        <div className="container-fluid pt-5">
                          <label>Street</label>
                          <textarea
                            placeholder=""
                            name="street"
                            value={this.props.host.street}
                            onChange={this.props.handleInputChange}
                            className="mt-0"
                          />
                          <label>City</label>
                          <textarea
                            placeholder=""
                            name="city"
                            value={this.props.host.city}
                            onChange={this.props.handleInputChange}
                            className="mt-0"
                          />
                          <label>State</label>
                          <textarea
                            placeholder=""
                            name="state"
                            value={this.props.host.state}
                            onChange={this.props.handleInputChange}
                            className="mt-0"
                          />

                    </div>
                    <Button className='ml-3 mt-3' onClick={this.handleSubmitAddress}>Search For This Address</Button>
                    <div>
                      {this.state.addressResults}
                    </div>
                  <div className="row mt-5 mb-4">
                        <div className="col-4 offset-4">
                          <input
                            className="btn btn-danger"
                            type="submit"
                            onClick={this.props.setNextFalse}
                            value="Previous Step"
                          />
                        </div>
                        <div className="col-4">
                          <input
                            className="btn nextBtn"
                            type="submit"
                            onClick={this.props.setNextTrue}
                            value="Next Step"
                          />
                        </div>
                  </div>
          </div>
        </form>

      </div>
    );
  }
}

export default Page2;
