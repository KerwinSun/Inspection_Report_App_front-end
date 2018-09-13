import React, { Component } from "react";
import { Form, Button, Icon } from "tabler-react";
import update from "immutability-helper";
import "./Custom.css";
// import { jsonHouse } from '../config';

class FeatureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      categoryIndex: {},
      featureIndex: {},
      feature: {},
      isCollapsed: true,
      grade: "",
      comments: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { house, categoryIndex, featureIndex } = this.props;
    this.setState({
      house: house,
      feature: house.categories[categoryIndex].features[featureIndex],
      categoryIndex: categoryIndex,
      featureIndex: featureIndex,
      grade: house.categories[categoryIndex].features[featureIndex].grade+"",
      comments: house.categories[categoryIndex].features[featureIndex].comments,
      isLoaded: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.house !== prevProps.house) {
      const { categoryIndex, featureIndex } = this.state;
      this.setState({ 
        house: this.props.house,
        feature: this.props.house.categories[categoryIndex].features[featureIndex],
        grade: this.props.house.categories[categoryIndex].features[featureIndex].grade+"",
        comments: this.props.house.categories[categoryIndex].features[featureIndex].comments,
      });      
    }
  }
  render() {
    const { isLoaded, isCollapsed, feature } = this.state;
    if (isLoaded) {
      return (
        <div>
          <div className={isCollapsed ? "small-card-header" : "small-card-header-open"}>
            <h6 className="small-card-title">{feature.name}</h6>
            <div className="card-header-options">
              <a 
                className="card-header-options"
                onClick={() => this.setState({ isCollapsed: !isCollapsed })}
              >
                {isCollapsed ? (
                  <i className="fe fe-chevron-down" />
                ) : (
                  <i className="fe fe-chevron-up" />
                )}
              </a>
            </div>
          </div>
          <div
            className={isCollapsed ? "card-content hidden" : "card-content show"}
          >
            {this.renderFeature()}
          </div>
        </div>
      );      
    } else {
      return null;
    }
  }

  renderFeature() {
    const { categoryIndex, featureIndex, grade, comments } = this.state;
    return (
      <div>
        <Form.Group label="Rating">
          <Form.SelectGroup
            onBlur={this.ratingOnBlur.bind(this)}
          >
            <Form.SelectGroupItem
              onChange={this.ratingOnChange.bind(this)}
              name={categoryIndex + "," + featureIndex}
              icon="thumbs-up"
              value="1"
              checked={grade === "1"}
            />
            <Form.SelectGroupItem
              onChange={this.ratingOnChange.bind(this)}
              name={categoryIndex + "," + featureIndex}
              icon="thumbs-down"
              value="2"
              checked={grade === "2"}
            />
            <Form.SelectGroupItem
              onChange={this.ratingOnChange.bind(this)}
              name={categoryIndex + "," + featureIndex}
              icon="alert-triangle"
              value="3"
              checked={grade === "3"}
            />
            <Form.SelectGroupItem
              onChange={this.ratingOnChange.bind(this)}
              name={categoryIndex + "," + featureIndex}
              icon="slash"
              value="4"
              checked={grade === "4"}
            />
          </Form.SelectGroup>
        </Form.Group>
        <Form.Group label={<Form.Label>Comments</Form.Label>}>
          <Form.Textarea
            onBlur={this.commentOnBlur.bind(this)}
            name="comments"
            placeholder="Add comment"
            defaultValue={comments}
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

  ratingOnBlur = e => {
    const { house, categoryIndex, featureIndex, grade } = this.state;
    const newHouse = update(house, {
      categories: {
        [categoryIndex]: {
          features: {
            [featureIndex]: {
              grade: { $set: grade }
            }
          }
        }
      }
    });
    this.setState({ house: newHouse }, 
      () => this.props.updateHouseState(this.state.house)
    );

  }

  ratingOnChange = e => {
    this.setState( { grade: e.target.value });
  };

  commentOnBlur = e => {
    //change house's state rather than feature's state
    const value = e.target.value;
    const { house, categoryIndex, featureIndex } = this.state;
    const newHouse = update(house, {
      categories: {
        [categoryIndex]: {
          features: {
            [featureIndex]: {
              comments: { $set: value },
            }
          }
        }
      }
    });
    this.setState({ house: newHouse, comments: value }, 
      () => this.props.updateHouseState(this.state.house)
    );
  };
}

export default FeatureItem;
