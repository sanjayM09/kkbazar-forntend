import styled from "styled-components";


export const OrderViewCart = styled.div`
   margin: 50px;
   .Filterclass {
        display: flex;
        justify-content: space-between;
        align-items: center;
   }

   .orderViewBox {
      padding: 15px;
      background: #EF8F21C9;
   }

   .orderbox {
      background: rgba(255, 255, 255, 0.79);
      padding: 20px;
      margin-bottom: 20px;
   }

   .orderbox .orderstatuss {
      padding: 10px;
      display: flex;
      align-items: center;
      .imgicon {
         background-color: #fff;
         padding: 10px;
         display: flex;
         align-items: center;
         border-radius: 25px;
         & svg {}
      }
      & p {
         font-size: 20px;
         font-weight: 600;
         font-family: "Red Rose", serif;
         margin-left: 10px;
         & span {
            font-size: 14px;
         }
      }
      
   }


   .orderbox .imgdetails {
      background: #fff;
      padding: 20px;
      & svg {
         font-size: 30px;
         margin-top: 60px;
      }
   }
   
   .orderbox .imgdetails .orderImg {
      width: 200px;
      height: 200px;
      object-fit: cover;
      padding: 20px;
      box-shadow: 0px 4.11px 10.27px 0px #0000002B;
      border: 1px solid #ECECEC;
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }

      @media screen and (max-width: 1250px){
         width: 100%;
         height: 100%;
      }
      @media screen and (max-width: 767px){
         width: 200px;
         height: 200px;
      }
      @media screen and (max-width: 390px){
         width: 100%;
         height: 100%;
      }
   }

   .orderbox .imgdetails .productName {
      margin-top: 10px;
      background: red;
      color: #fff;
      padding: 5px 10px;
      background: #EF8F21C9;
      display: inline-block;
      border-radius: 20px;
      font-size: 16px;
      font-family: "Red Rose", serif;
   }
   
   .orderbox .imgdetails .productDescrip {
      font-family: "Red Rose", serif;
      font-size: 20px;
      margin: 15px 0;
      font-size: 900;
      & span {
         text-decoration-line: line-through;
         color: #717171;
         margin-left: 10px;
         font-size: 700;
         font-size: 16px;

      }
   }

   .orderbox .TrackingClass {
      display: inline-block;
      background: #EF8F21;
      border-radius: 4px;
      padding: 10px;

      .delicerdCar {
         display: flex;
         align-items: center;
         color: #fff;
         font-weight: 800;
         & span {
            font-size: 20px;
            margin-left: 10px;
            font-family: "Red Rose", serif;
         }
      }

      .returnClass {
         display: flex;
         align-items: center;
         color: #fff;
         font-weight: 800;
         cursor: pointer;

         & span {
            font-size: 20px;
            margin-left: 10px;
            font-family: "Red Rose", serif;
         }
      }
   }

   .orderbox .messageshow {
      & svg {
         font-size: 10px;
         margin: 10px 0;
         color: rgba(10, 154, 33, 1);
      }
      & p {
         font-size: 12px;
         font-weight: 500;
         font-family: "Red Rose", serif;
         margin-left: 10px;
      }
   }

   .orderbox .ratingClass {
      padding: 15px;
      background: rgba(239, 143, 33, 0.32);
      font-family: "Red Rose", serif;
      font-size: 18px;
      font-weight: 500;
      border-radius: 3px;
      display: flex;
      align-items: center;
      gap: 30px;

      .ant-rate {
         color: #000;
      }
   }

   .orderbox .feedbackClass {
      margin-top: 4px;
      border-radius: 3px;
      background: rgba(239, 143, 33, 0.32);
      font-family: "Red Rose", serif;
      font-size: 18px;
      font-weight: 500;
      padding: 15px;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      .ant-input-outlined{
         background: #f8ce9f;
      }
      .ant-input-outlined {
         background: rgb(248, 206, 159);
      }
      .ant-input:hover {
         border: 1px solid rgb(179 216 255 / 0%);
      }
      .ant-input:focus,  .ant-input-focused {
         box-shadow: rgb(248 206 159) 0px 0px 0px 2px;
      }

   }


   @media screen and (max-width: 600px) {
      margin: 20px;
      background: rgba(239, 143, 33, 0.32);
      padding: 20px;

      .orderbox .imgdetails .productDescrip {
         font-size: 12px;
      }
   }

   @media screen and (max-width: 500px) {

      .orderbox {
         padding: 4px;
      }
      .orderbox .TrackingClass {
         .delicerdCar {
            & span {
               font-size: 13px;
            }
         }
         .returnClass {
            & span {
               font-size: 13px;
            }
         }
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
      background-color: rgb(0 0 0);
      border-color: #ffffff;
   } 
   .ant-pagination .ant-pagination-item-active a {color: #ffffff;}

`

export const RatingSection = styled.div`
   .feedbackClass {
      margin-top: 4px;
      border-radius: 3px;
      background: rgba(239, 143, 33, 0.32);
      font-family: "Red Rose", serif;
      font-size: 18px;
      font-weight: 500;
      padding: 15px;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      .ant-input-outlined{
         background: #f8ce9f;
      }
      .ant-input-outlined {
         background: rgb(248, 206, 159);
      }
      .ant-input:hover {
         border: 1px solid rgb(179 216 255 / 0%);
      }
      .ant-input:focus,  .ant-input-focused {
         box-shadow: rgb(248 206 159) 0px 0px 0px 2px;
      }

   }

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