import React from "react";
import Modal from "react-bootstrap/Modal";
import API from "../api";
import CreateAccountCard from "./CreateAccountCard";
import { Alert } from "tabler-react";

class AdminCreateUserModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
            showAlert: false,
            errorMessage: ""
        };
    }

    handleClick = (userInfo) => {
        let userData = {
            FirstName: userInfo.firstName,
            LastName: userInfo.lastName,
            Password: userInfo.password,
            Phone: userInfo.phoneNumber,
            Email: userInfo.emailAddress,
            AccountType: userInfo.accountType,
        };

        API.checkAccount(userInfo.emailAddress)
            .then(res => {
                // valid account (unregistered)
                this.setState({showAlert: false});
                API.createAccount(userData)
                .then(res => {
                    if (res === "User created failed") {
                        this.setState({
                            errorMessage: "Account creation failed.",
                            showAlert: true
                        })
                    } else {
                        this.props.componentDidMount();
                        this.setState({ show: false});
                        this.props.toggleShowModal();
                    }
                })
                .catch(error => {
                    this.setState({
                        errorMessage: "Account creation failed.",
                        showAlert: true
                    })
                })
            })
            .catch(error => {
                // invalid account (registered)
                this.setState({
                    errorMessage: "Account already registered",
                    showAlert: true
                });
            })

    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.props.togggleShowModal}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="login">
                        <CreateAccountCard
                            IsAdmin={true} // default false - for client creation page
                            SubmitClicked={this.handleClick}
                            CancelClicked={this.props.togggleShowModal}
                            ContainerStyle="admin_create"
                        />
                        {this.state.showAlert ? (
                            <Alert type="danger" icon="alert-triangle">
                                {this.state.errorMessage}
                            </Alert>
                        ) : null}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AdminCreateUserModal;
