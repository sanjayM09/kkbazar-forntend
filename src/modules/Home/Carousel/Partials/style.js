import { Carousel } from "antd";
import styled from "styled-components";

export const BannerSection = styled.div`
  position: relative;
  margin:  20px 0;

  .Loadingdiv {
    position: relative;
    width: 90%;
    background-color: #cbcbcbe6;
    margin: auto;
    height: 500px;
    border-radius: 20px;
    .imgsection {
        position: absolute;
        width: 100%;
        margin: auto;
        top: 30%;
    }
  }
`

export const Carouselslider = styled(Carousel)`
  height: 100%;
  width: 100%;
  position: relative;

  .bannerimgsectn {
    width: 100%;
    position: relative;

    .bannerimgrespn {
        width: 93%;
        margin: auto;
        position: relative;

     .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            opacity: .4;
            background: rgb(0 0 0 / 78%);
            border-radius: 20px;
            /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(239, 1, 124, 0.57) 100%); */
        } 
    }

    .bannerimgrespn img {
        object-fit: cover;  
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .littlelinecarousel {
        width: 10px;
        height: 10px;
        border-radius: 20px;
        background-color: #EF8F21;
        float: right;
        display: flex;
        align-items: center;
        justify-content: end;
        margin: 30px 2px 0 0;
        box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.47) inset;

    }

    .littlelinecarousel.active {
        background-color: #EF8F21;
        width: 20px;
    }

    @media only screen and (max-width: 500px) {
        .bannerimgrespn {
            height: 12rem !important; 
        }
    }

    @media only screen and (max-width: 768px) {
        .bannerimgrespn {
            height: 16rem; 
        }
    }

    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        .bannerimgrespn {
            height: 30rem; 
        }
    }

    @media only screen and (min-width: 1121px) {
        .bannerimgrespn {
            height: 35rem; 
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 999px) {
        .bannerimgrespn {
            height: 30rem; 
        }
    }

    
    .bannertxt {
        position: absolute;
        top: 15%;
        right: 10px;
        z-index: 99;
        /* display: flex;
        flex-direction: column; */
        width: 40%;
        margin: auto;
        /* justify-content: space-between; */
        color: #fff;
        
        .titlerespontxt {
            & h2{
                font-size: 30px;
                overflow: hidden;
                text-overflow :ellipsis;
                white-space: normal;
                -webkit-line-clamp: 1;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                margin-right: 90px;
                /* background-color: red; */
            }
            & p {
                margin: 10px 0;
                width: 80%;
                font-size: 18px;
                line-height: 30px;
                height: 95px;
                overflow: hidden;
                font-weight: 400;
            }
        }
       

        .endDescript {
            background-color: #fff;
            color: #000;
            font-size: 1vw;
            padding: 5px 20px;
            border-radius: 25px;
            display: inline-block;
            font-size: 1.20vw;
            margin-right: 10px;
            font-weight: 800;
            margin-bottom: 10px;
        }

        @media (max-width: 1000px) {
            .titlerespontxt {
                & p {
                    width: 80%;
                    font-weight: 400;
                    font-size: 13px;
                    height: 85px;
                }
                & h2 {
                    font-size: 20px;
                    margin-right: 50px;
                }
               
            }
        }
        @media (max-width: 800px) {
            .titlerespontxt {
                & p {
                    width: 80%;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 18px;
                    height: 50px;
                }
            }
        }

        @media (max-width: 600px) {
            right: 0px;
            top: 5%;
            width: 60%;

            .titlerespontxt {
                & p {
                    margin-top: 2px;
                    width: 60%;
                    font-size: 10px;
                    line-height: 15px;
                    height: 45px;
                }
                & h2{
                    font-size: 15px;
                    overflow: hidden;
                    text-overflow :ellipsis;
                    white-space: normal;
                    -webkit-line-clamp: 1;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    margin-right: 10px;
                }
            }

            .endDescript {
                font-size: 8px;
            }
        }
    }

    .switchonmain {
        position: absolute;
        top: 100%;

        .switchon {
        background-color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 5px;
        border-radius: 25px;
        color: #000;
        z-index: 99;
        font-weight: 700;
        font-size: 15px;
        /* right: 50px; */
        & p {
            cursor: pointer;
        }
        .inactive {
            padding: 0 10px;
        }
        .active {
        color: #fff; 
        background-color: #EF8F21;
        padding: 10px 10px;
        border-radius: 25px;
        }

    
        @media screen and (max-width: 600px) {
            font-size: 6px;
            .active {
            padding: 4px !important;
            }
        }
        @media screen and (max-width: 761px) {
            font-size: 10px;
            .active {
            padding: 6px !important;
            }
        }
        @media screen and (max-width: 500px) {
            font-size: 6px;
            margin-top: 5px;
            .active {
            padding: 2px !important;
            }
        }
        }
    }
        
  }

  
  
`;

export const PreviousButton = styled.button`
    position: absolute;
    left: 0;
    z-index: 99;
    width: 50px;
    background: transparent;
    border: none;
    top: 45%;
    cursor: pointer;
    border-radius: 50%;
    & svg {
        color: #000;
        font-size: 4vw;
    }
    @media (max-width: 990px) {
        top: 40%;
    }
    @media (max-width: 888px) {
        left: -15px;
    }
    
   
`;

export const NextButton = styled.button`
    position: absolute;
    z-index: 99;
    /* width: 50px; */
    cursor: pointer;
    right: 0;
    top: 45%;
    background: transparent;
    border: none;
    border-radius: 50%;
    & svg {
        color: #000;
        font-size: 4vw;
    }
   
    @media (max-width: 990px) {
        top: 40%;
        width: 50px;
    }
    @media (max-width: 888px) {
        right: -15px;    
    }

    @media (max-width: 960px) {
    .positioned-element {
        width: 0px;
    }
}
`;
