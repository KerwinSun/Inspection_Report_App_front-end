import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form } from "tabler-react";
import API from "../api";

class ChangePasswordModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.saveChanges = this.saveChanges.bind(this);

    this.state = {
      show: true,
      password: "",
      confirmPassword: "",
      isSubmitClicked: false
    };

    this.isInputValid = this.isInputValid.bind(this);
  }

  isInputValid = () => {
    return (
      this.isPassword(this.state.password) &&
      this.state.password !== "" &&
      this.state.confirmPassword === this.state.password
    );
  };

  isPassword = password => {
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    return regex.test(String(password))
    };

  saveChanges() {
    if (this.isInputValid()) {
      let userData = {
        email: this.props.user.email,
        password: this.state.password
      };
      API.changePassword(userData)
        .then(res => {
          this.props.componentDidMount();
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ show: false });
      this.props.toggleShowPwModal();
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.toggleShowPwModal}>
        <Modal.Header>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Group label="Password">
                <Form.Input
                    type='password'
                    placeholder="Password"
                    onChange={e => this.setState({password: e.target.value})}
                    feedback={
                        this.state.password === ""
                        ? "Please input a password"
                        : "Please input a valid password (At least 1 uppercase, 1 lowercase, 1 number, 1 special character, and a minimum of 8 characters)"
                    }
                    invalid={
                        this.state.isSubmitClicked
                            ? !this.isPassword(this.state.password)
                            : !(
                                this.isPassword(this.state.password) ||
                                this.state.password === ""
                            )
                    }
                />
              </Form.Group>
              <Form.Group label="Confirm Password">
                <Form.Input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={e => this.setState({ confirmPassword: e.target.value })}
                    feedback={
                        this.state.confirmPassword === ""
                            ? "Please confirm the password"
                            : "Passwords do not match"
                    }
                    invalid={
                        this.state.isSubmitClicked
                            ? this.state.confirmPassword === ""
                            : !(this.state.confirmPassword === this.state.password)
                    }
                />
             </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.toggleShowPwModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.saveChanges}>
            Save new password
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ChangePasswordModal;
