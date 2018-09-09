import React, { Component } from "react";
import { Card, Form } from "tabler-react";

class FeatureItem extends Component {
  state = {
    featureList: {},
    categories: {}
  };
  componentWillMount() {
    this.setState(
      {
        featureList: this.props.features
      },
      () => {
        console.log(this.state.featureList);
      }
    );
  }

  render() {
    return this.state.featureList.map((dynamicData, i) => (
      <div key={dynamicData.id.toString()}>
        <Card title={dynamicData.name} isCollapsible isCollapsed={true}>
          <Card.Body>
            <Form.Group label="Rating">
              <Form.Radio label="Good" name="grade" value="Good" />
              <Form.Radio
                label="Will need attention soon"
                name="grade"
                value="Will need attention soon"
              />
              <Form.Radio
                label="Need immediate attention"
                name="grade"
                value="Need immediate attention"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
    ));
  }
}

export default FeatureItem;
