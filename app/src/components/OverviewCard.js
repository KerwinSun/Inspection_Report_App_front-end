import React, { Component } from "react";
import "./Custom.css";

class OverviewCard extends Component {
  state = {
    isCollapsed: true,
  };

  render() {
    const { isCollapsed } = this.state;
    return (
      <div className="card">
        <div className={isCollapsed ? "large-card-header" : "large-card-header-open"}>
          <a 
            className="card-title"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
          >
            {this.props.title}
          </a>
          <div className="card-header-options">
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
        <div className={isCollapsed ? "card-content hidden" : "card-content show"}>
          {this.props.children}
        </div>
      </div>
    );  
  }
}

export default OverviewCard;
