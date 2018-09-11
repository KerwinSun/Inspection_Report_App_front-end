import React, { Component } from "react";
import { Page, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import CategoryItem from "../components/CategoryItem";
import { jsonCatAndFeats } from '../config';
import API from '../api.js';

class CategoryPage extends Component {
  state = {
    house: {},
    isCollapsed: true,
  };

  componentWillMount() {
    API.getHouse(this.props.match.params.id)
      .then(res => {
        this.setState({ house: res })
      });

    this.setState({ house: {
      id: 1,
      inspectedBy: null,
      address: "21 Symonds Street",
      date: "2018-08-28T00:00:00",
      constructionType: "old",
      categories: jsonCatAndFeats
    }})
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Category Page">
          {this.state.house.categories.map((dynamicData, i) => (
            <CategoryItem 
              key={dynamicData.name} 
              category={dynamicData} 
              updateCategoryState={this.updateCategoryState}
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
  }

  updateCategoryState = (updatedCategory) => {
    console.log("updated category");
    console.log(updatedCategory);
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
    //   axios.post(server + "/House/", this.state.house)
    //     .then(response => {
    //       const id = response.data;
    //       this.props.history.push("/");
    //     })
    //     .catch(error => console.log(error))
  }
}

export default CategoryPage;
