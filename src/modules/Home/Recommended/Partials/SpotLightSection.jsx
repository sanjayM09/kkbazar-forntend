import React, { useEffect, useRef } from 'react'
import { SpotLightStyle } from './Style'
import { useDispatch, useSelector } from 'react-redux';
import { AllhomeRecommendBannerdetailData, GetRecommendBannerDetails } from '@modules/Home/HomeSlice';
import { base } from '@request/request';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const SpotLightSection = () => {

    const slider = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetRecommendBannerDetails())
    }, [])

    const AllbrandimgDetails = useSelector(AllhomeRecommendBannerdetailData)

    console.log(AllbrandimgDetails, 'AllbrandimgDetailAllbrandimgDetailss');

    const handleCategoryFilter = (ProductId) => {
        console.log(ProductId, 'ProductIdProductId');
        navigate(`/productsPage/${ProductId}`)
    }

    return (
        <>
            {AllbrandimgDetails && AllbrandimgDetails?.length > 0 ?
                <SpotLightStyle>

                    <Carouselslider
                        slidesPerRow={1} ref={slider} dots={false} draggable
                        slidesToScroll={1} autoplay
                        responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 1 } },
                        { breakpoint: 900, settings: { slidesPerRow: 1 } },
                        { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>

                        {AllbrandimgDetails?.map((item, id) => {
                            return (
                                <div key={id} className='bannerImgmain'>
                                    <div className='bannerimgrespn'>
                                        <img src={`${base}${item?.url}`} alt={item?.url || 'url'} title={item?.url || 'url'} />,
                                        <div className='overlay'></div>

                                        <div className='bannerText'>
                                            {/* <p>LOOKS DESTINATION</p> */}
                                            <h2>{item?.title} </h2>
                                            <p><span>{item?.categoryName}</span></p>
                                            <div className='Btnclass' onClick={() => handleCategoryFilter(item?.categoryId)}><p>Shop Now</p></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </Carouselslider>

                    <NextButton onClick={() => slider.current.next()}><IoIosArrowForward /></NextButton>
                    <PreviousButton onClick={() => slider.current.prev()}><IoIosArrowBack /></PreviousButton>

                </SpotLightStyle>
                : null}
        </>
    )
}


export const Carouselslider = styled(Carousel)`
    position: relative;
 `

export const PreviousButton = styled.button`
    position: absolute;
    left: 0;
    z-index: 99;
    width: 50px;
    background: transparent;
    border: none;
    top: 40%;
    border-radius: 50%;
    cursor: pointer;
    & svg {
        color: rgb(255 255 255 / 65%);
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
    /* width: 0px; */
    right: 0;
    top: 40%;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 50%;
    & svg {
        color: rgb(255 255 255 / 65%);
        font-size: 4vw;
    }
    @media (max-width: 990px) {
        top: 40%;
        width: 50px;
    }
    @media (max-width: 888px) {
        right: -15px;
    }
`;