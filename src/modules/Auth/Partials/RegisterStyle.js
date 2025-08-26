import styled from "styled-components";

export const MainForm = styled.div`
  padding: 10px;
  p {
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 12px;
    font-size: 17px;
  }

  .googlebtn_head {
    display: flex;
    width: "60px";
    justify-content: center;
  }
`;

export const LoginContent = styled.div`
  p {
    font-size: 22px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    color: #ef8f21;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  h3 {
    text-align: center;
    font-size: 24px;
    font-size: 400;
  }
`;

export const GoogleBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  padding: 10px;
  
  .vertical_line {
    height: 60px;
    color: black;
    border-right: 3px solid black;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
