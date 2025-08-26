import styled from "styled-components";

export const StyledMainFooter = styled.div`
  background: #ef8f21;
  color: #fff;
  padding: 60px 50px;

  h1 {
    font-family: "Red Rose", serif;
    font-size: 32px;
    font-weight: 700;
  }

  .para {
    /* width: 303px; */
    font-family: "Red Rose", serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    padding: 15px 0px;
  }

  .heading {
    font-family: "Red Rose", serif;
    font-size: 24px;
    font-weight: 400;
    padding: 11px 0px;

    a {
      color: white;

    }
  }

  .content {
    font-family: "Red Rose", serif;
    font-size: 18px;
    font-weight: 400;
    padding: 10px 0px;

    a{
      color: white;
    }
  }

  @media screen and (max-width: 767px){
  padding: 30px 20px;

  h1 {
    font-size: 26px;
  }

  .para {
    font-size: 16px;
  }

  .heading {
    font-size: 22px;
  }

  .content {
    font-size: 16px;
  }
  }
`;

export const StyledSubFooter = styled.div`
  height: 200px;
  text-align: center;
  background: #FDF1E2;

  div{
    padding: 50px 0px;
  }

  .categories {
    font-family: "Red Rose", serif;
    font-size: 16px;
    font-weight: 400;
    padding: 15px 0px;
  }

  .copywrite {
    font-family: "Red Rose", serif;
    font-size: 20px;
    font-weight: 400;
    padding: 15px 0px;
  }
  @media screen and (max-width: 767px){
  padding: 0px 10px;
  }
  div{
    padding: 20px 0px;
  }
`;
