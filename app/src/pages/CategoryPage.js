import React, { Component } from "react";
import { Page } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseId: this.props.match.params.id //house id. Use this for getting data from backend
    }
  }
  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Category Page">
        </Page.Content>
      </SiteWrapper>
    );  
  }
}

export default CategoryPage;
