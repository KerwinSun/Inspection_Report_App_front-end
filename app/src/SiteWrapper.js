import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Site } from "tabler-react";
import header from "./resources/logo_with_text.png";
import profileImage from "./resources/stock_headshot.png";
import store from "store";

const adminNavBarItems = [
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

const navBarItems = [
  { value: "Home", to: "/home", icon: "home", LinkComponent: NavLink },
  {
    value: "New Inspection",
    to: "/new-inspection",
    icon: "check-square",
    LinkComponent: NavLink
  }
];


class SiteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user : store.get("user"),
        accountDropdownProps :  {
          avatarURL: profileImage,
          name: store.get("user").firstName + " " + store.get("user").lastName,
          description: store.get("user").accountType,
          options: [
            { icon: "user", value: "Profile", to: "/profile" },
            { icon: "log-out", value: "Sign out", to: "/logout" }
          ] 
        }
    };
  }
  
  render() {
    const isAdminMode = store.get("user").accountType === 'Admin';
    return (
      <div>
        {  isAdminMode 
        ?  <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Hitch Building Inspections",
          imageURL: header,
          accountDropdown: this.state.accountDropdownProps
        }}
        navProps={{ itemsObjects: adminNavBarItems }}
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
      :  <Site.Wrapper
      headerProps={{
        href: "/",
        alt: "Hitch Building Inspections",
        imageURL: header,
        accountDropdown: this.state.accountDropdownProps
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

      }
      </div>
     
    );
  }
}

export default SiteWrapper;
