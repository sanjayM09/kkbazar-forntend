import { Carousel } from "antd";
import styled from "styled-components";

export const StyledOrderDetails = styled.div`
  margin: 30px 0px;
  background: #ef8f21;
  border-radius: 27px;
  padding: 30px;
  color: #fff;
  font-weight: 400;
  font-family: "Red Rose", serif;

  .text {
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  .date {
    font-size: 22px;
    background: #fff;
    color: #000;
    padding: 5px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  .corderContent {
    display: flex;
    justify-content: end;
    @media screen and (max-width: 767px) {
      justify-content: center;
    }
  }


  .checkout {
    font-size: 22px;
    background: #fff;
    color: #ef8f21;
    padding: 5px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .text,
    .date,
    .checkout {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 15px;
    /* margin: 20px 20px; */
    .text,
    .date,
    .checkout {
      font-size: 10px;
    }
  }
`;

export const StyledProductsView = styled.div`
  margin: 30px 50px;
  font-weight: 400;
  font-family: "Red Rose", serif;

  .heading {
    font-size: 22px;
  }

  .pro {
    background: #f9d2a6;
    border-radius: 20px;
    padding: 5px;
  }

  .products {
    background: #fbe4ca;
    margin: 10px;
    border-radius: 20px;
    padding: 10px;
  }

  .productBox {
    display: flex;
    border-radius: 20px;
    background: #fff;
    margin: 5px;
    @media screen and (max-width: 768px) {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .product_img {
      padding: 5px;
      width: 25%;
      object-fit: contain;
      /* border-radius: 20px; */

      @media screen and (max-width: 768px) {
        width: 50%;
      }
    }
  }
  .productTitle {
    font-size: 20px;
    font-family: "Red Rose", serif;
  }

  .productTitleName {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 600px) {
      padding: 10px;
    }
  }

 .Productname {
    background-color: #ef8f21;
    color: #fff;
    padding: 5px 10px;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    border-radius: 20px;
    margin: 20px 0 0 20px;
    @media screen and (max-width: 600px) {
      margin: 20px 0 0 10px;
      padding: 5px 10px;
    }
  }

  .amountPlusQty {
    font-size: 12px;
    font-weight: 400;
    font-family: "Red Rose", serif;
  }

  .amount {
    font-size: 20px;
    font-weight: 400;
    font-family: "Red Rose", serif;
    @media screen and (max-width: 768px) {
    font-size: 13px;

      }

  }

  .mrp {
    color: #717171;
    padding-top: 3px;
    font-size: 16px;
    font-weight: 400;
    font-family: "Red Rose", serif;
    text-decoration: line-through;

    @media screen and (max-width: 768px) {
    font-size: 9px;

      }
  }

  .sold_out,
  .stock {
    color: red;
    font-size: 15px;
    font-weight: bolder;
    font-family: "Red Rose", serif;
  }

  .counterSec {
    display: flex;
    height: 100%;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 30px;
  }

  .counterSection {
    display: flex;
    width: 150px;
    justify-content: space-evenly;
    background: #fff;
    padding: 5px;
    border-radius: 20px;
  }

  button {
    background: none;
    border: none;
    font-size: 20px;
  }

  .count {
    font-size: 18px;
  }

  .countText {
    font-size: 14px;
    font-weight: 400;
    font-family: "Red Rose", serif;
  }

  .counterAmountContent {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }

  .counterAmountContent span {
    font-size: 20px;
    font-weight: 400;
    font-family: "Red Rose", serif;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .heading {
      font-size: 16px;
    }
    .productTitle,
    .amount {
      font-size: 14px;
    }
    .counterSection {
      width: 110px;
    }
    button {
      font-size: 18px;
    }

    .count {
      font-size: 15px;
    }

    .countText {
      font-size: 10px;
    }

    .counterAmountContent span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 10px;
    margin: 20px;
    .heading {
      font-size: 10px;
    }
    .productTitle,
    .amount {
      font-size: 15px;
    }
    .amountPlusQty {
    font-size: 8px;
  }
    .counterSection {
      width: 75px;
    }
    button {
      font-size: 12px;
    }

    .count {
      font-size: 10px;
    }

    .countText {
      display: none;
    }

    .counterAmountContent span {
      font-size: 14px;
      padding: 3px;
      margin-top: 3px;
    }
  }
`;

export const RelatedProductSyle = styled.div`
  margin: 50px;

  .relatedProductTxt {
    display: flex;
    align-items: center;
    gap: 50px;
    width: 100%;
    padding: 20px;
    background: rgba(239, 143, 33, 0.4);
    overflow-x: auto;
    border-radius: 37px;
    margin-bottom: 40px;
    ::-webkit-scrollbar-thumb {
      background: rgb(239 143 33);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: rgb(239 143 33) 0px 0px 5px inset;
    }
    & p {
      font-weight: 500;
      font-family: "Red Rose", serif;
      color: rgba(0, 0, 0, 1);
      cursor: pointer;
      font: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 20px;

    .relatedProductTxt {
      gap: 20px;
      padding: 15px;
    }
  }
`;

export const Carouselslider = styled(Carousel)`
  height: 100%;
  width: 100%;
  position: relative;

  .productimgsectn {
    padding: 10px 10px 0 10px;
  }

  .productimgsectn .bannerimgsectn {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(227, 227, 227, 1);
    border-radius: 12px;
    padding-bottom: 3px;
    margin-bottom: 10px;
  }

  .bannerimgsectn .Responn {
    width: 100%;
    height: 150px;
    display: inline-block;
    object-fit: cover;
    position: relative;
    border-radius: 10px;
    padding: 5px;
    /* background-color: #e0e0e000; */
    border: 1px solid rgba(178, 178, 178, 1);

    & img {
      width: 100%;
      border-radius: 10px;
      height: 100%;
      object-fit: contain;
    }

    .priceRates {
      position: absolute;
      background-color: rgb(255 255 255 / 60%);
      top: 5px;
      padding: 5px;
      border-radius: 20px;
      left: 5px;
      font-weight: 800;
      & span {
        text-decoration-line: line-through;
        color: #8a8a8a;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  .priceRatesss {
      background-color: rgb(255 255 255 / 60%);
      text-align: center;
      padding: 10px 0;
    
      font-weight: 800;
      & span {
        text-decoration-line: line-through;
        color: #8a8a8a;
        font-size: 12px;
        font-weight: 500;
      }
  }

  .viewDetails {
    text-align: center;
    font-size: 15px;
    color: #000;
    font-weight: 700;
    margin: 10px 0;
    background-color: rgb(239 239 239);
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 0;
  }

  .bannerimgsectn .stockdetails {
    text-align: center;
  }

  .bannerimgsectn .desribtn {
    font-weight: 600;
    font-family: "Red Rose", serif;
    text-align: center;
    height: 48px;
    padding: 10px 0;
    overflow: hidden;
  }

  .bannerimgsectn .Addtocart {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px 0;
    color: rgba(239, 143, 33, 1);
    font-weight: 600;
    font-family: "Red Rose", serif;
    cursor: pointer;
    font-size: 15px;
    border-radius: 12px;
    box-shadow: rgb(51 51 47 / 25%) 0px -5px 5px -5px;
    & svg {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .bannerimgsectn .Responn {
      height: 150px;
    }
  }
`;
export const EmptyProductHead = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;

  .iconss {
    display: flex;
    justify-content: center;
    padding: 5px;
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
