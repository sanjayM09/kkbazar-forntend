import styled from "styled-components";

export const LeftSide = styled.div`
  padding: 10px;

  h1 {
    text-align: start;
    padding: 10px 0px;
  }

  p,
  img {
    padding: 10px 0px;
  }
`;
export const RightSide = styled.div`
  padding: 10px;

  .ContactButton {
    border-color: #717171;
    background: white;
    color: #717171 !important;
    padding: 6px 40px;
    border-radius: 0px;
    font-size: 17px;
    display: inline-block;
    cursor: pointer;

    :hover {
      border-color: #ef8f21;
      background: white !important;
      color: #ef8f21 !important;
    }
  }

  h1 {
    text-align: start;
    padding: 10px 0px;
  }
`;

export const StyledIframe = styled.iframe`
  border: 2px solid black;
`;
