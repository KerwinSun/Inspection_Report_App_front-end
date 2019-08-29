import React from "react";
import { Table, Button } from "tabler-react";
import UserEditModal from "./UserEditModal";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      id: null
    };
    this.togggleShowModal = this.togggleShowModal.bind(this);
  }

  togggleShowModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  editButtonClicked(buttonId) {
    this.setState({
      showModal: true,
      id: buttonId
    });
  }

  render() {
    //User card can be stateless (functional component)
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.ColHeader alignContent={"center"}>
              First Name
            </Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Last Name</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Email</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Phone</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>
              Account Type
            </Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Action</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            {this.props.users.map(user => (
              <Table.Row key={user.firstName}>
                <Table.Col alignContent={"center"}>{user.firstName}</Table.Col>
                <Table.Col alignContent={"center"}>{user.lastName}</Table.Col>
                <Table.Col alignContent={"center"}>{user.email}</Table.Col>
                <Table.Col alignContent={"center"}>{user.phone}</Table.Col>
                <Table.Col alignContent={"center"}>
                  {user.accountType}
                </Table.Col>
                <Table.Col alignContent={"center"}>
                  <Button
                    variant="primary"
                    onClick={() => this.editButtonClicked(user.id)}
                    id={user.id}
                  >
                    Edit
                  </Button>
                </Table.Col>
                {this.state.showModal ? (
                  <UserEditModal
                    togggleShowModal={this.togggleShowModal}
                    user={this.props.users.find(x => x.id === this.state.id)}
                    componentDidMount={this.props.componentDidMount}
                  />
                ) : null}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default UserTable;
