import React from 'react';
import { Table } from "tabler-react";

//House card can be stateless (functional component)
const HouseTable = ({ houses }) => {
    return (
        <Table cards={true} responsive={true} className="table-vcenter">
            <Table.Header>
                <Table.Row>
                    <Table.ColHeader>id</Table.ColHeader>
                    <Table.ColHeader>Address</Table.ColHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {houses.map(house => (
                    <Table.Row key={house.id}>
                        <Table.Col>
                            <p>{house.id}</p>
                        </Table.Col>
                        <Table.Col>
                            <a href={"/inspect/" + house.id}>{house.address}</a>
                        </Table.Col>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default HouseTable;  