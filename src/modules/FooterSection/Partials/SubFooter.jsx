import React from "react";
import { StyledSubFooter } from "../style";
import { SvgIcons } from "@assets/images";

export const SubFooter = () => {
  return (
    <StyledSubFooter>
      <div>
        <p className="categories">
          Our Store | Shippping | Payments | Checkout | Discount | Term &
          Condition | Policy Shipping
        </p>
        <img src={SvgIcons.Company} alt="Company" />
        <p className="copywrite">© 2024 copyrights reserved</p>
      </div>
    </StyledSubFooter>
  );
};
