import React, { Component } from "react";
import "./Custom.css";
import update from "immutability-helper";
import NumberFormat from "react-number-format";

class CategoryCard extends Component {
  state = {
    house: {},
    categoryIndex: {},
    category: {},
    isCollapsed: true,
    count: 0
  };

  componentDidMount() {
    const { house, categoryIndex, category } = this.props;
    this.setState({
      house: house,
      categoryIndex: categoryIndex,
      category: category,
      count: category.count
    });
  }
  render() {
    const { isCollapsed } = this.state;
    return (
      <div className="card">
        <div
          className={
            isCollapsed ? "large-card-header" : "large-card-header-open"
          }
        >
          <a
            className="card-title"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
          >
            {this.props.title}
          </a>
          <div className="card-header-options">
            <NumberFormat
              className="card-header-options text-input"
              displayType={"input"}
              placeholder="0"
              allowNegative={false}
              onChange={e => this.countChangeHandler(e)}
              onBlur={e => this.countOnBlur(e)}
            />
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
        <div className={isCollapsed ? "hidden" : "show"}>
          {this.props.children}
        </div>
      </div>
    );
  }

  countChangeHandler = event => {
    var num = event.target.value;
    var input = num === "" ? 0 : num;
    this.setState({ count: input });
  };

  countOnBlur = e => {
    //change house's state rather than category's state
    if (e.target.value === "") {
      this.setState({ count: 0 }, () => this.setHouse());
    } else {
      this.setHouse();
    }
  };

  setHouse = () => {
    const { house, categoryIndex, count } = this.state;
    const newHouse = update(house, {
      categories: {
        [categoryIndex]: {
          count: { $set: count }
        }
      }
    });
    this.setState({ house: newHouse }, () => {
      this.props.updateHouseState(this.state.house);
    });
  };
}

export default CategoryCard;
