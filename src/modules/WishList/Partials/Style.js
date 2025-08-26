import styled from "styled-components";

export const MyWishList = styled.div`
margin: 50px;
   & h2 {
    font-size: 30px;
    font-weight: 800;
    color: #000;
    font-family: "Red Rose", serif;
   }

   .boxsectn {
      padding: 10px;
    }

    .boxsectn .boxline {
       border: 1px solid #C2C2C2;
    }
    
    .boxsectn .boxline .response {
        background-color: #efefef;
        width: 100%;
        height: 200px;
        padding:'10px';
        object-fit: cover;
        margin: auto;
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
   }

   .response {
      position: relative;
      .closeclass {
         position: absolute;
         top: 10px;
         right: 10px;
         font-size: 20px;
         background-color: #fff;
         border-radius: 20px;
         display: flex;
         align-items: center;
         padding: 5px;
         cursor: pointer;
         box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
         justify-content: center;
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
   }

   .response:hover .quickView {
      display: flex;
   }


   .boxsectn .boxline .boxtxt {
      font-family: "Red Rose", serif;
      font-size: 20px;
      text-align: center;
      margin: 10px 0;
   }

   .priceclass {
      font-family: "Red Rose", serif;
      font-size: 18px;
      text-align: center;
      font-weight: 600;
      margin: 20px;
      & span {
         text-decoration-line: line-through;
         font-size: 12px;
         color:  #717171;
      }
   }

   .movetocartcalss {
      text-align: center;
      padding: 20px 0;
      font-weight: 500;
      font-size: 20px;
      font-family: "Red Rose", serif;
      border-top: 1px solid #C2C2C2;
      border-bottom: 0px solid #C2C2C2;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @media screen and (max-width: 790px) {
         font-size: 18px;
      }
   }

   @media screen and (max-width: 500px) {
      margin: 20px;
      .priceclass {
         font-size: 14px;
         margin: 20px 0;
         & span {
            font-size: 12px;
         }
      }
      .boxsectn .boxline .boxtxt {
         font-size: 14px;
      }
      .movetocartcalss {
         font-size: 14px;
      }
   };

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
`

export const EmptyPagestyle = styled.div`
   width: 80%;
   margin: auto;
   text-align: center;

   .iconss {
      display: flex;
      justify-content: center;
      .iconclr {
         clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
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
`