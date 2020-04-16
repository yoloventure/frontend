import React from "react";

function Page1() {
  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <h3>Tell us about what you do.</h3>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <i className="">insert icon</i>
          </div>

          <p>import from LinkedIn</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <label>Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <label>Contact</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <label>Company</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <label>Email</label>
                <input type="text" />
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <label>Company Website/Social Media</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <label>Category</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <label>One line to describe what you do</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
