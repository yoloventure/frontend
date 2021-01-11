import React, { Component } from "react";

class Page1 extends React.Component {


  state={
    errorPage1:"",
    submittedPage1:false,
  }
  handleSubmitPage1=(e)=>{
    e.preventDefault();

    let host=this.props.host
    if(!host.fname|| !host.lname ||!host.company ||!host.phone|| !host.email ||!host.title ||!host.yearsExp||!host.industry){
      this.setState({submittedPage1:true, errorPage1:"Please fill all required fields"})
    }else{
      this.props.setNextTrue()

    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitPage1}>
          <div className="container-fluid">
            <div className="row mt-1 mb-3">
              <h3>Tell us about what you do.</h3>
            </div>
            <p className="text-danger">{this.state.errorPage1}</p>

            <div className="row mb-1">
               <div className="col-sm-2">

                <h6>Personal</h6>

              </div>
              {/*
              <div className="col-sm-2">
                <i className="">insert icon</i>
              </div>

              <p>import from LinkedIn</p>
              */}
            </div>
            <div className="container-fluid">
              <div className="row mb-n2">
                <div className="col ml-n3 ">
                  <label>First Name</label>

                </div>

                <div className="col ml-n3 ">
                  <label>Last Name</label>
                </div>

              </div>

              <div className="row ">
                    <div className="col-sm-6">
                      <div className="row">
                        <input
                          type="text"
                          name="fname"
                          placeholder="First Name"
                          value={this.props.host.fname}
                          onChange={this.props.handleInputChange}
                        />

                      </div>
                      {this.state.submittedPage1 && !this.props.host.fname?
                          <div className="row">First Name is required</div>
                          :null
                      }
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          value={this.props.host.lname}
                          onChange={this.props.handleInputChange}
                        />

                      </div>
                      {this.state.submittedPage1 && !this.props.host.lname?
                          <div className="row">Last Name is required</div>
                          :null
                      }
                    </div>

              </div>
              <div className="row mt-3 mb-n2">
                    <div className="col sm-6 ml-n3">
                      <label>Email</label>
                    </div>

                  <div className="col-sm-6 ml-n3">
                    <label>Gender</label>
                  </div>

              </div>

              <div className="row">
                  <div className="col-sm-6">
                    <div className="row">
                      <input
                        placeholder="user@email.com"
                        name="email"
                        value={this.props.host.email}
                        onChange={this.props.handleInputChange}
                        type="email"
                      />
                    </div>
                    {this.state.submittedPage1 && !this.props.host.email?
                        <div className="row">Email is required</div>
                        :null
                    }
                  </div>
                <div className="col-sm-6">
                  <div className="row">
                    <select
                      name="gender"
                      value={this.props.host.gender}
                      onChange={this.props.handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="nonbinary">Non-binary</option>
                    </select>
                  </div>
                </div>

              </div>


              <div className="row mt-3 mb-n2">
                  <div className="col-sm-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="title">Title</label>
                    </div>

              </div>


              <div className="row">
                  <div className="col-sm-6">
                      <div className="row">

                        <input
                          placeholder="+1 222-222-2222"
                          name="phone"
                          value={this.props.host.phone}
                          type="tel"
                          onChange={this.props.handleInputChange}
                        />
                      </div>
                    {this.state.submittedPage1 && !this.props.host.phone?
                        <div className="row">Phone is required</div>
                        :null
                    }
                </div>
                <div className="col-sm-6">
                  <div className="row">

                    <input
                      name="title"
                      placeholder="ex: Recruiter"
                      value={this.props.host.title}
                      type="text"
                      onChange={this.props.handleInputChange}
                      />
                  </div>
                    {this.state.submittedPage1 && !this.props.host.title?
                        <div className="row">Title is required</div>
                        :null
                    }
                  </div>
              </div>



              <div className="row mt-3 mb-n2">
                <div className="col">
                  <div className="row mb-n2">
                    <label htmlFor="">
                      Years of experience in current industry
                    </label>
                  </div>
                  <div className="row">
                    <input
                      type="number"
                      placeholder=""
                      name="yearsExp"
                      value={this.props.host.yearsExp}
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                  {this.state.submittedPage1 && !this.props.host.yearsExp?
                      <div className="row">Years are required</div>
                      :null
                  }

                  <div className="row mt-3 mb-n2">
                          <label>Industry</label>
                  </div>
                  <div className="row">
                    <select
                      name="industry"
                      value={this.props.host.industry}
                      onChange={this.props.handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="engineering">Engineering</option>
                      <option value="artAndDesign">Art & Design</option>
                      <option value="businessAndFinance">Business & Finance</option>
                      <option value="healthCare">Healthcare</option>
                      <option value="others">Others</option>

                    </select>
                  </div>
                  {this.state.submittedPage1 && !this.props.host.phone?
                      <div className="row">Industry is required</div>
                      :null
                  }

                  <div className="row mt-3 mb-n3">
                    <label htmlFor="">
                      <label htmlFor="">Company</label>
                    </label>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="company"
                      placeholder="ex: YoloShadow"
                      value={this.props.host.company}
                      onChange={this.props.handleInputChange}
                    />

                  </div>
                  {this.state.submittedPage1 && !this.props.host.company?
                      <div className="row">Company is required</div>
                      :null
                  }

                  <div className="row mt-3 mb-n2">
                    <label>Company website</label>
                  </div>
                  <div className="row">
                    <input
                      placeholder="website url"
                      name="website"
                      value={this.props.host.website}
                      type="text"
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col">

                  <div className="row">
                      <label htmlFor="">One line to describe what you do</label>
                      <textarea name="description"
                          value={this.props.host.description}
                          onChange={this.props.handleInputChange}
                      ></textarea>
                  </div>

              </div>

              </div>

              <div className="row mt-5 mb-4">
                <div className="col"></div>
                <div className="col">
                  <input
                    className="btn nextBtn"
                    type="submit"
                    value="Next Step"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page1;
