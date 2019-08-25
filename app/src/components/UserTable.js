import React from "react";
import { Table, Button } from "tabler-react";
import Modal from "react-bootstrap/Modal";

class UserTable extends React.Component {
  render() {
    //User card can be stateless (functional component)
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.ColHeader alignContent={"center"}>ID</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>
              First Name
            </Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Last Name</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Action</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            {this.props.users.map(user => (
              <Table.Row key={user.id}>
                <Table.Col alignContent={"center"}>{user.id}</Table.Col>
                <Table.Col alignContent={"center"}>{user.name}</Table.Col>
                <Table.Col alignContent={"center"}>{user.lastName}</Table.Col>
                <Table.Col alignContent={"center"}>
                  <Button variant="primary">Edit</Button>
                </Table.Col>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Modal show={true}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserTable;
