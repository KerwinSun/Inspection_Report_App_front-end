import React from 'react';
import { Table } from "tabler-react";
import ReportSharing from "./ReportSharing"

//House card can be stateless (functional component)
const HouseTable = ({ houses }) => {
    return (
        <Table cards={true} responsive={true} className="table-vcenter">
            <Table.Body>
                {houses.map(house => (
                    <Table.Row key={house.id}>
                        <Table.Col alignContent={"center"}>
                            {house.inspectionDate}
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