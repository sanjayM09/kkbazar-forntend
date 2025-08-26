import { Carousel } from "antd";
import styled from "styled-components";

export const StyledContainerList = styled.div`
  margin: 0px 50px;
  font-weight: 400;
  font-family: "Red Rose", serif;

  .ant-radio-inner::after {
    border-right-color: rgb(255 255 255);
    border-bottom-color: rgb(255 255 255);
    border-left-color: rgb(255 255 255);
  }

  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: rgb(239 143 33);
  }

  .links {
    font-weight: 600;
    color: #000;
  }
  .links:hover {
    background: transparent;
  }
  .title {
    padding: 10px 0px;
    font-size: 16px;
    cursor: pointer;

    overflow: hidden;
    text-overflow :ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 3.5rem;

    /* display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' */
  }

  .mrp {
    padding: 10px 0px;
    font-size: 14px;
  }
  .price {
    padding: 10px 0px;
    font-size: 19px;
  }
  .taxes {
    padding: 10px 0px;
    font-size: 17px;
    color: #717171;
  }
  .ProductName {
    padding: 10px 0px;
    font-size: 17px;
    font-weight: 700;

    overflow: hidden;
    text-overflow :ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: '-webkit-box';
    -webkit-box-orient: vertical;
    height: 4rem;
  }
  .offer {
    padding: 0px 20px;
    font-size: 13px;
    color: #00b312;
  }

  .image-container {
    height: 100%;
    width: 100%;
    display: inline-block;
    box-shadow: 0px 4px 10px 0px #00000026;
    border-radius: 10px;
    padding: 20px;
  }

  .img-contain{
    position: relative;
    height: 300px;
  }

  .contain-Img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}

.image-container:hover .contain-Img {
  filter: blur(3px);
}

.quickView {
  display: none;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px #00000026;
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.icons {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
}

.likeIcon {
  box-shadow: 0px 4px 10px 0px #00000026;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container:hover .quickView,
.image-container:hover .icons {
  display: flex;
}

  .heading {
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .img-contain{
    height: 200px;
  }
}

  @media screen and (max-width: 767px) {
    margin: 0px 20px;
    .img-contain{
    height: 150px;
  }

  .title {
    font-size: 10px;
    overflow: hidden;
    text-overflow :ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 2.5rem;
  }

  .mrp {
    font-size: 9px;
  }
  .price {
    font-size: 12px;
  }
  .taxes {
    font-size: 11px;
  }
  .ProductName {
    font-size: 11px;
    overflow: hidden;
    text-overflow :ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: '-webkit-box';
    -webkit-box-orient: vertical;
    height: 3rem;
  }
  .offer {
    font-size: 8px;
  }

  .contain-Img {
  padding: 0px;
}

.quickView {
  width: 90px;
  height: 25px;
  font-size: 10px;
  top: 80px;
}

.icons {
  top: 0px;
  right: 0px;
}

.likeIcon {
  height: 25px;
  width: 25px;
}
  }

  .ant-pagination {
      display: flex;
      justify-content: end;
      margin: 20px 0;
      font-weight: 800;
   }
   .ant-pagination .ant-pagination-item-active {
      font-weight: 600;
      background-color: #ef8f21;
      border-color: #ffffff;
   } 
   .ant-pagination .ant-pagination-item-active a {color: #ffffff;}
`;

export const StyledFilterList = styled.div`
  .filterBtn {
    margin: 20px 0px;
    width: 87px;
    height: 29px;
    border-radius: 6px;
    background: #ef8f21;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .filter {
    width: 13px;
    height: 13px;
  }

  .filterText {
    padding: 0px 5px;
    font-weight: 700;
    font-size: 18px;
    font-family: "Red Rose", serif;
  }

  .filterContainer {
    width: 100%;
    border: 1px solid #d2d2d2;
    border-radius: 25px;
    padding: 25px;
  }

  .contentHeading {
    font-weight: 400;
    font-size: 20px;
    font-family: "Red Rose", serif;
  }

  .ant-radio-wrapper {
    padding: 10px;
  }
  .ant-radio-wrapper span.ant-radio + * {
    margin: 0;
  }
`;

export const StyledProduct = styled.div`
  padding: 20px 50px;
  font-family: "Red Rose", serif;
  font-weight: 400;


  




  .pageHeading {
    padding: 10px 5px;
    font-weight: 700;
    font-size: 20px;
  }

  .description {
    padding: 10px 5px;
    font-size: 18px;
  }

  .desContent {
    font-size: 14px;
    color: #717171;
  }

  .mrp {
    padding: 20px 5px;
    font-size: 17px;
    color: #717171;
  }

  .price {
    padding: 20px 5px 5px 5px;
    font-size: 20px;
  }

  .discount {
    font-size: 12px;
    color: #00b312;
  }

  .tax {
    padding: 5px 5px;
    font-size: 10px;
  }

  .container {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    width: 250px;
    height: 45px;
    background: #fcd28e;
    border-radius: 28px;
  }

  .quantity {
    font-size: 24px;
  }

  .counterSec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fbc061;
    padding: 0px 12px;
    height: 100%;
    width: 100px;
    border-radius: 28px;
  }

  button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  .count {
    border: 1px solid #fff;
    padding: 0px 4px;
    font-size: 18px;
    color: #fff;
    background: #fab442;
    border-radius: 3px;
  }

  .anticon {
    color: #fbc061;
  }

  .varientItems {
    border: 1px solid #000;
    padding: 10px;
    width: 160px;
    text-align: center;
    border-radius: 3px;
  };

  .WishlistAddcartclass {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    .WishlistAddcartclass {
      font-size: 12px;
    }
  }
`;

