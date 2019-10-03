import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form, Alert, Header } from "tabler-react";
import NumberFormat from "react-number-format";
import API from "../api";
import AlertModal from "./AlertModal";

class UserEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.saveChanges = this.saveChanges.bind(this);

    this.state = {
      show: true,
      cFirstName: this.props.user.firstName,
      cLastName: this.props.user.lastName,
      cEmail: this.props.user.email,
      cPhone: this.props.user.phone,
      cAccountType: this.props.user.accountType,

      showAlert: false
    };

    this.isInputValid = this.isInputValid.bind(this);
    this.toggleAlertModal = this.toggleAlertModal.bind(this);
  }

  isInputValid = () => {
    return (
      this.isEmail(this.state.cEmail) &&
      this.state.cEmail !== "" &&
      this.state.cFirstName !== "" &&
      this.state.cLastName !== "" &&
      this.state.cPhone !== "" &&
      this.state.cAccountType !== ""
    );
  };

  isEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  saveChanges() {
    if (this.isInputValid()) {
      let userData = {
        firstName: this.state.cFirstName,
        lastName: this.state.cLastName,
        email: this.state.cEmail,
        phone: this.state.cPhone,
        accountType: this.state.cAccountType,
        id: this.props.user.id,
        password: this.props.user.password
      };
      API.postUser(userData)
        .then(res => {
          this.setState({
            cLastName: res.lastName,
            isLoaded: true
          });
          this.props.componentDidMount();
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ show: false });
      this.props.togggleShowModal();
    }
  }

  toggleAlertModal = () => {
    this.setState(prevState => ({
      showAlert: !prevState.showAlert
    }));
  };

  saveButtonClicked() {
    this.setState({
      showAlert: true
    });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.togggleShowModal}>
        <Modal.Header>
          <Modal.Title>Edit Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Group label="First Name">
                <Form.Input
                  placeholder="First Name"
                  onChange={e => this.setState({ cFirstName: e.target.value })}
                  feedback={
                    this.state.cFirstName === "" ||
                    this.state.cFirstName === null
                      ? "Please input the first name"
                      : null
                  }
                  invalid={
                    this.state.cFirstName === "" ||
                    this.state.cFirstName === null
                  }
                  value={this.state.cFirstName}
                />
              </Form.Group>
              <Form.Group label="Last Name">
                <Form.Input
                  placeholder="Last Name"
                  onChange={e => this.setState({ cLastName: e.target.value })}
                  feedback={
                    this.state.cLastName === "" || this.state.cLastName === null
                      ? "Please input the last name"
                      : null
                  }
                  invalid={
                    this.state.cLastName === "" || this.state.cLastName === null
                  }
                  value={this.state.cLastName}
                />
              </Form.Group>
              <Form.Group label="Phone Number">
                <NumberFormat
                  displayType={"input"}
                  customInput={Form.Input}
                  placeholder="Phone Number"
                  onChange={e => {
                    this.setState({ cPhone: e.target.value });
                  }}
                  feedback={
                    this.state.cPhone === "" || this.state.cPhone === null
                      ? "Please input the phone number"
                      : null
                  }
                  value={this.state.cPhone}
                  // invalid={
                  //   this.state.isSubmitClicked ? this.state.cPhone === "" : null
                  // }
                  invalid={
                    this.state.cPhone === "" || this.state.cPhone === null
                  }
                />
              </Form.Group>
              <Form.Group label="Email Address">
                <Form.Input
                  displayType={"input"}
                  customInput={Form.Input}
                  placeholder="Email Address"
                  feedback={
                    this.state.cEmail === ""
                      ? "Please input a valid email address"
                      : "Invalid email"
                  }
                  value={this.state.cEmail}
                  invalid={
                    this.state.cPhone === "" ||
                    this.state.cPhone === null ||
                    !this.isEmail(this.state.cEmail)
                  }
                  onChange={e => {
                    this.setState({ cEmail: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group label="Account Type">
                <select
                  onChange={e =>
                    this.setState({ cAccountType: e.target.value })
                  }
                  value={this.state.cAccountType}
                >
                  <option value="Client">Client</option>
                  <option value="Inspector">Inspector</option>
                  <option value="Admin">Admin</option>
                </select>
              </Form.Group>
            </Card.Body>
          </Card>
          {this.state.showAlert ? (
            <AlertModal
              type="warning"
              icon="bell"
              title="Confirmation"
              body="Are you sure you want to edit this account?"
              backClicked={this.toggleAlertModal}
              confirmClicked={this.saveChanges}
            />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.togggleShowModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => this.saveButtonClicked()}
          >
            Save changes
          </Button>
        </Modal.Footer>

      </Modal>
      
    );

  }
}

export default UserEditModal;
