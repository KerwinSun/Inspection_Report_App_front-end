import React, { Component } from "react";
import { Button, Icon } from "tabler-react";
import Loader from "react-loader-spinner";
import { EmailShareButton } from "react-share";
import { isMobile } from "react-device-detect";
//import API from "../api.js"

class ReportSharing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportURL: "",
      house: undefined,
      isLoaded: true,
      address: "",
      date: "",
      client: ""
    };
  }

  componentDidMount() {
    this.setState({
      house: this.props.house,
      address: this.props.house.address,
      date: this.props.house.inspectionDate,
     // client: this.props.house.summonsedBy.name
    });
  }
  simulateLoad = () => {
    this.setState({ isLoaded: false });
    setTimeout(
      function() {
        this.setState({
          isLoaded: true
        });
        this.getReport();
      }.bind(this),
      1500
    );
  };

  emailHeader = () => {
    return (
      "Hitch Building Inspections: Report for " +
      this.state.address +
      " on " +
      this.state.date
    );
  };
  emailBody = () => {
    return (
      "Dear "+this.state.client+",\n\n"+
      "The link is an inspection report that details an inspection conducted on:\n " +
      this.state.date +
      "\nat\n" +
      this.state.address+
      "\n\nRegards"
    );
  };
  render() {
    return (
      <div>
        {this.state.reportURL === "" ? (
          this.state.isLoaded ? (
              <div>
                <Button color="primary"
                onClick={this.simulateLoad}
                disabled={!this.state.isLoaded}>
                  <Icon prefix="fe" name="download" />
                </Button>
                {isMobile ? (
                  <EmailShareButton
                    url={this.state.reportURL}
                    subject={this.emailHeader()}
                    body={this.emailBody()}
                  >
                    <Button color="secondary">
                      <Icon prefix="fe" name="mail" />
                    </Button>
                  </EmailShareButton>
                ) : null}
              </div>
          ) : (
            <Loader type="ThreeDots" color="#316CBE" height={30} width={30} />
          )
        ) :null}
      </div>
    );
  }

  getReport = () => {
    //TODO: get pdf link
    let url = "testURL";
    this.setState({
      reportURL: url
    });
    // API.getReport(this.state.house.id).then(response => {
    // 	console.log(response);
    // 	this.setState({
    // 		reportURL:url
    // 	});
    // })
  };
}

export default ReportSharing;