// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
import axios from 'axios';
import {Button} from 'reactstrap'

class Page2 extends React.Component {



  kuchnai = (e) => {
    console.log('address wala')
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmitAddress = (e) => {
    console.log('idher')
      e.preventDefault();


      const config = {
          headers: {
              "Content-type": "application/json"
          }
      };

      const body = JSON.stringify({
        street: this.props.host.street,
        city: this.props.host.city,
        state:this.props.host.state,
        country:this.props.host.country
      });

      axios
          .post('/api/addressValidator', body, config)
          .then(res => {
              console.log(res);
          })
          .catch(err => {
            console.log(err)

          });
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
                        <div className="container-fluid">
                          <textarea
                            placeholder=" Street"
                            name="street"
                            value={this.props.host.street}
                            onChange={this.props.handleInputChange}
                            className="mt-3"
                          />
                          <textarea
                            placeholder=" City"
                            name="city"
                            value={this.props.host.city}
                            onChange={this.props.handleInputChange}
                            className="mt-3"
                          />
                          <textarea
                            placeholder=" State"
                            name="state"
                            value={this.props.host.state}
                            onChange={this.props.handleInputChange}
                            className="mt-3"
                          />
                          <textarea
                            placeholder=" Country"
                            name="country"
                            value={this.props.host.country}
                            onChange={this.props.handleInputChange}
                            className="mt-3"
                          />
                    </div>
                    <Button onClick={this.handleSubmitAddress}>Search For This Address</Button>
                  <div className="row mt-5 mb-4">
                        <div className="col"></div>
                        <div className="col">
                          <input
                            className="btn btn-danger"
                            type="submit"
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
