import React, { Component } from "react";
import { Page, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import CategoryItem from "../components/CategoryItem";
import API from '../api.js';

class CategoryPage extends Component {
  state = {
    house: {},
    isCollapsed: true,
    isLoaded: false,
  };

  componentWillMount() {
    API.getHouse(this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({ house: res, isLoaded: true })
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <SiteWrapper>
          <Page.Content title="Category Page">
            {this.state.house.categories.map((dynamicData, i) => (
              <CategoryItem 
                key={dynamicData.name} 
                category={dynamicData}
                updateCategoryState={this.updateCategoryState}
                index={i}
              />
            ))}
            <div className="d-flex">
              <Button link>Cancel</Button>
              <Button type="submit" color="primary" className="ml-auto" onClick={this.postHouse.bind(this)}>
                Send data
              </Button>
            </div>
        </Page.Content>
      </SiteWrapper>
      );
    } else {
      return null;      
    }
  }

  updateCategoryState = updatedState => {
    const index = updatedState.index;
    const updatedCount = updatedState.count;    
    let updatedCategory = updatedState.category;
    const category = Object.assign({}, updatedCategory, { count: updatedCount });
    let categories = this.state.house.categories;
    categories[index] = category;
    const house = Object.assign({}, this.state.house, { categories: categories });
    this.setState({ house });
  };

  postHouse = () => {
    API.postHouse(this.state.house)
      .then(response => {
        this.props.history.push("/");
      })
      .catch (error => {
      })
  }
}

export default CategoryPage;
