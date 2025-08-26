import styled from "styled-components";

export const ContentTag = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  span {
    color: #ef8f21;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
    width: 80%;
    text-align: center;
  }
`;
