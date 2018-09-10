import React, { Component } from "react";
import { Icon } from "tabler-react";
import FeatureItem from "./FeatureItem";

class CategoryItem extends Component {
  state = {
    category: {},
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
          <h3 className="card-title float-left">{category.name}</h3>
          <button className="card-options" type="button" onClick={() => {
            this.setState({ isCollapsed: !isCollapsed }, this.updateAllFeatureStates.bind(this));
          }}>
            {isCollapsed ? <Icon prefix="fe" name="chevron-down" /> : <Icon prefix="fe" name="chevron-up" />}
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

  updateAllFeatureStates = () => {
    //for each feature of the category, call updateFeatureState
    console.log("parent collapsed");
    this.props.updateCategoryState(this.state);
  }
  
  updateFeatureState = (updatedState) => {
    console.log("feature updated");
    const index = updatedState.index;
    const updatedFeature = updatedState.feature;
    let features = this.state.category.features;
    features[index] = updatedFeature;

    const category = Object.assign({}, this.state.category, { features: features });
    
    this.setState({ category });
  }
}

export default CategoryItem;
