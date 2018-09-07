import React, { Component } from "react";
import { Page } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class Empty extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content title="This is an empty page">
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default Empty;
