import { CustomRow, Flex } from "@components/others";
import { Col, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { StepsHead } from "./Style";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { BreadcrumbTag } from "@modules/FAQ/Partials/Style";
import Payment from "./Payment";
import { AddCart } from "@modules/AddCart";
import { ProductsView } from "@modules/AddCart/Partials/ProductsView";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AllCartDetails } from "@modules/AddCart/CartSlice";

const MainPage = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const CurrentId = useSelector(selectCurrentId);

  const AllCartDetail = useSelector(AllCartDetails);


  const navigate = useNavigate();

  const isActiveTitle = (titleIndex) => {
    // return titleIndex === currentStep;
  };

  useEffect(() => {
    if (CurrentId == undefined || null) {
        navigate('/signin')
    } 
}, [CurrentId])


  return (
    <div>
      {CurrentId === undefined || null ? navigate('/signin') :
        <CustomRow>
          <Col span={24} md={24} style={{ padding: "20px 20px" }}>
            <BreadcrumbTag
              separator=">"
              items={[
                {
                  title: <a href="/">Home</a>,

                },
                {
                  title: <p>{currentStep === 0 ? "Cart" : currentStep === 1 ? "Address" : "Payment"}</p>,
                },
              ]}
            />
          </Col>
          <Col span={24} md={6} />
          <Col span={24} md={12} offset={1} sm={22} xs={22}>
            <StepsHead>
              <Steps
              // style={{background:'red'}}
                current={currentStep}
                // className="steps_main"
                responsive={true}
                // progressDot
                items={[
                  {
                    title: "Cart",
                    status: currentStep > 0 ? "finish" : "",
                    // description: currentStep === 0 && <hr className="custom-hr" />

                  },
                  {
                    title: "Address",
                    status: currentStep > 1 ? "finish" : "",
                    // description: currentStep === 1 && <hr className="custom-hr" />

                  },
                  {
                    title: "Payment",
                    status: currentStep > 2 ? "finish" : "",
                    // description: currentStep === 2 && <hr className="custom-hr" />

                  },
                ]}
              />
            </StepsHead>
          </Col>
          <Col span={24} md={6} />
          <Col span={24} md={24} >
            {currentStep === 0 && <AddCart setCurrentStep={setCurrentStep} />}

            {currentStep === 1 && <DeliveryAddressForm setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <Payment setCurrentStep={setCurrentStep} />}
          </Col>
        </CustomRow>
      }
    </div>
  );
};

export default MainPage;
