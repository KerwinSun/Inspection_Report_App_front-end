import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import api from "../api";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  login(email, password) {
    if (api.login(email, password)) {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/home" }
    };
    if (this.state.loggedIn) {
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
          <TablerLoginPage
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
        )}
      />
    );
  }
}

export default LoginPage;
