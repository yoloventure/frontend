import React from "react";

class Page5 extends React.Component {
  constructor(props) {
    super(props);
    const applicationSummary = props.applicationSummary;

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleJSON = this.handleJSON.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    return;
  }
  handleJSON(jsonText){
    var obj = JSON.parse(JSON.stringify(jsonText))
    return(
      <div className="container">
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>1</p>
          </div>
          <div className='col-6'>
          <p> userId: {obj.userId} </p>
          </div>

        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>2</p>
          </div>
          <div className='col-6'>
          <p> name: {obj.name} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>3</p>
          </div>
          <div className='col-6'>
          <p> gender: {obj.gender} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>4</p>
          </div>
          <div className='col-6'>
          <p> title: {obj.title} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>5</p>
          </div>
          <div className='col-6'>
          <p> company: {obj.company} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>6</p>
          </div>
          <div className='col-6'>
          <p> email: {obj.email} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>7</p>
          </div>
          <div className='col-6'>
          <p> phone: {obj.phone} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>8</p>
          </div>
          <div className='col-6'>
          <p> street: {obj.street} </p>
          </div>
        </div><div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>9</p>
          </div>
          <div className='col-6'>
          <p> city: {obj.city} </p>
          </div>
        </div><div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>10</p>
          </div>
          <div className='col-6'>
          <p> state: {obj.state} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>11</p>
          </div>
          <div className='col-6'>
          <p> website: {obj.website} </p>
          </div>
        </div>
        <div className="row">
          <div className='col-3'>
          <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>12</p>
          </div>
          <div className='col-6'>
          <p> description: {obj.description} </p>
          </div>
        </div>


      </div>
    )
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <h3>Host Application Review/Summary</h3>
            <div className="">
              <p>{this.handleJSON(this.props.host)}</p>
            </div>

            <div className="row mt-5 mb-4">
                    <div className="col-4 offset-4">
                      <input
                        className="btn nextBtn"
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

export default Page5;
