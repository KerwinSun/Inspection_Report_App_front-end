import React, { Component } from "react";
import { Page, Card } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class Empty extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content title="This is an empty page">
          <Card title="hi there" isCollapsible />
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default Empty;
