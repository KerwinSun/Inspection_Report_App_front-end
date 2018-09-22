import React from 'react';
import { Table } from "tabler-react";
import ReportSharing from "./ReportSharing"

//House card can be stateless (functional component)
const HouseTable = ({ houses }) => {
    return (
        <Table cards={true} responsive={true} className="table-vcenter">
            <Table.Header>
                <Table.Row>
                    <Table.ColHeader alignContent={"center"}>id</Table.ColHeader>
                    <Table.ColHeader alignContent={"center"}>Address</Table.ColHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {houses.map(house => (
                    <Table.Row key={house.id}>
                        <Table.Col alignContent={"center"}>
                            {house.id}
                        </Table.Col>
                        <Table.Col alignContent={"center"}>
                            <a href={"/inspect/" + house.id}>{house.address}</a>
                        </Table.Col>
                        <Table.Col alignContent={"center"}>
                            <ReportSharing house={house}></ReportSharing>   
                        </Table.Col>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default HouseTable;  