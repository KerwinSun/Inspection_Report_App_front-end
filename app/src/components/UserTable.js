import React from 'react';
import { Table, Button,Form } from "tabler-react";
import ReportSharing from "./ReportSharing"
import Modal from 'react-bootstrap/Modal'
import NumberFormat from "react-number-format";


function Example(sampleUser) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow}>
                Edit
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {sampleUser.sampleUser.firstName}  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group label="First Name">
                        <Form.Input
                            placeholder="First Name"
                        />
                    </Form.Group>
                    <Form.Group label="Last Name">
                        <Form.Input
                            placeholder="Last Name"
                        />
                    </Form.Group>
                    <Form.Group label="Phone Number">
                        <NumberFormat
                            displayType={"input"}
                            customInput={Form.Input}
                            placeholder="Phone Number"
                        />
                    </Form.Group>
                    <Form.Group label="Email Address">
                        <Form.Input
                            placeholder="Email Address"
                           
                        />
                    </Form.Group>

                        <Form.Group label="Account Type">
                            <select>
                                <option value="Client">Client</option>
                                <option value="Inspector">Inspector</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </Form.Group>
                       
                    <Form.Group label="Password">
                        <Form.Input
                            placeholder="Password"
                            
                        />
                    </Form.Group>
                    <Form.Group label="Confirm Password">
                        <Form.Input
                            placeholder="Confirm Password"
    
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}



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
                    <Table.Row key={user.id} >
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
                            <Example sampleUser={user} />
                        </Table.Col>
                    </Table.Row>
                ))}

            </Table.Body>
        </Table>

    );
}

export default UserTable;