import React, { Component } from "react";
import { Page, } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
// import API from "../api";
// import Loader from "react-loader-spinner";
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

    render() {
        return (
            <SiteWrapper>
                <Page.Content title="Manage User">
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
