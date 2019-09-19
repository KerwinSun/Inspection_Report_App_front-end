import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage , Alert} from "tabler-react";
import api from "../api";
import "../components/Custom.css"

class LoginPage extends Component {
  state = {
    loggedIn: false,
    showErrorModal: false
  };
  login(email, password) {
    api
      .login(email, password)
      .then(res => {
        this.setState({ loggedIn: true });
      })
      .catch(error => {
        // console.log(error.response);
        if (error.response.status === 401){
          this.setState({showErrorModal: true})
        }
      });
  }

  createClicked = () => {
    this.props.history.push("/create")
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/home" }
    };
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};
          this.setState({showErrorModal: false})
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          this.login(values.email, values.password);
        }}
        // handleChange={() => this.setState({showErrorModal: false})}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
            <div className="login">
              <TablerLoginPage
                onSubmit={handleSubmit}
                onChange={handleChange}
                onBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              {this.state.showErrorModal ? (
                        <Alert type="danger" icon="alert-triangle">
                            Incorrect email address or password
                        </Alert>) :
                        null}
              <button className="create" type="submit" onClick={this.createClicked}>
                Create Account
              </button>
            </div>
          )}
      />
    );
  }
}

export default LoginPage;
