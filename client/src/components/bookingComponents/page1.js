import React from "react";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";

class Page1 extends React.Component {
  constructor(props) {
    super(props);

    if (props.data.availableRanges) {
      this.state = {
        selectionRange: props.data.availableRanges
      };
    } else {
      this.state = {
        selectionRange: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        },
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleSelect(ranges) {
    this.setState({selectionRange: {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection'
    }}, () => {
      this.props.handleDateRange(this.state.selectionRange);
    });
  }

  render() {
    let todayDate = new Date(moment().format("MM-DD-YYYY"));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  When do you want to shadow {this.props.data.experience.host.user.fname}?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <DateRange
                  ranges={[this.state.selectionRange]}
                  onChange={this.handleSelect}
                  moveRangeOnFirstSelection={false}
                  minDate={todayDate}
                  scroll={{enabled: true}}
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
