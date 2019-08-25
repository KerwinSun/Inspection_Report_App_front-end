import React from "react";
import { Card } from "tabler-react";
import UserTable from "../components/UserTable";
import API from "../api";
import Loader from "react-loader-spinner";
class UserManagePage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            empData: []
        };
    }
    
    componentDidMount() {
        API.getUsers()
          .then(res => {
            this.setState({
             empData: res,
             isLoaded:true
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

    render() {
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
                            <UserTable users={this.state.empData} />
                    ) : (
                  <Card.Body>
                    <div className="btn-list text-center">
                      <Loader
                        type="ThreeDots"
                        color="#316CBE"
                        height={30}
                        width={30}
                      />
                    </div>
                  </Card.Body>
                )}
              </Card>
                </div>
            </div>
        );
    }


}
export default UserManagePage;