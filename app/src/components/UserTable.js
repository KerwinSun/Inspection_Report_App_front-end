import React from "react";
import { Table, Button } from "tabler-react";
import UserEditModal from "./UserEditModal";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.togggleShowModal = this.togggleShowModal.bind(this);
  }

  togggleShowModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

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
                <Table.Col alignContent={"center"}>
                  {user.inspected.length}
                </Table.Col>
                <Table.Col alignContent={"center"}>
                  <Button variant="primary" onClick={this.togggleShowModal}>
                    Edit
                  </Button>
                </Table.Col>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {this.state.showModal ? (
          <UserEditModal togggleShowModal={this.togggleShowModal} />
        ) : null}
      </div>
    );
  }
}

export default UserTable;
