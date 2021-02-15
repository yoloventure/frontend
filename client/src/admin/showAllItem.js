import React, { Component } from "react";
import Modal from "../components/modal";
import HostApplicationItem from "./hostApplicationItem";

class showAllItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModel3: false,
      showModel4: false
    };
  }

  toggleModal1 = e => {
    this.setState({
      showModal1: !this.state.showModal1
    });
  };
  toggleModal2 = e => {
    this.setState({
      showModal2: !this.state.showModal2
    });
  };
  toggleModal3 = e => {
    this.setState({
      showModal3: !this.state.showModal3
    });
  };
  toggleModal4 = e => {
    this.setState({
      showModal4: !this.state.showModal4
    });
  };


  render() {
    let acceptedItem = this.props.acceptedItem;
    let rejectedItem = this.props.rejectedItem;
    let pendingItem = this.props.pendingItem;
    let allItem = this.props.allItem;
  
    return (
    
      
      <div>
       
    
          <div className="col">
            <input className="btn btn-primary" type="button" value="All Accepted Hosts" onClick={e => {this.toggleModal1()}} />
          </div>
        
      <div>
        <Modal onClose={this.toggleModal1} show={this.state.showModal1} actions={
          <>            
          </>
          
        }>
        {Object.keys(acceptedItem).map((item,i)=> <HostApplicationItem key = {i} 
        item = {acceptedItem[item]} modify = {false}>  </HostApplicationItem>)}
     
          {/* {Object.keys(acceptedItem).map((item,i)=> <h1>{acceptedItem[item]._id}</h1>)} */}
          
        
        </Modal>
      </div>

      <div className="col">
            <input className="btn btn-primary" type="button" value="All Rejected Hosts" onClick={e => {this.toggleModal2()}} />
          </div>
        
      <div>
        <Modal onClose={this.toggleModal2} show={this.state.showModal2} actions={
          <>            
          </>
          
        }>
        {Object.keys(rejectedItem).map((item,i)=> <HostApplicationItem key = {i} 
        item = {rejectedItem[item]} modify = {false}>  </HostApplicationItem>)}
               
        
        </Modal>
      </div>

      <div className="col">
            <input className="btn btn-primary" type="button" value="Pending Hosts" onClick={e => {this.toggleModal3()}} />
          </div>
        
      <div>
        <Modal onClose={this.toggleModal3} show={this.state.showModal3} actions={
          <>            
          </>
          
        }>
        {Object.keys(pendingItem).map((item,i)=> <HostApplicationItem key = {i} 
        item = {pendingItem[item]} modify = {false}>  </HostApplicationItem>)}
               
        
        </Modal>
      </div>


      <div className="col">
            <input className="btn btn-primary" type="button" value="Modify Hosts" onClick={e => {this.toggleModal4()}} />
          </div>
        
      <div>
        <Modal onClose={this.toggleModal4} show={this.state.showModal4} actions={
          <>            
          </>
          
        }>
        {Object.keys(allItem).map((item,i)=> <HostApplicationItem key = {i} 
        item = {allItem[item]} modify = {true} acceptHost={this.props.acceptHost} rejectHost={this.props.rejectHost}>   </HostApplicationItem>)}
     
        </Modal>
      </div>
        </div>

    );
  }
}

export default showAllItem;