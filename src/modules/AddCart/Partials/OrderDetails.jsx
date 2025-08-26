import React, { useEffect, useState } from "react";
import { CustomRow } from "@components/others";
import { Col } from "antd";
import { StyledOrderDetails } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTotalData, setdata } from "../CartSlice";
import errorHandler from "@request/errorHandler";

export const CartOrderDetails = ({ data, setCurrentStep, datasource }) => {

    console.log(data,'datadatadata');
  
  const navigate = useNavigate();

  const dispatch = useDispatch()


  const handleCartOrder = (totalSellRate, totalDiscount, mrp,TotalQuantityAmount) => {
    
    const nonZeroQuantityItems = TotalQuantityAmount?.filter(item => item.quantity > 0);
  
    if (nonZeroQuantityItems.length > 0) {
      dispatch(setTotalData({
        totalAmount: totalSellRate,
        discountAmount: totalDiscount,
        mrp: mrp,
    }));
      setCurrentStep(1);
      navigate("/MainPage", { state: { data: nonZeroQuantityItems } });
    }
  };

//   const updatedData = data.map((item) => {
//     const { totalAmount, ...rest } = item; 
//     return {
//         ...rest, 
//         amountTotal: totalAmount * item.quantity, 
//     };
// });

const updatedData = data.map((item) => ({
      ...item, 
      amountTotal: item.totalAmount * item.quantity, 
    }));

console.log(updatedData,'updatedData');

const TotalQuantityAmount = updatedData.map((item) => ({
      ...item, 
      totalPrice: item.amountTotal, 
}));

console.log(TotalQuantityAmount,'TotalQuantityAmount');


  const multipliedData = data.map((item) => ({
    ...item,
    totalPrice: item.totalAmount * item.quantity,
    totalDiscount: item.discountAmount * item.quantity,
    totalMrp: item.mrp * item.quantity,
  })) 


  // console.log(multipliedData,'multipliedData');

  const quantityArray = data.map(item => item.quantity);
  console.log(quantityArray,'quantityArray');


  const totalSellRate = multipliedData.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  ) 

  console.log(totalSellRate,'totalSellRate');

  const mrp = multipliedData.reduce((acc, curr) => acc + curr.totalMrp, 0)
  console.log(mrp,'mrp');

  const totalDiscount =multipliedData.reduce(
    (acc, curr) => acc + curr.totalDiscount,
    0
  )

  return (
    <StyledOrderDetails>
      <CustomRow space={[12, 12]}>
        <Col span={24} xs={24} sm={20} md={12}>
          <CustomRow space={[12, 12]}>
            <Col span={11} md={11} xs={12} >
              <p className="text">Total Order Amount</p>
            </Col>
            <Col span={2} md={2} >
              <span className="text">:</span>
            </Col>
            <Col span={8} md={8}>
              <p className="text">₹{totalSellRate.toFixed(2)}</p>
            </Col>

            <Col span={11} md={11} xs={12}>
              <p className="text">Savings Amount</p>
            </Col>
            <Col span={2} md={2}>
              <span className="text">:</span>
            </Col>
            <Col span={8} md={8}>
              <p className="text">₹{totalDiscount.toFixed(2)}</p>
            </Col>

            <Col span={11} md={11} xs={12}>
              <p className="text">Total MRP</p>
            </Col>
            <Col span={2} md={2}>
              <span className="text">:</span>
            </Col>
            <Col span={8} md={8}>
              <p className="text">₹{mrp.toFixed(2)}</p>
            </Col>
          </CustomRow>
        </Col>

        <Col span={24} xs={24} sm={4} md={12}>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* <div className="corderContent">
              <span className="date">Estimated delivery by 19 Nov 2023</span>
            </div> */}
            <div className="corderContent">
              <span
                onClick={() =>
                  handleCartOrder(totalSellRate, totalDiscount, mrp,TotalQuantityAmount)
                }
                className="checkout"
              >
                Checkout
              </span>
            </div>
          </div>
        </Col>
      </CustomRow>
    </StyledOrderDetails>
  );
};
