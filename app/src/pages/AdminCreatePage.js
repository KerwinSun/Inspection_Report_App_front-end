import React, { Component } from "react";
import { Page, Grid, Card, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import HouseTable from "../components/HouseTable";
import Loader from "react-loader-spinner";
import CreateAccountCard from "../components/CreateAccountCard";

class AdminCreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wipHouses: [],
            completedHouses: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        //     var id = 1; //Hard coded value for now.
        //     API.getPerson(id)
        //       .then(res => {
        //         var houses = res.inspected;
        //         var wipHouses = [];
        //         var completedHouses = [];
        //         houses.forEach(value => {
        //           value.house.completed
        //             ? completedHouses.push(value.house)
        //             : wipHouses.push(value.house);
        //         });
        //         this.setState({
        //           wipHouses: wipHouses,
        //           completedHouses: completedHouses,
        //           isLoaded: true
        //         });
        //       })
        //       .catch(error => {
        //         console.log(error);
        //       });
    }

    render() {
        return (
            <SiteWrapper>
                <Page.Content title="New User">
                    <div className="login">
                        <CreateAccountCard
                            IsAdmin={true} // default false - for client creation page
                            SubmitClicked={this.handleClick}
                            CancelClicked={this.cancelClick}
                            ContainerStyle="admin_create"
                        />
                    </div>
                </Page.Content>
            </SiteWrapper>
        );
    }
}

export default AdminCreatePage;
