import React, { Component } from "react";
import { Card } from "tabler-react";
import FeatureItem from "./FeatureItem";

class CategoryList extends Component {
  state = {
    categories: {},
    title: ""
  };
  componentWillMount() {
    this.setState(
      {
        categories: this.props.categories.categories
      },
      () => {
        console.log(this.state.categories);
      }
    );
  }

  render() {
    return this.state.categories.map((dynamicData, i) => (
      <div key={dynamicData.id.toString()}>
        <Card title={dynamicData.name} isCollapsible isCollapsed={true}>
          <Card.Body>
            {console.log(dynamicData.features)}
            <FeatureItem features={dynamicData.features} />
          </Card.Body>
        </Card>
      </div>
    ));
  }
}

export default CategoryList;
