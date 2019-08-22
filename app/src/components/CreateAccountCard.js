import React, { Component } from "react";
import { Icon } from "tabler-react";
import { Page, Grid, Card, Button, Form, Alert } from "tabler-react";
import "./Custom.css";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import PropTypes from 'prop-types';

class CreateAccountCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: -1,
            inspectionDate: "",
            address: "",
            // iName: "",
            cName: "",
            cHomePhone: "",
            cMobilePhone: "",
            cEmailAddress: "",
            cAddress: "",
            cRealEstate: "",
            isSubmitClicked: false,
            isLoaded: true,
            loggedIn: false
            // userId: -1,
            // cName: "",
            // cMobilePhone: "",
            // cEmailAddress: "",
            // inspectionDate: "",
            // isSubmitClicked: false,
            // isLoaded: true
        };
    }

    isInputValid = () => {
        return (
            this.isEmail(this.state.cEmailAddress) &&
            this.state.cEmailAddress !== "" &&
            this.state.cAddress !== "" &&
            this.state.cName !== "" &&
            this.state.cHomePhone !== "" &&
            this.state.cMobilePhone !== "" &&
            this.state.address !== ""
        );
    };
    isEmail = email => {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    render() {
        const { OnCreateClicked, IsAdmin } = this.props;

        return (
            <div className="create_card">
                <Card title="Create Account">
                    <Card.Body>
                        <Form.Group label="First Name">
                            <Form.Input
                                placeholder="First Name"
                                onChange={e => this.setState({ cName: e.target.value })}
                                feedback={
                                    this.state.cName === ""
                                        ? "Please input the first name"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.cName === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Last Name">
                            <Form.Input
                                placeholder="Last Name"
                                onChange={e => this.setState({ cName: e.target.value })}
                                feedback={
                                    this.state.cName === ""
                                        ? "Please input the last name"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.cName === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Phone Number">
                            <NumberFormat
                                displayType={"input"}
                                customInput={Form.Input}
                                placeholder="Phone Number"
                                onChange={e =>
                                    this.setState({ cHomePhone: e.target.value })
                                }
                                feedback={
                                    this.state.cHomePhone === ""
                                        ? "Please input the client's home number"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.cHomePhone === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Email Address">
                            <Form.Input
                                placeholder="Email Address"
                                feedback={
                                    this.state.cEmailAddress === ""
                                        ? "Please input a valid email address"
                                        : "Invalid email"
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? !this.isEmail(this.state.cEmailAddress)
                                        : !(
                                            this.isEmail(this.state.cEmailAddress) ||
                                            this.state.cEmailAddress === ""
                                        )
                                }
                                onBlur={e => {
                                    this.setState({ cEmailAddress: e.target.value });
                                }}
                            />
                        </Form.Group>
                        {IsAdmin ?
                        <Form.Group label="Account Type">
                            <select>
                                <option value="Client">Client</option>
                                <option value="Inspector">Inspector</option>
                                <option value="Admin">Admin</option>
                            </select>
                            </Form.Group>
                            :
                            <div></div>
                        }
                        <Form.Group label="Password">
                            <Form.Input
                                placeholder="Password"
                                onChange={e => this.setState({ cName: e.target.value })}
                                feedback={
                                    this.state.cName === ""
                                        ? "Please input the password"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.cName === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Confirm Password">
                            <Form.Input
                                placeholder="Confirm Password"
                                onChange={e => this.setState({ cName: e.target.value })}
                                feedback={
                                    this.state.cName === ""
                                        ? "Please input the password"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.cName === ""
                                        : null
                                }
                            />
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

CreateAccountCard.PropTypes = {
    OnCreateClicked: PropTypes.func,
    IsAdmin: PropTypes.bool,
}

export default CreateAccountCard;
