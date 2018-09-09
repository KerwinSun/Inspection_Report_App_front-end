import React, { Component } from "react";
import { Card, Form, Button, Icon } from "tabler-react";

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
        <Card
          title={dynamicData.name}
          isCollapsed={true}
          isClosable
          isCollapsible
        >
          <Card.Body>
            <Form.Group label="Rating">
              <Form.Radio name="rating" label="Good" value="1" />
              <Form.Radio name="rating" label="Will need attention" value="2" />
              <Form.Radio
                name="rating"
                label="Need immediate attention"
                value="3"
              />
              <Form.Radio name="rating" label="N/A" value="4" />
            </Form.Group>
            <Form.Group label={<Form.Label>Comments</Form.Label>}>
              <Form.Textarea
                name="comments"
                placeholder="Add comment"
                rows={4}
              />
            </Form.Group>
            <Button.List align="center">
              <Button RootComponent="a" href="/camera" color="secondary">
                <Icon prefix="fe" name="camera" />
              </Button>
            </Button.List>
          </Card.Body>
        </Card>
      </div>
    ));
  }
}

export default FeatureItem;
