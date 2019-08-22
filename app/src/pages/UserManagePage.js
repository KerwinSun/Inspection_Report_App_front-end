import React, { Component } from "react";
import { Container, Grid, Card, Button, Form, Avatar } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import UserTable from "../components/UserTable";
import Loader from "react-loader-spinner";
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