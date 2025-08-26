import styled from "styled-components";

export const OrderSeparateProduct = styled.div`
    margin: 50px;

    .productImgBox {
        border: 0.6px solid rgba(239, 143, 33, 1);
        box-shadow: 0px 4px 10px 0px rgba(239, 143, 33, 0.18);
        margin: 20px 0;
    }

    .productImgBox .imgShow {
        width: 200px;
        padding: 20px;
        height: 200px;
        object-fit: cover;
        border: 1px solid rgba(236, 236, 236, 1);
        box-shadow: 0px 4.11px 10.27px 0px rgba(0, 0, 0, 0.17);
        margin: 20px auto;
        background: rgb(252 236 218);
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .productImgBox .nameClass {
        font-size: 20px;
        font-weight: 700;
        font-family: "Red Rose", serif;
        text-align: center;
    }

    .productImgBox .descrbtnClass {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin: 12px 0;
        padding: 0 20px;
        font-family: "Red Rose", serif;
    }

    .productImgBox .priceClass {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin: 12px 0;
        font-family: "Red Rose", serif;
        & span {
            font-size: 14px;
            font-weight: 600;
            margin-left: 10px;
            text-decoration-line: line-through;color: rgba(113, 113, 113, 1);
        }
    }
    
    .productImgBox .DeliverDetailClass {
        display: flex;
        justify-content: space-between;
        padding: 5px 40px;
        align-items: center;
        background: rgba(239, 143, 33, 0.17);
        .deliverd {
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
        .return {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #fff;
            font-weight: 800;
            padding: 10px 40px;
            background: rgba(239, 143, 33, 1);
            & span {
                font-size: 20px;
                margin-left: 10px;
                font-family: "Red Rose", serif;
            }
        }

        @media screen and (max-width: 700px) {
            /* flex-direction: column; */
            .return {
                padding: 10px 20px;
                text-align: center;
                margin: auto;
            }
        }

        @media screen and (max-width: 600px) {
            flex-direction: column;
            .return {
                padding: 10px 20px;
                text-align: center;
                margin: 0;
                display: flex;
                justify-content: center;
            }
        }
    }

    .itemrateimgClass {
        display: flex;
        align-items: center;
        padding: 5px 40px;
        margin-top: 10px;
        background: rgba(239, 143, 33, 0.17);

        & p {
            color: #000;
            font-weight: 500;
            font-family: "Red Rose", serif;
            font-size: 20px;
        }
    }

    .itemrateimgClass .imgsection {
        margin: 10px;
        width: 70px;
        height: 70px;
        padding: 10px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.19);
        object-fit: cover;
        & img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: contain;
        }
    }

    .productImgBox .addressbox {
        padding: 20px;
        & h2 {
            font-family: "Red Rose", serif;
            font-weight: 700;
            margin: 10px 0;
        }
        & p {
            margin: 10px 0;font-family: "Red Rose", serif;
            font-size: 20px;
            & span {
                margin: 0 10px;
                font-weight: 800;
            }
        }
    }

    .productImgBox .priceBox {
        padding: 20px;
        & h2 {
            font-family: "Red Rose", serif;
            font-weight: 700;
            margin: 10px 0;
        }
        & p {
            margin: 10px 0;font-family: "Red Rose", serif;
            font-size: 20px;
            & span {
                margin: 0 10px;
                font-weight: 800;
            }
        }

        .paytypeClass {
            display: flex;
            gap: 20px;
            padding: 10px 20px;
            border: 0.6px solid rgba(239, 143, 33, 1);
            box-shadow: 0px 4px 10px 0px rgba(239, 143, 33, 0.18);
            border-radius: 4px;
            background: rgba(239, 143, 33, 0.17);
            & p {
                margin: 10px 0;font-family: "Red Rose", serif;
                font-size: 20px;
           }
        }

        .invoiceClass {
            margin: 10px 0;
            padding: 10px 0;font-family: "Red Rose", serif;
            border: 3px solid rgba(239, 143, 33, 1);
            text-align: center;
            box-shadow: 0px 4px 10px 0px rgba(239, 143, 33, 0.18);
            font-size: 20px;
            border-radius: 4px;
            cursor: pointer;
            color: rgba(239, 143, 33, 1);
        }
    }

    .productImgBox .Updatesend {
        padding: 20px;
        font-weight: 700;
        & h2 {
            font-family: "Red Rose", serif;
            font-weight: 700;
            margin: 10px 0;
        }
        & svg {
            font-size: 20px;
        } 
        & p {
            font-size: 16px;
        }
    }

    .productImgBox .orderId {
        padding: 20px;
        font-weight: 500;
        font-size: 16px;
        font-family: "Red Rose", serif;
    }

    .productImgBox .customercare {
        display: flex;
        align-items: center;
        justify-content: end;
        color: #000;
        margin: 10px;
        .iconcus {
            padding: 10px 20px;
            cursor: pointer;
            border: 0.85px solid rgba(210, 210, 210, 1);
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
            background: rgba(239, 143, 33, 0.17);
            border-radius: 30px;
            display: flex;
            gap: 10px;
            align-items: center;
        }
        & p {
            font-size: 16px;
            font-weight: 700;
        }
        & svg {
            font-size: 20px;
        }

    }

    @media screen and (max-width: 450px) {
        margin: 0;

        .productImgBox .DeliverDetailClass {
            padding: 10px;
        }

        .productImgBox .itemrateimgClass {
            padding: 10px;
        }
    }

`

export const ReturnModal = styled.div`
    border: 0.6px solid rgba(239, 143, 33, 1);
    box-shadow: 0px 4px 10px 0px rgba(239, 143, 33, 0.18);
    .ant-modal .ant-modal-content {
       padding: 0px  !important;
    }
    & h2 {
       font-family: "Red Rose", serif;
       padding: 20px;
       text-align: center;
       background: rgba(239, 143, 33, 0.17);
       box-shadow: 0px 4px 10px 0px rgba(239, 143, 33, 0.18);
       color: #000;
   }
  .ant-input {
      background: rgba(239, 143, 33, 0.17);
   }
   .reasonClass {
        padding: 20px;
        & p {
            font-family: "Red Rose", serif;
            margin: 10px 0;
            font-size: 16px;
            color: #000;
        }
    }

    .reasonClass .ruleClass {
        background: rgba(239, 143, 33, 0.17);
        padding: 20px;
        & h6 {
            font-family: "Red Rose", serif;
            margin: 5px 0;
            font-size: 15px;
            font-weight: 500;
            color: #000;
            & span {}
        }
    }

    .transferdetail {
        font-size: 14px;font-family: "Red Rose", serif;
        color: #000;
        font-weight: 500;
        & svg {
            color: rgba(10, 154, 33, 1);
            font-size: 30px;
        }
    }

    .callnumber {
        font-size: 14px;font-family: "Red Rose", serif;
        background: rgba(220, 220, 220, 0.17);
        color: #000;
        font-size: 18px;
        font-weight: 500;
        padding: 10px 20px;
    }
    
`

