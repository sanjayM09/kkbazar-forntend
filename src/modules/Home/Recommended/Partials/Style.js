import { Carousel } from "antd";
import styled from "styled-components";


export const RecommendSectnStyle = styled.div`
    margin:  50px;
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


    .leftsectn {
        position: relative;
        height: 100%;

        & img  {
            width: 100%;
            object-fit: cover;
            height: 100%;
            border-radius: 7px;
        }

        .leftsectshopbtn {
            position: absolute;
            padding: 5px 10px;
            top: 20px;
            right: 20px;
            background-color: #fff;
            font-family: "Red Rose", serif;
            font-weight: 700;
            font-size: 15px;
            border-radius: 7px;
        }

        .leftsectnsecnimg {
            position: absolute;
            width: 100px;
            height: 50px;
            bottom: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            .imgsplit {
                border-radius: 10px;
                padding: 5px;
                object-fit: cover;
                margin: 5px;
                height: 100%;
                background-color: #fff;
                & img {
                  width: 100%;
                  object-fit: cover;
                  height: 100%;
                }
            }
            
        }
    }
`

export const Carouselslider = styled(Carousel)`
    position: relative;
    /* margin: 30px 0; */
    .rightsectn {
        .Responn {
            .productImgclass {
                object-fit: cover;
                /* margin: auto; */
                /* background-color: yellow; */
                padding: 30px;
                border: 1px solid #B6B6B6;
                box-shadow: 0px 4px 10px 0px #00000036;
                width: 90%;
                border-radius: 10px;
                .productImgclassiiner {
                    & img {
                    width: 100%;
                    border-radius: 7px;
                  }
                }
                
                @media screen and (max-width: 920px) {
                    padding: 20px;
                    & img {
                        /* height: 250px; */
                        width: 100%;
                        height: 100%;
                    }
                   
                }
            }

            .descripclass {
                color: black;
                font-family: "Red Rose", serif;
                padding: 0 20px 5px 0;
                font-size: 14px;
                font-weight: 600;
                overflow: hidden;
                /* width: 90%; */
            }

            .nameclass {
                color: #000;
                font-family: "Red Rose", serif;
                font-size: 17px;
                font-weight: 700;
                padding-bottom: 5px;
            }

            .Priceclass {
                color: #000;
                font-family: "Red Rose", serif;
                font-size: 16px;
                font-weight: 600;
                padding-bottom: 5px;
            }

            .mrpclass {
                color: #717171;
                font-family: "Red Rose", serif;
                font-size: 14px;
                padding-bottom: 5px;
                text-decoration-line: line-through;
            }
        }
    }
    
`

export const SpotLightStyle = styled.div`
    margin:  80px 0 50px 0;
    position: relative;
    .bannerImgmain {
        position: relative;

        .bannerimgrespn {
            width: 100%; 
            height: 400px; 
            position: relative; 

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover; 
                position: absolute; 
                top: 0; 
                left: 0; 
            }  
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            opacity: .4;
            background: rgb(0 0 0 / 78%);
        } 
        

        .bannerText {
            position: absolute;
            top: 10%;
            width: 100%;
            color: #fff;
            & h2 {
                text-align: center;
                font-size: 40px;
                font-weight: 900;
            }
            & p {
                font-size: 25px;
                font-weight: 600;
                margin: 10px 0;
                text-align: center;

                & span {
                    font-weight: 700;
                }

            }

            .Btnclass {
                color: #000;
                width: 100%;
                display: flex;
                cursor: pointer;
                justify-content: center;
                & p {
                    padding: 7px 15px;
                    margin: 10px 0;
                    border-radius: 7px;
                    font-size: 20px;
                    background: #fff;
                    text-align: center;
                    letter-spacing: 1px;
                    display: inline-block;

                }
            }

            @media screen and (max-width: 500px) {
                top: 5%;
                & p {
                    font-size: 20px;
                    font-weight: 600;
                    margin: 3px 0;
                }

                .Btnclass { 
                    margin: 5px 0;
                    padding: 5px;
                    & p {
                        font-size: 15px;
                    }
                }
            }

            @media screen and (max-width: 600px) {
                    & h2 {
                        font-size: 30px;
                    }
                }
        }
       

        @media screen and (max-width: 500px) {
            .bannerimgrespn {
            width: 100%; 
            height: 200px; 
            position: relative; 
        }
       }
    }

    @media screen and (max-width: 500px) {
        margin: 20px 0;
    }
`