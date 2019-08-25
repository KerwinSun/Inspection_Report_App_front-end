import React from "react";
import { Card } from "tabler-react";
import UserTable from "../components/UserTable";
class UserManagePage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id:"1",
                    firstName:"nikhil",
                    lastName:"don",
                    email:"nikhil@hotmail.com"
                },
                {
                    id:"2",
                    firstName:"akhil",
                    lastName:"don",
                    email:"nikhil@hotmail.com"
                }
            ]
    
        };
    }
    
    

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Admin</h1>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                    <Card>
                        <Card.Header>
                            <Card.Title>Users</Card.Title>
                         </Card.Header>
                         {this.state.isLoaded ? (
                            <UserTable users={users} />
                    ) : (
                  <Card.Body>
                  <UserTable users={users} />
                  </Card.Body>
                )}
              </Card>
                </div>
            </div>
        );
    }


}
export default UserManagePage;