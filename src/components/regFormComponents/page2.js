import React from "react";

function Page2() {
  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <h3>Join a global community of hosts</h3>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h3>Where are you based?</h3>
          </div>
        </div>
        <div className="container-fluid">
          <textarea name="location" id="" cols="30" rows="10">
            City/State/Country
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Page2;
