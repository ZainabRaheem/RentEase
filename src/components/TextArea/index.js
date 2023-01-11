import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "bg-transparent border-bw15 border-gray_400 border-solid",
};
const shapes = { RoundedBorder15: "rounded-radius15" };
const sizes = {
  sm: "sm:pb-[13px] md:pb-[18px] pb-[35px] pt-[16px] sm:pt-[6px] md:pt-[8px] sm:px-[15px] px-[16px] md:px-[8px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder15"]),
  variant: PropTypes.oneOf(["OutlineGray400"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder15",
  variant: "OutlineGray400",
  size: "sm",
};
export { TextArea };
