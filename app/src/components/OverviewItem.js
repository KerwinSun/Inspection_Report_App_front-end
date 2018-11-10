import React, { Component } from "react";
import { Form, Button, Icon } from "tabler-react";
import update from "immutability-helper";
import "./Custom.css";
import OverviewCard from "../components/OverviewCard";

class OverviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      categoryIndex: {},
      estimate: "",
      rooms: "",
      constructionType: "",
      comments: "",
      areaInspected: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    const { house, categoryIndex } = this.props;
    this.setState(
      {
        house: house,
        categoryIndex: categoryIndex,
        estimate: house.estimateSummary,
        rooms: house.roomsSummary,
        constructionType: house.constructionType,
        comments: house.comments,
        areaInspected: house.areaInspected,
        isLoaded: true
      }
    )
  }

  componentDidUpdate(prevProps) {
    const { house } = this.props;
    if (house !== prevProps.house) {
      this.setState({
        house: house,
        estimate: house.estimateSummary,
        rooms: house.roomsSummary,
        constructionType: house.constructionType,
        comments: house.comments,
        areaInspected: house.areaInspected,
      })
    }
  }

  render() {
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <OverviewCard title="Overview">
          <Form.Group label="The following areas of the house have been inspected:">
            <Form.SwitchStack>
              <Form.Switch
                name="toggle"
                value="site"
                label="Site"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.site}
              />
              <Form.Switch
                name="toggle"
                value="subfloor"
                label="Subfloor"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.subfloor}
              />
              <Form.Switch
                name="toggle"
                value="exterior"
                label="Exterior"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.exterior}
              />
              <Form.Switch
                name="toggle"
                value="roofExterior"
                label="Roof exterior"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.roofExterior}
              />
              <Form.Switch
                name="toggle"
                value="roofSpace"
                label="Roof Space"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.roofSpace}
              />
              <Form.Switch
                name="toggle"
                value="services"
                label="Services"
                onChange={this.switchOnChange}
                checked={this.state.areaInspected.services}
              />
            </Form.SwitchStack>
          </Form.Group>
          <Form.Group label="Estimate Summary">
            <Form.Textarea
              defaultValue={this.state.estimate}
              placeholder="Estimate"
              onBlur={e => this.updateHouse("estimateSummary", e.target.value)}
              rows={8}
            />
          </Form.Group>
          <Form.Group label="Rooms Summary">
            <Form.Textarea
              defaultValue={this.state.rooms}
              placeholder="Rooms"
              onBlur={e => this.updateHouse("roomsSummary", e.target.value)}
              rows={8}
            />
          </Form.Group>
          <Form.Group label="Construction Types">
            <Form.Textarea
              defaultValue={this.state.constructionType}
              placeholder="Construction Type"
              onBlur={e => this.updateHouse("constructionType", e.target.value)}
              rows={8}
            />
          </Form.Group>
          <Form.Group label="General Comments (Appear in the Report)">
            <Form.Textarea
              defaultValue={this.state.comments}
              placeholder="General Comments"
              onBlur={e => this.updateHouse("comments", e.target.value)}
              rows={8}
            />
          </Form.Group>
          <Button.List align="center">
            <Button
              RootComponent="a"
              color="secondary"
              onClick={this.cameraClick}
            >
              <Icon prefix="fe" name="camera" />
            </Button>
          </Button.List>
        </OverviewCard>
      );
    } else {
      return null;
    }
  }

  cameraClick = () => {
    const { house, categoryIndex } = this.state;    
    const { id } = house.categories[categoryIndex].features[0];
    this.props.history.push({
      pathname: "/inspect/" + house.id + "/images/" + id,
      state: { 
        house: house,
        featureIndex: 0,
        categoryIndex: categoryIndex
      }
    });
  };

  switchOnChange = e => {
    const newHouse = update(this.state.house, {
      "areaInspected": {
        [e.target.value]: { $set: !this.state.areaInspected[e.target.value] }
      }
    });
    this.setState({ house: newHouse }, () =>
      this.props.updateHouseState(this.state.house)
    );
  }

  updateHouse(fieldName, fieldValue) {
    const newHouse = update(this.state.house, {
      [fieldName]: { $set: fieldValue }
    });
    this.setState({ house: newHouse }, () =>
      this.props.updateHouseState(this.state.house)
    );
  }
}

export default OverviewItem;
