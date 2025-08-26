import { Carousel } from "antd";
import styled from "styled-components";

export const CategorieSection = styled.div`
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

        .categoryimgsectn33 .productName  {
            text-align: center;
            font-weight: 600;
            font-size: 20px;
            margin: 10px auto;
            width: 80%;
            font-family: "Red Rose", serif;
            cursor: pointer;
        }

        .categoryimgsectn33 {
            padding: 6px;
        }
        .categoryimgsectn33 .Responn33 {
            margin: auto;
            display: inline-block;
            /* background-color: #FAB44287; */
            /* box-shadow: 0px 4px 10px 0px #00000030; */
            /* border-radius: 50%; */
            cursor: pointer;

            .imgonly33 {
                width: 200px;
                height: 200px;  
                text-align: center;
                background-color: #FAB44287;
                border-radius: 50%;
                box-shadow: 0px 4px 10px 0px #00000030;
                object-fit: cover;
                display: flex;
                align-items: center;
                margin: auto;
                justify-content: center;
                & img {
                    width: 60%;
                    margin: auto;
                }
            }

            .productName {text-align: center;}
            
        }

        @media screen and (max-width: 500px) {
            .categoryimgsectn33 .Responn33 {
                .imgonly33 {
                border-radius: 20%;
                width: 150px;
                height: 150px;  
                object-fit: cover;
                    & img {
                        width: 70%;
                        margin: auto;
                    }
                }
            }
        }

        @media screen and (max-width: 370px) {
            .categoryimgsectn33 .Responn33 {
            .imgonly33 {
                width: 120px;
                height: 120px;  
                    & img {
                        width: 60%;
                        margin: auto;
                    }
                }
            }
        }

`