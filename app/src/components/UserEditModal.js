import React from "react";
import { Button } from "tabler-react";
import Modal from "react-bootstrap/Modal";

class UserEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.togggleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
