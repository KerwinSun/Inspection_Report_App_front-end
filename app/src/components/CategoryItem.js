import React, { Component } from "react";
import { Icon, Form, Grid } from "tabler-react";
import FeatureItem from "./FeatureItem";
import update from "immutability-helper";

class CategoryItem extends Component {
  state = {
    category: {},
    count: 0,
    isCollapsed: true,
  };

  componentWillMount() {
    const { category } = this.props;
    this.setState({ category: category });
  }

  render() {
    const { isCollapsed, category } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <Grid.Row>
            <Grid.Col width={6}>
              <h3 className="card-title float-left">{category.name}</h3>
            </Grid.Col>
            <Grid.Col width={6}>
              <Form.Group>
                <Form.Input
                  placeholder="0"
                  onChange={this.countChangeHandler}
                />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
          <button
            className="card-options"
            type="button"
            onClick={() => {
              this.setState(
                { isCollapsed: !isCollapsed },
                this.updateAllFeatureStates.bind(this)
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
        <div className={isCollapsed ? "hidden" : "open"}>
          {category.features.map((feature, i) => (
            <FeatureItem
              label={feature.name}
              key={feature.name}
              feature={feature}
              isParentCollapsed={isCollapsed}
              updateFeatureState={this.updateFeatureState}
              index={i}
            />
          ))}
        </div>
      </div>
    );
  }
  countChangeHandler(event){
    var num = event.target.value.match(/^\+?(0|[1-9]\d*)$/);//(/^\d+$/);
    if (num === null) {
      event.target.value="";
    }
    this.setState({
      count: num
    });
  }

  updateAllFeatureStates = () => {
    //for each feature of the category, call updateFeatureState
    this.props.updateCategoryState(this.state);
  };

  updateFeatureState = updatedState => {
    const index = updatedState.index;
    const updatedFeature = updatedState.feature;

    this.setState({
      category: update(this.state.category, {
        [index]: { $set: updatedFeature }
      })
    });
  };
}

export default CategoryItem;
