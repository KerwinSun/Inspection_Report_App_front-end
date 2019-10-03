import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form } from "tabler-react";
import API from "../api";

class ChangeAddressModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.saveChanges = this.saveChanges.bind(this);

    this.state = {
      show: true,
      address: "",
      submitClicked: false
    };
  }

  saveChanges() {

    this.setState({
      submitClicked: true
    })

    if (this.state.address !== "") {
      let houseData = this.props.house;
      houseData.address = this.state.address;
      API.postHouse(houseData)
        .then(res => {
          this.props.componentDidMount();
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ show: false });
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.toggleModal}>
        <Modal.Header>
          <Modal.Title>Change Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Group label="Address">
                <Form.Input
                    type='input'
                    placeholder={this.props.house.address}
                    onChange={e => this.setState({address: e.target.value})}
                    feedback={
                        this.state.address === ""
                        ? "Please input an address"
                        : null
                    }
                    invalid={this.state.submitClicked ?
                      this.state.address === "" : false}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.saveChanges}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ChangeAddressModal;
