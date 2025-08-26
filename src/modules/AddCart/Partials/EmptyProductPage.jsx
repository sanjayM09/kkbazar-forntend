import React from "react";
import {  TbShoppingBagSearch } from "react-icons/tb";
import { EmptyProductHead } from "../style";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { useSelector } from "react-redux";
import { Button } from "@components/form";
import { Flex } from "@components/others";

const EmptyProductPage = () => {
  const CurrentUser = useSelector(selectCurrentId);

  const handlesignIn = () => {
    navigate("/signin");
  };

  return (
    <EmptyProductHead>
      <div className="iconss">
        <div className="iconclr">
          <TbShoppingBagSearch />
        </div>
      </div>
      {CurrentUser ? (
        <h4>Please add Product</h4>
      ) : (
        <div>
          <h4>Please log in or sign in.</h4>
          <Flex center={true} style={{ padding: "10px 20px" }}>
            <Button.Success text={"Login"} onClick={() => handlesignIn()} />
          </Flex>
        </div>
      )}
    </EmptyProductHead>
  );
};

export default EmptyProductPage;
