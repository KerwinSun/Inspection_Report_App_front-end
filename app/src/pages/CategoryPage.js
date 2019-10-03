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
import DialogBox from "../components/DialogBox";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      isLoaded: false,
      showAlert: false
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

  toggleAlertModal = () => {
    this.setState(prevState => ({
      showAlert: !prevState.showAlert
    }));
  };

  saveButtonClicked() {
    this.setState({
      showAlert: true,
    });
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
              onClick={() => this.saveButtonClicked(this)}

            >
              Finish and Email Inspection
            </Button>
          </div>
          {this.state.showAlert ? (
                  <DialogBox
                    toggleShowModal={this.toggleAlertModal}
                    addBackButton={true}
                    dialogCancelClick={this.toggleAlertModal}
                    dialogOkClick={this.saveHouse.bind(this, true)}
                    title="Are you sure you want to e-mail the inspection?"
                  />
                ) : null}
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
    let userObject;
    if(store.get("user").accountType !== "Admin") {
      // Don't put admin's details on the inspection  
      userObject = {
        UserId: store.get("user").id
      };
    } else {
      userObject ={
        UserId: this.state.house.inspectedBy[0].userId
      }
    }

    if (isComplete) {
      this.setState(
        {
          house: update(this.state.house, {
            completed: { $set: isComplete },
            inspectedBy: { $set: [userObject] }
          })
        },
        () => {
          this.postHouse(true)
        }
      );
    } else {
      this.setState(
        {
          house: update(this.state.house, {
            inspectedBy: { $set: [userObject] }
          })
        },
        () => this.postHouse(false)
      );
      this.postHouse(false);
    }
  };

  emailHouse() {
    API.getReportEmail(this.props.match.params.id)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
  }

  postHouse(sendEmail) {
    API.postHouse(this.state.house)
      .then(() => {
        this.props.history.push("/");
        if(sendEmail) {
          this.emailHouse();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default CategoryPage;