export const RecentListCarousel = styled.div`
    margin:  50px;
    position: relative;
    @media screen and (max-width: 767px) {
      margin: 20px;
    }
`;


export const Carouselslider = styled(Carousel)`
    position: relative;
    margin: 30px 0;

    .productimgsectn {
        padding: 10px;

        /* background-color: red; */
    }
    .productimgsectn .boxsectn  {
        box-shadow: 0px 4px 10px 0px #00000026;
        border-radius: 10px;
        padding-bottom: 10px;
    }

    .productimgsectn .boxsectn .Responn .quickview {
        width: 90%;
        margin: auto;
        display: none;
        justify-content: center;
        cursor: pointer;
        & span {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            position: absolute;
            bottom: 5px;
            font-size: 12px;
            font-weight: 600;
            color: #000;
            font-family: "Red Rose", serif;
            background: rgb(253 253 253 / 72%);
            padding: 5px 10px;
            border-radius: 20px;
        }
    }

    .productimgsectn .boxsectn .Responn .icons {
        margin: auto;
        display: none;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        gap: 8px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        position: absolute;
        top: 10px;
        right: 5%;
        font-weight: 600;
        color: #000;
        font-family: "Red Rose", serif;
        background: rgb(253 253 253 / 72%);
        padding: 10px;
        border-radius: 20px;
        
        & svg {
            cursor: pointer;
            font-size: 15px;
        }

    }

    .productimgsectn:hover .boxsectn .Responn .quickview,
    .productimgsectn:hover .boxsectn .Responn .icons {
        display: flex;
    }
   
   .boxsectn .Responn {
        width: 100%;
        height: 150px;
        display: inline-block;
        object-fit: cover;
        position: relative;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        /* overflow: hidden; */
        background-color: #e0e0e000;
         & img {
            width: 100%;
            border-radius: 10px;
            height: 100%;
            object-fit: contain;
         }
    }

    .boxsectntext {
        margin: 20px;
        .describtn {
            font-family: "Red Rose", serif !important;
            font-size: 15px;
            font-weight: 600;
            color: #000;
        }
        .piececlass {
            font-size: 13px;
            font-family: "Red Rose", serif;
            font-weight: 700;
            color: #393939;
            margin: 5px 0;
        }
        .productdescribn {
            height: 45px;
            overflow: hidden;
            /* background: #00B312; */
        }

        .priceclass {
            color: #000;
            font-size: 18px;
            font-weight: 800;
            font-family: "Red Rose", serif;
            margin-bottom: 20px;
            & span {
                color: #717171;
                font-size: 12px;
                text-decoration-line: line-through;
            }
        }

        .Carttomove {
          display: flex;align-items: center;
          justify-content: center; gap: 10px;
          color: #fff;
          font-size: 18px;
          padding: 10px 0;
          font-weight: 600;
          background: #EF8F21;
          cursor: pointer;
          margin-top: 10px;
        }

        .taxclass {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            margin-bottom: 5px;
            color: #717171;
            font-size: 16px;
            font-family: "Red Rose", serif;

            & span {
                color: #00B312;
                font-size: 10px;
            }
        }
        .weightGramclass {
            background: #EF8F212B;
            font-size: 12px;
            color: #000;
            font-weight: 600;
            padding: 5px 15px;
            display: inline-block;
            color: #EF8F21;
            border-radius: 20px;
        }
    }
`;

export const PreviousButton = styled.button`
    position: absolute;
    left: -30px;
    z-index: 99;
    width: 50px;
    background: transparent;
    border: none;
    top: 50%;
    border-radius: 50%;
    cursor: pointer;
    & svg {
        color: #000;
        font-size: 30px;
    }
    @media (max-width: 990px) {
        top: 40%;
    }
    @media (max-width: 888px) {
        left: -25px;
    }
   
`;

export const NextButton = styled.button`
    position: absolute;
    z-index: 99;
    width: 50px;
    right: -30px;
    top: 50%;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    & svg {
        color: #000;
        font-size: 30px;
    }
    @media (max-width: 990px) {
        top: 40%;
    }
    @media (max-width: 888px) {
        right: -25px;
    }
`;
