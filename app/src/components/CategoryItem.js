import React, { Component } from "react";
import FeatureItem from "./FeatureItem";
import CategoryCard from "./CategoryCard";
import "./Custom.css";

class CategoryItem extends Component {
  state = {
    house: {},
    categoryIndex: {},
    isLoaded: false,
  };

  componentDidMount() {
    const { house, categoryIndex } = this.props;
    this.setState({
      house: house,
      categoryIndex: categoryIndex,
      isLoaded: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.house !== prevProps.house) {
      this.setState({ house: this.props.house });
    }
  }

  render() {
    const { category } = this.props;
    const { isLoaded, house, categoryIndex } = this.state;
    if (isLoaded) {
      return (
        <CategoryCard 
          title={category.name}
          categoryIndex={categoryIndex}
          category={category}
        >
          {category.features.map((feature, i) => (
            <FeatureItem
              key={feature.name}
              house={house}
              categoryIndex={categoryIndex}
              featureIndex={i}
              updateHouseState={this.props.updateHouseState}
              history={this.props.history}
            />
          ))}
        </CategoryCard>
      );  
    } else {
      return null;
    }
  }
}

export default CategoryItem;
