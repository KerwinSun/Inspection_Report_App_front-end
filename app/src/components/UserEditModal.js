import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form } from "tabler-react";
import NumberFormat from "react-number-format";

class UserEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleShow() {
    this.setState({ show: true });
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
                  onChange={e => this.setState({ cName: e.target.value })}
                  feedback={
                    this.state.cName === ""
                      ? "Please input the first name"
                      : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cName === "" : null
                  }
                />
              </Form.Group>
              <Form.Group label="Last Name">
                <Form.Input
                  placeholder="Last Name"
                  onChange={e => this.setState({ cName: e.target.value })}
                  feedback={
                    this.state.cName === ""
                      ? "Please input the last name"
                      : null
                  }
                  invalid={
                    this.state.isSubmitClicked ? this.state.cName === "" : null
                  }
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
