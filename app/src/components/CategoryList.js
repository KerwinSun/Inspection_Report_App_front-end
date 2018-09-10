import React, { Component } from "react";
import { Card } from "tabler-react";
import FeatureItem from "./FeatureItem";

class CategoryList extends Component {
  state = {
    categories: {},
  };
  componentWillMount() {
    this.setState({ categories: this.props.categories });
  }

  render() {
    return this.state.categories.map((dynamicData, i) => (
        <Card key={dynamicData.name} title={dynamicData.name} isCollapsible isCollapsed={true}>
          <div>
            <FeatureItem features={dynamicData.features} />
          </div>
        </Card>
    ));
  }
}

export default CategoryList;
