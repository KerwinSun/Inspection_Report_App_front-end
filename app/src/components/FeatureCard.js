import React, { Component } from "react";
import { Icon } from "tabler-react";
import "./Custom.css";

class FeatureCard extends Component {
  state = {
    isCollapsed: true,
  };

  render() {
    const { isCollapsed } = this.state;
    return (
      <div>
        <div className={isCollapsed ? "small-card-header" : "small-card-header-open"}>
          <a 
            className="small-card-title"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
          >
            {this.props.title}
          </a>
          <div className="card-header-options">
            <a 
              className="card-header-image-label">
              {this.props.count}<Icon prefix="fe" name="image"/>
            </a>
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
        <div className={ isCollapsed ? "card-content hidden" : "card-content show" }>
          {this.props.children}
        </div>
      </div>
    );  
  }
}

export default FeatureCard;
