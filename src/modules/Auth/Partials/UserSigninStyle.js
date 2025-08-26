import { Breadcrumb } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserSigninForm = styled.div`
height: 100vh;
.googlebtn_head{
  display: flex;
  width:'60px';
  justify-content: center;

}  

`



export const UsersigninContent = styled.div`
margin-top: 8px;
  p {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }

  span {
    color: #ef8f21;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
  }

  h3 {
    text-align: center;
    font-size: 24px;
    font-size: 400;
    margin-top:5px;
  }
`;

export const SignInCard = styled.div`
  background: white;
  backdrop-filter: blur(1px);
  border-radius: 10px;
  max-width: 450px;
  padding: 14px 32px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6c892;
`;


export const LogoHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;

`


export const BreadCrumbStyles = styled(Breadcrumb)`
  color: black;
font-weight: 400;
font-size: 20px;

a{
    text-decoration: none;
    cursor: pointer;
    color: black;

    :hover {
      background: none;
    }
}

p{
    color: black;
    font-weight: 400;
    font-size: 20px;
}  
`