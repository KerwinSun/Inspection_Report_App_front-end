import React, { Component } from "react";
import { Icon } from "tabler-react";
import "./Custom.css";

class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
      numOfImages: 0,
    }
  }

  componentDidMount() {
    const { categoryIndex, featureIndex } = this.props;
    this.setState({
      house: this.props.house,
      numOfImages: this.props.house.categories[categoryIndex].features[featureIndex].numOfImages,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.house !== prevProps.house) {
      const { categoryIndex, featureIndex } = this.props;
      this.setState({
        house: this.props.house,
        numOfImages: this.props.house.categories[categoryIndex].features[featureIndex].numOfImages,
      })
    }
  }

  render() {
    const { isCollapsed, numOfImages } = this.state;
    return (
      <div>
        <div
          className={
            isCollapsed ? "small-card-header" : "small-card-header-open"
          }
        >
          <a
            className="small-card-title"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
          >
            {this.props.title}
          </a>
          <div className="card-header-options">

            {numOfImages > 0 ? (
              <a className="card-header-image-label">
                {numOfImages}
                <Icon prefix="fe" name="image" />
              </a>
            ) : null}
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
        <div
          className={isCollapsed ? "card-content hidden" : "card-content show"}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FeatureCard;
