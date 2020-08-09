import React from "react";

class Page5 extends React.Component {
  constructor(props) {
    super(props);

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
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>1</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>userId</b>: {obj.userId} </p>
          </div>

        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>2</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>name:</b> {obj.name} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>3</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>gender:</b> {obj.gender} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>4</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>title:</b> {obj.title} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>5</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>company:</b> {obj.company} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>6</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>email:</b> {obj.email} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>7</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>phone:</b> {obj.phone} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>8</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>street:</b> {obj.street} </p>
          </div>
        </div><div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>9</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>city:</b> {obj.city} </p>
          </div>
        </div><div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>10</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>state:</b> {obj.state} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>11</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>website:</b> {obj.website} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>12</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>expertise:</b> {obj.expertise} </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className='col-2'>
          <p className="ellipse" style={{height:'75%', width:'50%',background:'transparent'}}>13</p>
          </div>
          <div className='col-6'>
          <p className='mt-2'> <b>description:</b> {obj.description} </p>
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
              <p className='mt-2'>{this.handleJSON(this.props.host)}</p>
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
