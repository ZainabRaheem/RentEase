import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "border-bw15 border-gray_400 border-solid",
  OutlineGray300: "bg-white_A700 border-2 border-gray_300 border-solid",
  OutlineIndigo400: "bg-white_A700 border border-indigo_400 border-solid",
  OutlineBlack900: "border-black_900 border-bw3 border-solid",
};
const shapes = {
  RoundedBorder15: "rounded-radius15",
  RoundedBorder10: "rounded-radius10",
  CircleBorder27: "rounded-radius27",
  RoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "md:pb-[10px] pb-[21px] sm:pb-[8px] pt-[15px] sm:pt-[5px] md:pt-[7px] px-[15px] sm:px-[5px] md:px-[7px]",
  md: "p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px]",
  lg: "md:p-[13px] p-[27px] sm:px-[15px] sm:py-[10px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder15",
    "RoundedBorder10",
    "CircleBorder27",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "OutlineGray300",
    "OutlineIndigo400",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder15",
  variant: "OutlineGray400",
  size: "md",
};

export { Input };
