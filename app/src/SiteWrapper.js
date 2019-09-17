import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Site } from "tabler-react";
import header from "./resources/logo_with_text.png";
import profileImage from "./resources/stock_headshot.png";

const navBarItems = [
  { value: "Home", to: "/home", icon: "home", LinkComponent: NavLink },
  {
    value: "New Inspection",
    to: "/new-inspection",
    icon: "check-square",
    LinkComponent: NavLink
  },
  {
    value: "Manage User",
    to: "/manage-user",
    icon: "user",
    LinkComponent: NavLink
  }
];

const accountDropdownProps = {
  avatarURL: profileImage,
  name: "Jake Miller",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile", to: "/profile" },
    { icon: "log-out", value: "Sign out", to: "/logout" }
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
