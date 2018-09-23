import React, { Component } from "react";
import { Form, Button, Icon } from "tabler-react";
import ColouredRatingBarItem from "./ColouredRatingBarItem";
import FeatureCard from "./FeatureCard";
import update from "immutability-helper";
import "./Custom.css";

class FeatureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {},
      categoryIndex: {},
      featureIndex: {},
      feature: {},
      grade: "",
      optionSelected: "",
      commentFromOption: "",
      commentAddedByUser: "",
      options: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const { house, categoryIndex, featureIndex } = this.props;
    this.setState(
      {
        house: house,
        feature: house.categories[categoryIndex].features[featureIndex],
        categoryIndex: categoryIndex,
        featureIndex: featureIndex,
        grade:
          house.categories[categoryIndex].features[featureIndex].grade + "",
        options: house.categories[categoryIndex].features[featureIndex].options,
        isLoaded: true
      },
      this.setComment
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.house !== prevProps.house) {
      const { categoryIndex, featureIndex } = this.state;
      this.setState({
        house: this.props.house,
        feature: this.props.house.categories[categoryIndex].features[featureIndex],
        grade: this.props.house.categories[categoryIndex].features[featureIndex].grade+"",
      }, this.setComment);
    }
  }

  setComment = () => {
    const { feature, optionSelected } = this.state;
    if (optionSelected === "other") {
      this.setState({ commentFromOption: "" });
    } else if (feature.comments === "") {
      this.setState({ commentFromOption: "", optionSelected: "none" });
    } else {
      //comment has been pre set
      var isCommentFromOption = false;
      for (var i = 0; i < this.state.options.length; i++) {
        var thisOption = this.state.options[i];
        if (feature.comments === thisOption) {
          isCommentFromOption = true;
          this.setState({
            commentFromOption: thisOption,
            optionSelected: thisOption
          });
          break;
        }
      }
      if (!isCommentFromOption) {
        this.setState({
          commentAddedByUser: feature.comments,
          optionSelected: "other"
        });
      }
    }
  };

  render() {
    const {
      isLoaded,
      feature,
      categoryIndex,
      featureIndex,
      grade,
      commentAddedByUser,
      optionSelected,
      options
    } = this.state;

    if (isLoaded) {
      return (
        <FeatureCard title={feature.name}>
          <Form.Group label="Rating">
            <Form.SelectGroup>
              <ColouredRatingBarItem
                onChange={this.ratingOnChange}
                name={categoryIndex + "," + featureIndex}
                icon="thumbs-up"
                value="1"
                checked={grade === "1"}
              />
              <ColouredRatingBarItem
                onChange={this.ratingOnChange}
                name={categoryIndex + "," + featureIndex}
                icon="thumbs-down"
                value="2"
                checked={grade === "2"}
              />
              <ColouredRatingBarItem
                styleClass="alertRatingItem"
                onChange={this.ratingOnChange}
                name={categoryIndex + "," + featureIndex}
                icon="alert-triangle"
                value="3"
                checked={grade === "3"}
                className="test"
              />
              <ColouredRatingBarItem
                styleClass="cancelRatingItem"
                onChange={this.ratingOnChange}
                name={categoryIndex + "," + featureIndex}
                icon="slash"
                value="4"
                checked={grade === "4"}
              />
            </Form.SelectGroup>
          </Form.Group>
          <Form.Group label={<Form.Label>Comments</Form.Label>}>
            <Form.Select
              onBlur={this.optionOnBlur}
              onChange={this.optionOnChange}
              value={optionSelected}
            >
              <option value="none" />
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
              <option value="other">Other</option>
            </Form.Select>
            {optionSelected === "other" ? (
              <Form.Textarea
                onBlur={this.commentOnBlur.bind(this)}
                name="comments"
                placeholder="Add comment"
                defaultValue={commentAddedByUser}
                rows={4}
              />
            ) : null}
          </Form.Group>
          <Button.List align="center">
            <Button
              RootComponent="a"
              color="secondary"
              onClick={this.cameraClick}
            >
              <Icon prefix="fe" name="camera" />
            </Button>
          </Button.List>
        </FeatureCard>
      );
    } else {
      return null;
    }
  }

  cameraClick = () => {
    const { id } = this.state.house.categories[this.state.categoryIndex].features[this.state.featureIndex];    
    this.props.history.push({
      pathname: "/inspect/" + this.state.house.id + "/images/" + id,
      state: { house: this.state.house }
    });
  };

  ratingOnChange = e => {
    this.updateHouse("grade", e.target.value);
  };

  optionOnChange = e => {
    if (e.target.value === "other") {
      this.setState({ optionSelected: e.target.value, commentFromOption: "" });
    } else if (e.target.value === "none") {
      this.setState({ optionSelected: e.target.value, commentFromOption: "" });
    } else {
      this.setState({
        optionSelected: e.target.value,
        commentFromOption: e.target.value,
        commentAddedByUser: ""
      });
    }
  };

  optionOnBlur = e => {
    if (this.state.optionSelected !== "other") {
      this.updateHouse("comments", this.state.commentFromOption);
    } else {
      this.updateHouse("comments", "");
    }
  };

  commentOnBlur = e => {
    this.updateHouse("comments", e.target.value);
  };

  updateHouse(fieldName, fieldValue) {
    const { house, categoryIndex, featureIndex } = this.state;
    const newHouse = update(house, {
      categories: {
        [categoryIndex]: {
          features: {
            [featureIndex]: {
              [fieldName]: { $set: fieldValue }
            }
          }
        }
      }
    });
    this.setState({ house: newHouse }, () =>
      this.props.updateHouseState(this.state.house)
    );
  }


}

export default FeatureItem;
