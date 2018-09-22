import React, { Component } from "react";
import { Button, Icon } from "tabler-react";
import Loader from "react-loader";
import {EmailShareButton} from "react-share";
import {isMobile} from "react-device-detect";
//import API from "../api.js"

class ReportSharing extends Component {

	constructor(props) {
    super(props);
    this.state = {
			reportURL:"",
			house:undefined,
			loaded:true,
			address:"",
			date:""
		 };
	}

	componentDidMount() {
    this.setState(
      {
		house: this.props.house,
		address: this.props.house.address,
		date:this.props.house.inspectionDate
      }
    );
	}
	simulateLoad = ()=> {
		this.setState({ loaded: false })
		// Simulated a response callback/promise/etc.
		setTimeout(function() {
			this.setState({
				loaded: true
			});
			this.getReport();
		}.bind(this), 1500);
	}

	emailHeader = () => {
		return "Hitch Building Inspections: Report for "+this.state.address+" on "+this.state.date;
	}
	emailBody=()=>{
		return "Dear,\nThe following is a link to an inspection conduction on "+this.state.date+" at "+this.state.address;
	}
  render() {
    return (
			<div>
				 
				{(
					(this.state.reportURL==="")? 
						<Button color="secondary" onClick={this.simulateLoad} disabled={!this.state.loaded}>
							<Loader loaded={this.state.loaded} length={10} width={2}>
								<Icon prefix="fe" name="file-plus" />
							</Loader>
						</Button>
					:
					<div>
						<Button color="primary">
							<Icon prefix="fe" name="download" />
						</Button>
						{(isMobile?	
						<EmailShareButton 
							url={this.state.reportURL}
							subject={this.emailHeader()}
							body={this.emailBody()}>
							<Button color="secondary">
								<Icon prefix="fe" name="mail" />
							</Button>
						</EmailShareButton>
						:null)}
					</div>
				)}
      </div>
    );
	}
	
	getReport = () => {
		//TODO: get pdf link
		let url = "testURL"
		this.setState({
			reportURL:url
		});
		// API.getReport(this.state.house.id).then(response => {
		// 	console.log(response);
		// 	this.setState({
		// 		reportURL:url
		// 	});
		// })
	}
}

export default ReportSharing;
