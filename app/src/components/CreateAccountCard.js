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
          firstName: "",
          lastName: "",
          phoneNumber: "",
          emailAddress: "",
          accountType: "",
          password: "",
          confirmPassword: "",
          isSubmitClicked: false,
          isLoaded: true,
          loggedIn: false
        };
    }

    isInputValid = () => {
        return (
            this.isEmail(this.state.emailAddress) &&
            this.state.emailAddress !== "" &&
            this.state.firstName !== "" &&
            this.state.lastName !== "" &&
            this.state.phoneNumber !== "" &&
            this.state.password !== "" &&
            this.state.confirmPassword == this.state.password
        );
    };
    isEmail = email => {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    render() {
        const { ContainerStyle, SubmitClicked, IsAdmin, CancelClicked } = this.props;

        return (
            <div className={ContainerStyle}>
                <Card title="Create Account">
                    <Card.Body>
                        <Form.Group label="First Name">
                            <Form.Input
                                placeholder="First Name"
                                onChange={e => this.setState({ firstName: e.target.value })}
                                feedback={
                                    this.state.firstName === ""
                                        ? "Please input the first name"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.firstName === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Last Name">
                            <Form.Input
                                placeholder="Last Name"
                                onChange={e => this.setState({ lastName: e.target.value })}
                                feedback={
                                    this.state.lastName === ""
                                        ? "Please input the last name"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.lastName === ""
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
                                    this.setState({ phoneNumber: e.target.value })
                                }
                                feedback={
                                    this.state.phoneNumber === ""
                                        ? "Please input the client's home number"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.phoneNumber === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Email Address">
                            <Form.Input
                                placeholder="Email Address"
                                feedback={
                                    this.state.emailAddress === ""
                                        ? "Please input a valid email address"
                                        : "Invalid email"
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? !this.isEmail(this.state.emailAddress)
                                        : !(
                                            this.isEmail(this.state.emailAddress) ||
                                            this.state.emailAddress === ""
                                        )
                                }
                                onBlur={e => {
                                    this.setState({ emailAddress: e.target.value });
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
                                type='password'
                                placeholder="Password"
                                onChange={e => this.setState({ password: e.target.value })}
                                feedback={
                                    this.state.password === ""
                                        ? "Please input the password"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.password === ""
                                        : null
                                }
                            />
                        </Form.Group>
                        <Form.Group label="Confirm Password">
                            <Form.Input
                                type="password"
                                placeholder="Confirm Password"
                                onChange={e => this.setState({ confirmPassword: e.target.value })}
                                feedback={
                                    this.state.confirmPassword === ""
                                        ? "Please confirm the password"
                                        : null
                                }
                                invalid={
                                    this.state.isSubmitClicked
                                        ? this.state.confirmPassword === ""
                                        : null
                                }
                            />
                        </Form.Group>

                        <Button.List align="center">
                {this.state.isSubmitClicked ? (
                    !this.isInputValid() ? (
                        <Alert type="danger" icon="alert-triangle">
                            Invalid information
                        </Alert>
                    ) : this.state.isLoaded ? null : (
                     <div className="btn-list text-center">
                       <Loader
                           type="ThreeDots"
                          color="#316CBE"
                         height={30}
                         width={30}
                       />
                     </div>
                )
                ) : null}
                <Button
                onClick={() => {
                    this.setState(
                        {
                            isSubmitClicked: false
                        }
                    )
                    CancelClicked()
                }}
                color="secondary"
                >
                Cancel
                </Button>
                <Button
                onClick={() => {
                    this.setState(
                    {
                        isSubmitClicked: true
                    },
                    () => {
                        if (this.isInputValid()) {
                        this.setState({isLoaded: false},() => SubmitClicked());
                        }
                    }
                    );
                }}
                color="secondary"
                >
                Submit
                </Button>
            </Button.List>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

CreateAccountCard.PropTypes = {
    SubmitClicked: PropTypes.func,
    CancelClicked: PropTypes.func,
    IsAdmin: PropTypes.bool,
    ContainerStyle: PropTypes.string
}

export default CreateAccountCard;
