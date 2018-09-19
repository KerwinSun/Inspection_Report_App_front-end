import React, { Component } from "react";
import FeatureItem from "./FeatureItem";
import update from "immutability-helper";
import "./Custom.css";

class CategoryItem extends Component {
  state = {
    house: {},
    categoryIndex: {},
    category: {},
    isCollapsed: true,
    isLoaded: false,
    count: 0,
  };

  componentWillMount() {
    const { house, categoryIndex, category } = this.props;
    this.setState({
      house: house,
      categoryIndex: categoryIndex,
      category: category,
      count: category.count,
      isLoaded: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.house !== prevProps.house) {
      this.setState({ house: this.props.house });
    }
  }

  render() {
    const { isLoaded, isCollapsed, category } = this.state;
    if (isLoaded) {
      return (
        <div className="card">
          <div className={isCollapsed ? "large-card-header" : "large-card-header-open"}>
            <h3 className="card-title">{category.name}</h3>
            <div className="card-header-options">
              <input 
                className="card-header-options text-input"
                defaultValue={this.props.category.count} 
                onChange={this.countChangeHandler.bind(this)}
                onBlur={this.countOnBlur.bind(this)}
                type="number"
              />
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
          <div className={isCollapsed ? "hidden" : "show"}>
            {category.features.map((feature, i) => (
              <FeatureItem
                key={feature.name}
                house={this.state.house}
                categoryIndex={this.state.categoryIndex}
                featureIndex={i}
                updateHouseState={this.props.updateHouseState}
                history={this.props.history}
              />
            ))}
          </div>
        </div>
      );  
    } else {
      return null;
    }
  }

  countChangeHandler(event){
    var num = event.target.value;
    var input = num === null ? 0 : num.input;
    this.setState({ count: input });
  }

  countOnBlur = e => {
    //change house's state rather than category's state
    const { house, categoryIndex, count } = this.state;
    const newHouse = update(house, { 
      categories: { 
        [categoryIndex]: { 
          count: { $set: count }
        }
      }
    });
    this.setState({ house: newHouse }, 
      () => this.props.updateHouseState(this.state.house)
    );
  }
}

export default CategoryItem;
