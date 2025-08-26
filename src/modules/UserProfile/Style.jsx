import { Radio } from "antd";
import styled from "styled-components";

export const ProfileHead = styled.div`
  background-color: #faf4f3;
  padding: 10px;

  h1 {
    margin-top: 20px;
    font-weight: 400;
    font-size: 28px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  & img {
    object-fit: cover;
    height: 180px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      height: 123px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .change_profile {
    top: 20px;
  }

  .shopping_bag {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const ProfileDetails = styled.div`
  margin: 0px 20px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }

  h1 {
    font-size: 28px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

  }

  .ButtonProfile {
    background: #ef8f21;
    color: #fff;
    padding: 6px 30px;
    border-radius: 10px;
    font-size: 17px;
    display: inline-block;
    cursor: pointer;
  }

  .responsive_btn {
    display: flex;
    justify-content: end;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export const ProfileCard = styled.div`
  margin-top: 20px !important;
  background: #fdecda;
  margin: auto;
  max-width: ${(props) => props.width || "100%"};
  padding: 25px;
  border-radius: 10px;

  .details {
    /* padding: 5px; */
  }


  p,a {
    /* padding: 5px; */
    font-size: 20px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const EditProfileSec = styled.div`
  padding: 20px;

  .ButtonProfile {
    background: #ef8f21;
    color: #fff;
    padding: 6px 30px;
    border-radius: 10px;
    font-size: 17px;
    display: inline-block;
    cursor: pointer;
  }
`;

export const AddressHead = styled.div`
  .ButtonProfile {
    background: #ef8f21;
    color: #fff;
    padding: 6px 30px;
    border-radius: 10px;
    font-size: 17px;
    display: inline-block;
    cursor: pointer;
  }

  h1 {
    padding: 10px;
  }
`;
export const AddressData = styled.div`
  border-radius: 8px;
  border: 2px solid ${(props) => (props.clicked ? "#ef8f21" : "black")};
  padding: 10px;
  background: beige;

  &:hover {
    cursor: pointer;
    /* border-color: blue; */
    /* background: aliceblue; */
  }
`;


export const RadioStyle = styled(Radio.Button)`

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:first-child {
  border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'};
    border-radius: 50px;
    padding: 0px 30px;
    background: #fdecda !important;
    color: black;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:not(:first-child)::before {
  display: none;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:last-child {
  border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'};
    border-radius: 50px;
    color: black;
    background: #fdecda !important;
    padding: 0px 30px;

}


`
