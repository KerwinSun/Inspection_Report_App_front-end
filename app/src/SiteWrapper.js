import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Site } from "tabler-react";
import header from "./resources/logo_with_text.png";
import profileImage from "./resources/logo.png";

const navBarItems = [
  { value: "Home", to: "/", icon: "home", LinkComponent: NavLink },
  { value: "New Inspection", to: "/empty", icon: "check-square", LinkComponent: NavLink },
  { value: "Inspections", to: "/empty", icon: "image", LinkComponent: NavLink },
];

const accountDropdownProps = {
  avatarURL: profileImage,
  name: "Inspector_1",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile", to: "/profile" },
    { icon: "log-out", value: "Sign out" }
  ]
};

class SiteWrapper extends Component {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Hitch Building Inspections",
          imageURL: header,
          accountDropdown: accountDropdownProps
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={
          {
            /* ADD FOOTER HERE
          copyright: <React.Fragment>Do we want a footer?</React.Fragment>
          */
          }
        }
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
