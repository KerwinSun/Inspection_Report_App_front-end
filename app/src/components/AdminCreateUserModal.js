import React from "react";
import Modal from "react-bootstrap/Modal";
import API from "../api";
import CreateAccountCard from "./CreateAccountCard";
class AdminCreateUserModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
        };
    }

    handleClick = (userInfo) => {
        console.log(userInfo)
        console.log("added")
        let userData = {
            FirstName: userInfo.firstName,
            LastName: userInfo.lastName,
            Password: userInfo.password,
            Phone: userInfo.phoneNumber,
            Email: userInfo.emailAddress,
            AccountType: userInfo.accountType,
        };
        console.log(userData)
        API.createAccount(userData)
            .then(res => {
                this.props.componentDidMount();
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({ show: false });
        this.props.togggleShowModal();
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
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AdminCreateUserModal;
