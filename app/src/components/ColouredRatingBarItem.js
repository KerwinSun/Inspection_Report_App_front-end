import * as React from "react";
import cn from "classnames";
import { Icon } from "tabler-react";

function FormSelectGroupItem({
  className,
  label,
  name,
  value,
  styleClass,
  checked,
  icon,
  type,
  onBlur,
  onChange
}) {
  const classes = cn({ "selectgroup-item": true }, className);
  const btnClasses = cn(
    "selectgroup-button",
    {
      "selectgroup-button-icon": icon
    },
    styleClass
  );
  const outputLabel = icon ? <Icon name={icon} /> : label;
  return (
    <label className={classes}>
      <input
        type="radio"
        name={name}
        value={value}
        className="selectgroup-input"
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={btnClasses}>{outputLabel}</span>
    </label>
  );
}

FormSelectGroupItem.displayName = "Form.SelectGroupItem";

export default FormSelectGroupItem;
