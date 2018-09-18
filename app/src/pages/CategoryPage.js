import React, { Component } from "react";
import { Page, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import CategoryItem from "../components/CategoryItem";
import API from '../api.js';
import { commentOptions } from "../config";

class CategoryPage extends Component {
  state = {
    house: {},
    isCollapsed: true,
    isLoaded: false,
  };

  componentWillMount() {
    API.getHouse(this.props.match.params.id)
      .then(res => this.addOptionsToHouse(res))     
      .then(res => this.setState({ house: res, isLoaded: true }))
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <SiteWrapper>
          <Page.Content title="Category Page">
            {this.state.house.categories.map((dynamicData, i) => (
              <CategoryItem 
                key={dynamicData.name} 
                house={this.state.house}
                categoryIndex={i}
                category={dynamicData}
                updateHouseState={this.updateHouseState}
                history={this.props.history}
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

  addOptionsToHouse = res => {
    for (var i = 0; i < res.categories.length; i++) {
      var category1 = res.categories[i];
      for (var j = 0; j < commentOptions.categories.length; j++) {
        var category2 = commentOptions.categories[j];
        if (category1.name === category2.name) {
          for (var k = 0; k < category1.features.length; k++) {
            var feature1 = category1.features[k];
            for (var l = 0; l <category2.features.length; l++) {
              var feature2 = category2.features[l];
              if (feature1.name === feature2.name) {
                feature1.options = feature2.options;
                break;
              }
            }
          }              
          break;
        }
      }
    }
    return res;
  }

  updateHouseState = house => {
    this.setState({ house });
  }

  postHouse = () => {
    console.log(this.state.house);
    API.postHouse(this.state.house)
      .then(response => {
        this.props.history.push("/");
      })
      .catch (error => {
        console.log(error);
      })
  }
}

export default CategoryPage;
