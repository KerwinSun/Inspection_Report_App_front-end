import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Site } from "tabler-react";

const navBarItems = [
  { value: "Home", to: "/home", icon: "home", LinkComponent: NavLink },
  { value: "New Inspection", to: "/empty", icon: "check-square", LinkComponent: NavLink },
  { value: "Inspections", to: "/empty", icon: "image", LinkComponent: NavLink },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile", to: "/profile" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends Component {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/home",
          alt: "Hitch Building Inspections",
          imageURL: "./demo/brand/tabler.svg",
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          copyright: (
            <React.Fragment>
              Do we want a footer?
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
