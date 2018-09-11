import React from "react";
import { Icon } from "tabler-react";
import "./CustomComponents.css";

export const CategoryCounter = (props) => {
  return (
    <div>
      <button className="clear-button" onClick={props.decrement}>
        <Icon prefix="fe" name="minus" />
      </button>
      <input 
        style={{ border: "none", width: "20%", textAlign: "center" }}
        value={props.count}
        onChange={props.countChangeHandler} />
      <button className="clear-button" onClick={props.increment}>
        <Icon prefix="fe" name="plus" />
      </button>
    </div>
  );
}