import React, { Component } from "react";
import { Page } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class InspectionDetailsPage extends Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Begin new inspection">
        Hello there
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default InspectionDetailsPage;
