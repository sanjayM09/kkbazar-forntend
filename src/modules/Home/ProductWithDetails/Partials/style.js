import { Carousel } from "antd";
import styled from "styled-components";

export const ProductDetailSectn = styled.div`
    margin: 50px;
    & h2 {
        font-family: "Red Rose", serif;
        font-size: 40px;
    }

    .leftsectn {
        position: relative;
        height: 85%;
        /* background-color: rgb(214, 214, 214); */
        background: rgba(239, 143, 33, 0.17);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        & img {
            width: 100% !important;
            /* object-fit: cover; */
            object-fit: contain;
            height: 100%;
            border-radius: 10px;
        }
       .leftsectntext {
            position: absolute;
            padding: 25px;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0000008A;
            font-size: 20px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            font-family: "Red Rose", serif;
            height: 110px;
            overflow: hidden;

            @media screen and (max-width: 600px) {
                font-size: 12px;
                height: 90px;
            }
       }
       .leftsectshopbtn {
          position: absolute;
          padding: 5px 10px;
          top: 20px;
          right: 20px;
          background-color: #fff;
          font-weight: 600;
          font-size: 20px;
          cursor: pointer;
          font-family: "Red Rose", serif;
          border-radius: 7px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
       }

       @media screen and (max-width: 767px) {
        height: 220px;
       }
    }



    @media screen and (max-width: 776px) {
        margin: 20px;
        & h2 {
            font-size: 20px;    
        }
    }
`

export const Carouselslider = styled(Carousel)`
    position: relative;
    /* margin: 30px 0; */
    

    .rightsectn {
        /* background-color: yellow; */
        .Responn {
            position: relative;
            .productImgclass {
                width: 90%;
                /* background-color: rgb(232 233 232 / 28%); */
                background-color: #d6d6d6;
                height: 250px;
                object-fit: cover;
                border-radius: 10px;
                & img {
                    height: 100%;
                    border-radius: 10px;
                    width: 100%;
                    object-fit: scale-down;
                }
                @media screen and (max-width: 920px) {
                    & img {
                        height: 100%;
                        width: 100%;
                    }
                   
                }
            }
            
        }

        .Responn .quickview {
            width: 90%;
            margin: auto;
            display: none;
            justify-content: center;
            cursor: pointer;
            & span {
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                position: absolute;
                bottom: 40px;
                font-size: 12px;
                font-weight: 600;
                color: #000;
                font-family: "Red Rose", serif;
                background: rgb(253 253 253 / 72%);
                padding: 5px 10px;
                border-radius: 20px;
            }
        }

        .Responn .icons {
            margin: auto;
            display: none;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            gap: 15px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            position: absolute;
            top: 20px;
            right: 15%;
            font-weight: 600;
            color: #000;
            font-family: "Red Rose", serif;
            background: rgb(253 253 253 / 72%);
            padding: 10px;
            border-radius: 20px;
            
            & svg {
                cursor: pointer;
                font-size: 20px;
            }
  
        }

        .Responn:hover .quickview,
        .Responn:hover .icons {
            display: flex;
            transition: all ease 0.3s;
        }

        .descripclass {
            color: black;
            font-family: "Red Rose", serif;
            padding: 0 20px 5px 0;
            font-size: 14px;
            height: 65px;
            overflow: hidden;
            font-weight: 600;
        }

        .nameclass {
            color: rgb(0, 0, 0);
            font-family: "Red Rose", serif;
            font-size: 17px;
            font-weight: 700;
            padding-bottom: 5px;
        }

        .mrpclass {
            color: #717171;
            font-family: "Red Rose", serif;
            font-size: 14px;
            padding-bottom: 5px;
            text-decoration-line: line-through;
        }

        .Priceclass {
            color: #000;
            font-family: "Red Rose", serif;
            font-size: 16px;
            font-weight: 600;
            padding-bottom: 5px;
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
       
    }


    @media screen and (max-width: 500px) {
        .rightsectn {
        /* background-color: yellow; */
        .Responn {
            position: relative;
            .productImgclass {
                width: 90%;
                margin: auto;
                height: 250px;
            }
            
        }
    }
    }
`
