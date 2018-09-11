import React, { Component } from "react";
import { Form, Button, Icon } from "tabler-react";
import "./CustomComponents.css";

class FeatureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: {},
      index: -1,
      isCollapsed: true,
    };
  }

  componentDidMount() {
    this.setState({
      feature: this.props.feature,
      index: this.props.index,
    });
  }

  render() {
    const { isCollapsed, feature } = this.state;
    return (
      <div label={this.props.label}>
        <div className="small-card-header">
          {feature.name}
          <button
            type="button"
            className="clear-button"
            onClick={() => {
              this.setState({ isCollapsed: !isCollapsed }, () =>
                this.props.updateFeatureState(this.state)
              );
            }}
          >
            {isCollapsed ? (
              <Icon prefix="fe" name="chevron-down" />
            ) : (
              <Icon prefix="fe" name="chevron-up" />
            )}
          </button>
        </div>
        <div
          className={isCollapsed ? "card-content hidden" : "card-content open"}
        >
          {this.renderFeature()}
        </div>
      </div>
    );
  }

  renderFeature() {
    return (
      <div>
      <Form.Group label="Rating">
        <Form.SelectGroup>
          <Form.SelectGroupItem
            onChange={this.radioOnChange.bind(this)}
            name={"rating"+this.state.feature.name}
            icon="thumbs-up"
            value="1"
          />
          <Form.SelectGroupItem
            onChange={this.radioOnChange.bind(this)}
            name={"rating"+this.state.feature.name}
            icon="thumbs-down"
            value="2"
          />
          <Form.SelectGroupItem
            onChange={this.radioOnChange.bind(this)}
            name={"rating"+this.state.feature.name}
            icon="alert-triangle"
            value="3"
          />
          <Form.SelectGroupItem
            onChange={this.radioOnChange.bind(this)}
            name={"rating"+this.state.feature.name}
            icon="slash"
            value="4"
          />
        </Form.SelectGroup>
      </Form.Group>
        <Form.Group label={<Form.Label>Comments</Form.Label>}>
          <Form.Textarea
            onChange={this.commentOnChange.bind(this)}
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
      </div>
    );
  }

  radioOnChange = e => {
    const feature = Object.assign({}, this.state.feature, {
      grade: e.target.value
    });
    this.setState({ feature });
  };

  commentOnChange = e => {
    const feature = Object.assign({}, this.state.feature, {
      comments: e.target.value
    });
    this.setState({ feature });
  };
}

export default FeatureItem;
