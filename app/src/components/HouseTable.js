import React from 'react';
import { Table, Button } from "tabler-react";
import ReportSharing from "./ReportSharing";
import ChangeAddressModal from "./ChangeAddressModal";

class HouseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            houseData: null
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    };

    addressClicked(house) {
        this.setState({
            showModal: true,
            houseData: house
        })
    }

    checkAccountType(accountType, house, houseState) {
        let res = [];
        if (accountType === "Admin") {
            // Unable to touch pending inspections
            if (houseState === "pending") {
                return <a>{house.address}</a>;
            } else {
                res.push(<a href={"/inspect/" + house.id}>{house.address}</a>);
                res.push(<ReportSharing house={house}></ReportSharing>);
            }
        } else if (accountType === "Inspector") {
            // Inspectors should be able to edit anywhere and download in progress & completed
            res.push(<a href={"/inspect/" + house.id}>{house.address}</a>);
            if (houseState === "completed" || houseState === "inprogress") {
                res.push(<ReportSharing house={house}></ReportSharing>);
            }
        } else if (accountType === "Client") {
            res.push(<a>{house.address}</a>);
            if (houseState === "pending") {
                //Client should be able to edit the address here
                res.push(
                <Button
                    variant="primary"
                    onClick={() => this.addressClicked(house)}    
                >
                    Change address
                </Button>)
            } else if (houseState === "completed") {
                //Client should be able to download report
                res.push(<ReportSharing house={house}></ReportSharing>)
            } 
        }
        return res;
    }

    render() {
        return (
            <Table cards={true} responsive={true} className="table-vcenter">
            <Table.Body>
                {this.props.houses.map(house => (
                    <Table.Row key={house.id}>
                        <div className="inspection-board">
                            {house.inspectionDate.substring(0, 10).split("-").reverse().join("/")}
                            {this.checkAccountType(this.props.accountType, house, this.props.houseState)}
                            {this.state.showModal ? (
                                <ChangeAddressModal 
                                    toggleModal={this.toggleModal}
                                    house={this.state.houseData}
                                    componentDidMount={this.props.componentDidMount}
                                />
                            ) : null}
                        </div>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        );
    }

} export default HouseTable;