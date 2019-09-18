import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Button, Form } from "tabler-react";
import NumberFormat from "react-number-format";
import API from "../api";
class DialogBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.saveChanges = this.saveChanges.bind(this);

    this.state = {
      show: true,
      userdata: {}
    };

  }



//   saveChanges() {
//     let userData = {
//         FirstName: userInfo.firstName,
//         LastName: userInfo.lastName,
//         Password: userInfo.password,
//         Phone: userInfo.phoneNumber,
//         Email: userInfo.emailAddress,
//         AccountType: userInfo.accountType,
//       };
//       API.createAccount(userData)
//         .then(res => {
//           this.props.history.push("/login")
//         })
//         .catch(error => {
//           console.log(error);
//         });
//   }

  

  render() {
    return (
      <Modal show={this.state.show} onHide={this.props.togggleShowModal}>
        <Modal.Header>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.props.title}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.dialogOkClick}>
            OK
          </Button>
        </Modal.Footer>
        
          
      </Modal>
    );
  }
}

export default DialogBox;
