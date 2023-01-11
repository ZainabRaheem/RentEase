import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder10: "rounded-radius10",
  CircleBorder20: "rounded-radius20",
  RoundedBorder15: "rounded-radius15",
  icbRoundedBorder2: "rounded-radius2",
  icbCircleBorder16: "rounded-radius16",
};
const variants = {
  OutlineIndigo400: "border border-indigo_400 border-solid text-indigo_900",
  FillWhiteA700: "bg-white_A700 text-indigo_400",
  FillBluegray100: "bg-bluegray_100 text-white_A700",
  OutlineRed5007f: "border border-red_500_7f border-solid text-red_500_99",
  OutlineIndigo400_1:
    "bg-white_A700 border border-indigo_400 border-solid text-indigo_400",
  OutlineGray500:
    "bg-white_A700 border-bw3 border-gray_500 border-solid text-gray_900",
  FillIndigo400: "bg-indigo_400 text-white_A700",
  OutlineGray400: "border-bw15 border-gray_400 border-solid text-gray_400",
  OutlineIndigo400_2:
    "bg-white_A700 border-2 border-indigo_400 border-solid text-indigo_400",
  OutlineIndigo400_3:
    "border-bw3 border-indigo_400 border-solid text-indigo_400",
  icbFillIndigo400: "bg-indigo_400",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineIndigo400: "bg-indigo_400 border-2 border-indigo_400 border-solid",
  icbFillGray200: "bg-gray_200",
};
const sizes = {
  sm: "p-[11px] sm:p-[4px] md:p-[5px]",
  md: "p-[15px] sm:p-[5px] md:p-[7px]",
  lg: "md:p-[11px] p-[23px] sm:px-[15px] sm:py-[9px]",
  smIcn: "p-[3px]",
  mdIcn: "sm:p-[3px] md:p-[4px] p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder10",
    "CircleBorder20",
    "RoundedBorder15",
    "icbRoundedBorder2",
    "icbCircleBorder16",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo400",
    "FillWhiteA700",
    "FillBluegray100",
    "OutlineRed5007f",
    "OutlineIndigo400_1",
    "OutlineGray500",
    "FillIndigo400",
    "OutlineGray400",
    "OutlineIndigo400_2",
    "OutlineIndigo400_3",
    "icbFillIndigo400",
    "icbFillWhiteA700",
    "icbOutlineIndigo400",
    "icbFillGray200",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineIndigo400",
  size: "sm",
};

export { Button };
