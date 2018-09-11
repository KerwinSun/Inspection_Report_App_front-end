import React, { Component } from "react";
import { Icon, Grid } from "tabler-react";
import FeatureItem from "./FeatureItem";
import { CategoryCounter } from "./CategoryCounter";

class CategoryItem extends Component {
  state = {
    category: {},
    count: 0,
    isCollapsed: true,
  };

  componentWillMount() {
    this.setState({ category: this.props.category });
  }

  render() {
    const { isCollapsed, category } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <Grid.Row>
            <Grid.Col width={7}>
              <h3 className="card-title float-left">{category.name}</h3>
            </Grid.Col>
            <Grid.Col width={5}>
              <CategoryCounter 
                increment={() => this.setState({ count: this.state.count + 1 })} 
                decrement={() => { this.state.count === 0 ? this.setState({ count: 0 }) : this.setState({ count: this.state.count - 1 })}} 
                count={this.state.count}
                onChange={() => this.countChangeHandler.bind(this)}
              />
            </Grid.Col>
          </Grid.Row>
          <button
            className="card-options"
            type="button"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
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
              key={feature.name}
              feature={feature}
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

  updateFeatureState = updatedState => {
    const index = updatedState.index;
    const updatedFeature = updatedState.feature;
    let features = this.state.category.features;
    features[index] = updatedFeature;
    const category = Object.assign({}, this.state.category, { features: features });
    
    this.setState({ category }, () => this.state.category);  
  };
}

export default CategoryItem;
