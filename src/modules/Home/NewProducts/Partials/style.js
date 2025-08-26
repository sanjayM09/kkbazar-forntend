import { Carousel } from "antd";
import styled from "styled-components";

export const NewProductSection = styled.div`
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
`

export const Carouselslider = styled(Carousel)`
    position: relative;
    margin: 30px 0;

    .Boxstyle {
        border-radius: 20px;
        padding: 10px;
        width: 80%;
    }
    .boxinnnerstyle {
        /* background-color: #B6B6B6; */
        border: 1px solid #B6B6B6;
        border-radius: 20px;
        padding: 40px 20px;
        box-shadow: 0px 4px 4px 0px #00000040;
        .boxtxt {
            h4 {
                font-family: "Red Rose", serif;
                font-size: 24px;
                font-weight: 700;
                overflow: hidden;
            }
            p {
                font-size: 20px;
                /* height: 100px;
                overflow: hidden; */
                margin: 10px 0 0 0;
                @media screen and (max-width: 600px) {
                    font-size: 15px; 
                }
            }
        }
        .responboximg {
            width: 80%;
            margin: auto;
            /* height: 100%; */
            height: 150px;
            object-fit: cover;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .ButtonShop  {
            background: #EF8F21;
            color: #fff;
            padding: 6px 30px;
            border-radius: 10px;
            font-size: 17px;
            display: inline-block;
            cursor: pointer;
        }
    }
    
 `