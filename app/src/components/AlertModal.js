import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "tabler-react";

class AlertModal extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        show: true,
      };
    }


    render() {
      return (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Confirmation</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Are you sure you would like to 'proceed' with your actions?</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={this.props.toggleAlertModal}>Go back</Button>
      <Button variant="primary" onClick={this.props.proceedClicked}>Proceed</Button>
    </Modal.Footer>
  </Modal.Dialog>
      );
    }
}
export default AlertModal;