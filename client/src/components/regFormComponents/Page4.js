// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
import {Button} from "reactstrap"

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    return ;
  }
  handleClick(e){
    let currentText=document.getElementById('textArea').innerHTML
    currentText=currentText.concat(e.currentTarget.textContent+',')
    document.getElementById('textArea').innerHTML=currentText
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <h3>Expertise</h3>
            <div className="row container">
              <p>
                We love who you are as a person (a.k.a: no matter what skill
                sets you have, we at Yolo will always love you). Please only
                select the skill sets that you are able to confidently show
                during your job shadow experience
              </p>
            </div>

            <div className="container-fluid">
              <div className="row">
                <textarea
                  name="expertise"
                  id="textArea"
                  placeholder="What expertise do you have? List as many as possible. Examples can include: Artificial Intelligence, Geographic Information System, Woodmaking."
                  value={this.props.host.expertise}
                  onChange={this.props.handleInputChange}
                />
              </div>
            </div>
            <Button className='pr-2' style={{margin:'5%'}} variant="light" onClick={(e)=>this.handleClick(e)}>Artificial Intelligence</Button>
            <Button className='pr-2' style={{margin:'5%'}} variant="light" onClick={(e)=>this.handleClick(e)}>Woodmaking</Button>
            <Button className='pr-2' style={{margin:'5%'}} variant="light" onClick={(e)=>this.handleClick(e)}>Cooking</Button>
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
                        className="btn btn-danger"
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

export default Page4;
