import React from "react";
const variantClasses = {
  h1: "font-extrabold md:text-[48px] sm:text-[48px] text-[74px]",
  h2: "md:text-[48px] sm:text-[48px] text-[64px]",
  h3: "sm:text-[40px] md:text-[46px] text-[54px]",
  h4: "font-medium sm:text-[39.2px] md:text-[45.2px] text-[53.2px]",
  h5: "sm:text-[38px] md:text-[44px] text-[48px]",
  h6: "font-normal sm:text-[34px] md:text-[36px] text-[38px]",
  body1: "sm:text-[28px] md:text-[30px] text-[32px]",
  body2: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  body3: "font-light sm:text-[21px] md:text-[23px] text-[25px]",
  body4: "sm:text-[20px] md:text-[22px] text-[24px]",
  body5: "sm:text-[18px] md:text-[20px] text-[22px]",
  body6: "text-[20px]",
  body7: "text-[18px]",
  body8: "text-[16px]",
  body9: "font-normal text-[14px]",
  body10: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
