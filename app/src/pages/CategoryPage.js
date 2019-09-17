import React, { Component } from "react";
import { Page, Button, Card } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import CategoryItem from "../components/CategoryItem";
import OverviewItem from "../components/OverviewItem";
import API from "../api.js";
import { commentOptions } from "../config";
import Loader from "react-loader-spinner";
import update from "immutability-helper";
import store from "store";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    if (this.props.location.state === undefined) {
      API.getHouse(this.props.match.params.id)
        .then(res => this.addOptionsToHouse(res))
        .then(res =>
          this.setState({
            house: res,
            isLoaded: true
          })
        );
    } else {
      const { house } = this.props.location.state;
      this.setState(
        {
          house: house,
          isLoaded: true
        },
        () => {
          this.props.history.replace({
            pathname: this.props.location.pathname,
            state: undefined
          });
        }
      );
    }
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Category Page">
          {this.state.isLoaded & (this.state.house !== undefined) ? (
            this.state.house.categories.map((dynamicData, i) => {
              if (dynamicData.name === "Overview") {
                return (
                  <OverviewItem
                    key={i}
                    house={this.state.house}
                    categoryIndex={i}
                    category={dynamicData}
                    updateHouseState={this.updateHouseState}
                    history={this.props.history}
                  />
                );
              } else {
                return (
                  <CategoryItem
                    key={dynamicData.name}
                    house={this.state.house}
                    categoryIndex={i}
                    category={dynamicData}
                    updateHouseState={this.updateHouseState}
                    history={this.props.history}
                  />
                );
              }
            })
          ) : (
            <Card.Body>
              <div className="btn-list text-center">
                <Loader
                  type="ThreeDots"
                  color="#316CBE"
                  height={30}
                  width={30}
                />
              </div>
            </Card.Body>
          )}
          <div className="d-flex">
            <Button link onClick={this.saveHouse.bind(this, false)}>
              Exit and Save
            </Button>
            <Button
              type="submit"
              color="primary"
              className="ml-auto"
              onClick={this.saveHouse.bind(this, true)}
            >
              Finish Inspection
            </Button>
          </div>
        </Page.Content>
      </SiteWrapper>
    );
  }

  addOptionsToHouse = res => {
    for (var i = 0; i < res.categories.length; i++) {
      var category1 = res.categories[i];
      for (var j = 0; j < commentOptions.categories.length; j++) {
        var category2 = commentOptions.categories[j];
        if (category1.name === category2.name) {
          for (var k = 0; k < category1.features.length; k++) {
            var feature1 = category1.features[k];
            for (var l = 0; l < category2.features.length; l++) {
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
    /* hard coded areasInspected 
    - to be removed when API definition is updated for house */
    res.areaInspected = {
      site: false,
      subfloor: false,
      exterior: false,
      roofExterior: false,
      roofSpace: false,
      services: false,
      other: false
    };
    return res;
  };

  updateHouseState = house => {
    this.setState({ house });
  };

  saveHouse = isComplete => {
    if (!this.state.house.completed && isComplete) {
      console.log("a");
      this.setState(
        {
          house: update(this.state.house, {
            completed: { $set: isComplete }
          })
        },
        () => this.postHouse()
      );
    } else {
      console.log("b");
      var userObject = {
        UserId: store.get("user").id
      };
      // json.inspectedBy = null;
      this.setState(
        {
          house: update(this.state.house, {
            inspectedBy: { $set: [userObject] }
          })
        },
        () => this.postHouse()
      );
      this.postHouse();
    }
  };

  postHouse() {
    API.postHouse(this.state.house)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default CategoryPage;
