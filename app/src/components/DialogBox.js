import React from "react";
import { Button } from "tabler-react";
import Modal from "react-bootstrap/Modal";


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
          {this.props.addBackButton ? (
            <Button variant="secondary" onClick={this.props.dialogCancelClick}>
            Back
          </Button>
          ) : null}
          <Button variant="primary" onClick={this.props.dialogOkClick}>
            OK
          </Button>
        </Modal.Footer>
        
          
      </Modal>
    );
  }
}

export default DialogBox;
