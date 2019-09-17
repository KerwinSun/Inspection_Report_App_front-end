import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import api from "../api";
import "../components/Custom.css"

class LoginPage extends Component {
  state = {
    loggedIn: false
  };
  login(email, password) {
    api
      .login(email, password)
      .then(res => {
        this.setState({ loggedIn: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  createClicked = () => {
    console.log("can this work?");
    // this.setState({ loggedIn: true });
    // const { from } = this.props.location.state || {
    //   from: { pathname: "/create" }
    // };
    // return <Redirect to={"/create"} />;
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
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
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
              <button className="create" type="submit" disabled={isSubmitting} onClick={this.createClicked}>
                Create Account
              </button>
              <button className="create" type="submit" disabled={isSubmitting} onClick={() => this.props.history.push("/usermanage")}>
                Manage Users
              </button>
            </div>
          )}
      />
    );
  }
}

export default LoginPage;
