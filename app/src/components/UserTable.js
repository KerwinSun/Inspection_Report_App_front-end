import React from 'react';
import { Table, Button } from "tabler-react";
import ReportSharing from "./ReportSharing"

//User card can be stateless (functional component)
const UserTable = ({ users }) => {
    return (
        <Table>
            <Table.Header>
                <Table.ColHeader alignContent={"center"}>ID</Table.ColHeader>
                <Table.ColHeader alignContent={"center"}>First Name</Table.ColHeader>
                <Table.ColHeader alignContent={"center"}>Last Name</Table.ColHeader>
                <Table.ColHeader alignContent={"center"}>Action</Table.ColHeader>
            </Table.Header>
            <Table.Body>
            {users.map(user => (
                    <Table.Row key={user.id}>
                        <Table.Col alignContent={"center"}>
                            {user.id}
                        </Table.Col>
                        <Table.Col alignContent={"center"}>
                            {user.firstName}
                        </Table.Col>
                        <Table.Col alignContent={"center"}>
                            {user.lastName}
                        </Table.Col>
                        <Table.Col alignContent={"center"}>
                            <Button color="primary">Edit</Button>
                        </Table.Col>
                    </Table.Row>
                ))}
                
            </Table.Body>
        </Table>
       
    );
}

export default UserTable;