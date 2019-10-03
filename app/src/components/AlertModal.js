import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Alert, Header } from "tabler-react";

class AlertModal extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        show: true,
      };
    }

    render() {
      return (
        <Alert type={this.props.type} icon={this.props.icon}>
        <Header.H4>{this.props.title}</Header.H4> 
        <p>
          {this.props.body}
        </p>
        <Button.List>
          <Button color="secondary" onClick={this.props.backClicked}>
            Go Back
          </Button>
          <Button color="success" onClick={this.props.confirmClicked}>
            Confirm
          </Button>
        </Button.List>
      </Alert>
      );
    }
}
export default AlertModal;