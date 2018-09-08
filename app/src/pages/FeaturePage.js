import React, { Component } from "react";
import { Page } from "tabler-react";

import Feature from "../components/Feature";
import SiteWrapper from "../SiteWrapper";

class FeaturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [ "General", "Benchtops" ]
    }
  }

  componentDidMount() {
    //fetch
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Feature Page">
          {this.state.features.map(value => <Feature key={value} name={value} />)}
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default FeaturePage;