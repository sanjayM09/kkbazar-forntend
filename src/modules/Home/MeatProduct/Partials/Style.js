import { Carousel } from "antd";
import styled from "styled-components";


export const ProductShowStyle = styled.div`
    margin: 50px;
    & h2 {
        font-family: "Red Rose", serif;
        font-size: 40px;
    }
    @media screen and (max-width: 776px) {
        margin: 20px;
        & h2 {
            font-size: 20px;    
        }
    }

    .ant-carousel .slick-slide > div {
        padding-top: 0 !important;
    }
    
    .ant-carousel .slick-slide > div {
        padding-top: 0 !important;
        margin-top: 0 !important;
    }
`

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
            padding: 15px;
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

        @media screen and (max-width: 767px) {
            margin: 10px;
        }
    }
`