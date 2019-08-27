import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form } from "tabler-react";
import NumberFormat from "react-number-format";
import API from "../api";
class UserEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true,
      cFirstName: this.props.user.firstName,
      cLastName: this.props.user.lastName,
      cEmailAddress: this.props.user.email,
      cHomePhone: this.props.user.phone
    };
  }

  handleShow() {
    let userData = {
      firstName: this.state.cFirstName,
      lastName: this.state.cLastName,
      email: this.state.cEmailAddress,
      phone: this.state.cHomePhone,
      id: this.props.user.id,
      password: this.props.user.password
    };
    API.postUser(userData)
    .then(res => {
      this.setState({
       cLastName: res.lastName,
       isLoaded:true
      });
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({ show: false });
  }

  isEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.togggleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card title="Create Account">
            <Card.Body>
              <Form.Group label="First Name">
                <Form.Input
                  placeholder="First Name"
                  onChange={e => this.setState({ cFirstName: e.target.value })}
                  feedback={
                    this.state.cName === ""
                      ? "Please input the first name"
                      : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cFirstName === "" : null
                  }
                  defaultValue = {this.state.cFirstName}
                />
              </Form.Group>
              <Form.Group label="Last Name">
                <Form.Input
                  placeholder="Last Name"
                  onChange={e => this.setState({ cLastName: e.target.value })}
                  feedback={
                    this.state.cName === ""
                      ? "Please input the last name"
                      : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cLastName === "" : null
                  }
                  defaultValue = {this.state.cLastName}
                />
              </Form.Group>
              <Form.Group label="Phone Number">
                <NumberFormat
                  displayType={"input"}
                  customInput={Form.Input}
                  placeholder="Phone Number"
                  onChange={e => this.setState({ cHomePhone: e.target.value })}
                  feedback={
                    this.state.cHomePhone === ""
                      ? "Please input the client's home number"
                      : null
                  }
                  invalid={
                    this.state.isSubmitClicked
                      ? this.state.cHomePhone === ""
                      : null
                  }
                  defaultValue = {this.state.cHomePhone}
                />
              </Form.Group>
              <Form.Group label="Email Address">
                <Form.Input
                  placeholder="Email Address"
                  feedback={
                    this.state.cEmailAddress === ""
                      ? "Please input a valid email address"
                      : "Invalid email"
                  }
                  invalid={
                    this.state.isSubmitClicked
                      ? !this.isEmail(this.state.cEmailAddress)
                      : !(
                          this.isEmail(this.state.cEmailAddress) ||
                          this.state.cEmailAddress === ""
                        )
                  }
                  onBlur={e => {
                    this.setState({ cEmailAddress: e.target.value });
                  }}
                  defaultValue = {this.state.cEmailAddress}
                />
              </Form.Group>
              <Form.Group label="Account Type">
                <select>
                  <option value="Client">Client</option>
                  <option value="Inspector">Inspector</option>
                  <option value="Admin">Admin</option>
                </select>
              </Form.Group>
              <Form.Group label="Password">
                <Form.Input
                  placeholder="Password"
                  onChange={e => this.setState({ cName: e.target.value })}
                  feedback={
                    this.state.cName === "" ? "Please input the password" : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cName === "" : null
                  }
                />
              </Form.Group>
              <Form.Group label="Confirm Password">
                <Form.Input
                  placeholder="Confirm Password"
                  onChange={e => this.setState({ cName: e.target.value })}
                  feedback={
                    this.state.cName === "" ? "Please input the password" : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cName === "" : null
                  }
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.togggleShowModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UserEditModal;
