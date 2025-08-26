import { Col, Radio, Steps } from "antd";
import styled from "styled-components";

export const PaymentForm = styled.div`
  margin: 30px 20px;
  padding: 10px;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const CardsStyle = styled.div`
  background: white;
  /* box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.03); */
  box-shadow: 0px 4px 10px 0px #00000026;
  margin: auto;
  max-width: ${(props) => props.width || "100%"};
  padding: 25px;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const StepsStyle = styled(Steps)`
  text-align: center;

  @media screen and (max-width: 768px) {
  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-steps
    .ant-steps-item-finish
    .ant-steps-item-icon
    > .ant-steps-icon
    .ant-steps-icon-dot {
    background: none;
  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-steps
    .ant-steps-item-wait
    .ant-steps-item-icon
    > .ant-steps-icon
    .ant-steps-icon-dot {
    background: none;
  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background-color: #ef8f21;
  }
`;

export const OrderSum = styled(Col)`
  background: #ef8f21;
  padding: 5px 10px;
  border-radius: 27px;
  color: white;
  margin-top: 10px;

  .total_amt > div:nth-child(even) {
    background-color: #fdecda;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    padding: 10px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .total_amt {
    margin-top: 10px;
    /* padding: 20px 20px; */
    background: #ffffff;
    border-radius: 27px;

    p {
      padding: 20px;
      color: black;
      font-size: 20px;
      font-weight: 400;

      @media screen and (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;

export const PaymentCard = styled.div`
  background: white;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.03);
  margin: auto;
  max-width: ${(props) => props.width || "100%"};
  /* padding: 8px; */
  border-radius: 20px;
`;
export const RadioContainer = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
`;
export const RadioStyled = styled(Radio)`
  background-color: ${({ selected }) => (selected ? "#fbdcbb" : "transparent")};
  width: 100%;
  border-radius: 20px;
`;

export const SubRadioStyled = styled(Radio)`
  /* margin-bottom: 8px; */
  /* background-color: ${({ selected }) =>
    selected ? "#fbdcbb" : "transparent"}; */
  /* width: 100%; */
  border-radius: 20px;
`;

export const RadioButtonStyles = styled(Radio.Button)`
  border-color: #ef8f21;
  color: black;

  :where(
      .css-dev-only-do-not-override-mzwlov
    ).ant-radio-button-wrapper-checked:not(
      .ant-radio-button-wrapper-disabled
    ):first-child {
  }

  :where(
      .css-dev-only-do-not-override-mzwlov
    ).ant-radio-button-wrapper:last-child {
    border-color: 1px #ef8f21;
    border-radius: 18px;
  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:not(
      :first-child
    )::before {
    display: none;
  }
`;
export const StepsHead = styled.div`
  /* width: 400px;
  margin: auto; */

  


  @media screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .custom-hr {
    border-top: 2px solid #ef8f21;
    margin-left: 50px;
    width: 44px;
  }

  .steps_main {

    @media screen and (max-width: 768px) {
    :where(.css-dev-only-do-not-override-mzwlov).ant-steps .ant-steps-item-title {
    font-size: 10px !important;
}
  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-steps .ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
border: dashed;
  
  }


    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-process
      .ant-steps-item-icon {
      background-color: #ef8f21;
      border-color: #ef8f21;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-finish
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title::after {
      background-color: #ef8f21;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps.ant-steps-dot
      .ant-steps-item-tail,
    :where(
        .css-dev-only-do-not-override-mzwlov
      ).ant-steps.ant-steps-dot.ant-steps-small
      .ant-steps-item-tail {
      width: 55%;
      margin-top: 29px;
      margin-bottom: 0px;
      /* margin-inline: 101px 0px; */
      padding: 0px;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-wait
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title {
      /* color: #ef8f21; */
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-finish
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title {
      color: #ef8f21;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-process
      .ant-steps-item-icon
      > .ant-steps-icon
      .ant-steps-icon-dot {
      display: none;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-process
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title {
      color: #ef8f21;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-finish
      .ant-steps-item-icon
      > .ant-steps-icon
      .ant-steps-icon-dot {
      background: none;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-wait
      .ant-steps-item-icon
      > .ant-steps-icon
      .ant-steps-icon-dot {
      background: none;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-finish
      > .ant-steps-item-container
      > .ant-steps-item-tail::after {
      background-color: none;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps
      .ant-steps-item-finish
      > .ant-steps-item-container
      > .ant-steps-item-tail::after {
      background-color: #1677ff;
      background: none;
    }

    :where(.css-dev-only-do-not-override-mzwlov).ant-steps.ant-steps-dot
      .ant-steps-item-tail::after,
    :where(
        .css-dev-only-do-not-override-mzwlov
      ).ant-steps.ant-steps-dot.ant-steps-small
      .ant-steps-item-tail::after {
      width: calc(100% - 24px);
      height: 0px;
      margin-inline-start: 12px;
      border-style: dotted;
      margin-left: 42px;
    }

    .ant-steps-item-status {
      border-bottom: 1px solid #000;
    }
  }
`;

export const EmptyAddressHead = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;

  .iconss {
    display: flex;
    justify-content: center;
    .iconclr {
      clip-path: polygon(
        50% 0%,
        80% 10%,
        100% 35%,
        100% 70%,
        80% 90%,
        50% 100%,
        20% 90%,
        0% 70%,
        0% 35%,
        20% 10%
      );
      padding: 30px;
      background-color: #e4e4e4;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: inline-block;
      & svg {
        justify-content: center;
        font-size: 100px;
      }
    }
  }

  & h4 {
    margin: 20px;
    font-size: 20px;
  }
`;

export const DeliveryAddressHead = styled.div`
  margin: 30px 0px;

  p {
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }

  h1 {
    font-size: 20px;

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }

    @media screen and (min-width: 321px) and (max-width: 768px) {
      font-size: 17px;
    }
  }
`;
