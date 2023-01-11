import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { OutlineGray400: "border-2 border-gray_400 border-solid" };
const shapes = { RoundedBorder2: "rounded-radius2" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } `}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder2"]),
  variant: PropTypes.oneOf(["OutlineGray400"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder2",
  variant: "OutlineGray400",
};

export { CheckBox };
