import React from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";
import { MDBBtn } from "mdbreact";

class Page1 extends React.Component {
  constructor(props) {
    super(props);

    if (props.data.availableRanges) {
      this.state = {
        selectionRange: props.data.availableRanges,
      };
    } else {
      this.state = {
        selectionRange: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
        rangeTextboxes: new Array(100),
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleSelect(ranges) {
    this.setState(
      {
        selectionRange: {
          startDate: ranges.selection.startDate,
          endDate: ranges.selection.endDate,
          key: "selection",
        },
      },
      () => {
        this.props.handleDateRange(this.state.selectionRange);
      }
    );
  }

  addRange = () => {
    let rangesUpdated = this.state.rangeTextboxes;
    let rangesObjectsUpdated = this.state.rangeObjects;
    let textId = "textbox" + this.state.textboxIdCount;
    let startDateArray = this.state.selectionRange.startDate
      .toString()
      .split(" ");
    let endDateArray = this.state.selectionRange.endDate.toString().split(" ");

    let htmlForTextbox =
      startDateArray[0] +
      " " +
      startDateArray[1] +
      " " +
      startDateArray[2] +
      " " +
      startDateArray[3] +
      " - " +
      endDateArray[0] +
      " " +
      endDateArray[1] +
      " " +
      endDateArray[2] +
      " " +
      endDateArray[3];
    rangesUpdated[this.state.textboxIdCount] = (
      <div className="row">
        <div
          className="col-2 mt-4"
          onClick={this.deleteRange.bind(this, textId)}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-trash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>

        <div className="col-10 mt-4">
          <p>{htmlForTextbox}</p>
        </div>
      </div>
    );
    rangesObjectsUpdated[this.state.textboxIdCount] = {
      startDate: this.state.selectionRange.startDate,
      endDate: this.state.selectionRange.endDate,
    };

    this.setState({
      rangeTextboxes: rangesUpdated,
      textboxIdCount: this.state.textboxIdCount + 1,
      rangeObjects: rangesObjectsUpdated,
    });
  };

  deleteRange(id) {
    let rangesUpdated = this.state.rangeTextboxes;
    let rangesObjectsUpdated = this.state.rangeObjects;

    let idToDelete = id.charAt(7);
    rangesUpdated[idToDelete] = null;
    rangesObjectsUpdated[idToDelete] = null;

    this.setState({
      rangeTextboxes: rangesUpdated,
      rangeObjects: rangesObjectsUpdated,
    });
  }

  enableRangeEdit = () => {
    this.setState((prevState) => ({
      rangeEditDisabled: !prevState.rangeEditDisabled,
    }));
  };

  confirmRanges = () => {
    //will send rangeObjects to database then clear state.rangeObjects and state.rangeTextboxes
  };

  render() {
    let todayDate = new Date(moment().format("MM-DD-YYYY"));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  When do you want to shadow{" "}
                  {this.props.data.experience.host.user.fname}?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <MDBBtn
                  color={
                    this.state.rangeEditDisabled ? " disabled ml-3" : "ml-5"
                  }
                  size="sm"
                  style={{ background: "#109CF1", height: "3rem" }}
                  onClick={this.addRange}
                >
                  Add Range{" "}
                </MDBBtn>
                <MDBBtn
                  color={
                    this.state.rangeEditDisabled ? " disabled ml-3" : " ml-3"
                  }
                  size="sm"
                  style={{ background: "#109CF1", height: "3rem" }}
                  onClick={this.confirmRanges}
                >
                  Confirm and Submit{" "}
                </MDBBtn>
                <DateRange
                  ranges={[this.state.selectionRange]}
                  onChange={this.handleSelect}
                  moveRangeOnFirstSelection={false}
                  minDate={todayDate}
                  scroll={{ enabled: true }}
                  //maxDate={this.state.rangeEditDisabled? todayDate: new Date()}
                />
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col text-center">
                <input
                  className="btn nextBtn"
                  type="submit"
                  value="Next Step"
                  onClick={this.props.goNext}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page1;