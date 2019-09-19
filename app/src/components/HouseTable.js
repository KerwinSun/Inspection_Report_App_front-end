import React from 'react';
import { Table } from "tabler-react";
import ReportSharing from "./ReportSharing"

//House card can be stateless (functional component)


const HouseTable = ({ houses, accountType }) => {
    return (
        <Table cards={true} responsive={true} className="table-vcenter">
            <Table.Body>
                {houses.map(house => (
                    <Table.Row key={house.id}>
                        <div className="inspection-board">
                            {house.inspectionDate.substring(0, 10).split("-").reverse().join("/")}
                     
                            {accountType === "Client" ? <a>{house.address}</a> : <a href={"/inspect/" + house.id}>{house.address}</a>}
                        
                            <ReportSharing house={house}></ReportSharing>
                        </div>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default HouseTable;