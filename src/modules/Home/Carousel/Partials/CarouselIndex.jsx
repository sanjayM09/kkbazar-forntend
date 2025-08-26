import React, { useEffect, useRef, useState } from 'react'
import { BannerSection, Carouselslider, NextButton, PreviousButton } from './style'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AllhomeDataImg, GethomeDataImgStatus, Gethomebannersectn, SetHomeData } from '@modules/Home/HomeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { base } from '@request/request';
import { CommonLoading } from '@components/others';
import { useNavigate } from 'react-router-dom';


export const CarouselIndex = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [activeOption, setActiveOption] = useState('viewdetails');

    // const [setLocalstordata]



    const slider = useRef(null);

    const AllDetails = useSelector(AllhomeDataImg)

    useEffect(() => {
        dispatch(Gethomebannersectn())
        dispatch(SetHomeData(AllDetails))
    }, [])

    const AllDetailsStatus = useSelector(GethomeDataImgStatus)

    console.log(AllDetails, 'A22llDetails');


    const handleActive = (value, item) => {
        console.log(value, item, 'valuevalue');
        setActiveOption(value);

        if (value === 'shopnow') {
            setTimeout(() => {
                navigate(`/productsPage/${item?.categoryId}`);
            }, 100);
        }
    }

    const [activeSlide, setActiveSlide] = useState(0);

    const onChange = (current) => {
        setActiveSlide(current);
    };


    return (
        <BannerSection>

            {/* {AllDetailsStatus === 'loading' && !hasLoadedOnce ?
                <CommonLoading /> : */}

            <Carouselslider afterChange={onChange}


                slidesPerRow={1} ref={slider} dots={false} draggable
                slidesToScroll={1} autoplay
                responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 1 } },
                { breakpoint: 900, settings: { slidesPerRow: 1 } },
                { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>

                {AllDetails?.map((item, id) => {
                    return (
                        <div key={id} className='bannerimgsectn'>
                            <div className='bannerimgrespn'>
                                <img src={`${base}${item?.url}`} alt={item?.categoryName || 'Bannerimg'} title={item?.categoryName || 'Bannerimg'} />
                                <div className='overlay'></div>
                            </div>

                            <div className='bannertxt'>
                                <div>
                                    <div className='endDescript'>{item?.categoryName} </div>
                                </div>
                                <div className='titlerespontxt'>
                                    <h2>{item?.title}</h2>
                                    <p>{item?.description}...</p>
                                </div>

                                <div className='switchonmain'>
                                    <div className='switchon'>
                                        <p className={activeOption === 'viewdetails' ? 'active' : 'inactive'} onClick={() => handleActive('viewdetails')}>View details</p>
                                        <p className={activeOption === 'shopnow' ? 'active' : 'inactive'} onClick={() => handleActive('shopnow', item)}>Shop now</p>
                                    </div>
                                </div>

                            </div>



                            <div className='carousel-indicators' style={{ marginRight: '10%' }}>
                                {AllDetails?.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`littlelinecarousel ${idx === activeSlide ? 'active' : ''}`}
                                    >

                                    </div>
                                ))}
                            </div>

                        </div>
                    )
                })}
            </Carouselslider>

            {/* // } */}


            {AllDetails?.length < 0 ? null :
                <>
                    <PreviousButton onClick={() => slider.current.prev()}><IoIosArrowBack /></PreviousButton>
                    <NextButton onClick={() => slider.current.next()}><IoIosArrowForward /></NextButton>
                </>}

        </BannerSection>
    )
}


// ------  BackUp Data  ----------

{/* <Carouselslider afterChange={onChange}
    slidesPerRow={1} ref={slider} dots={false} draggable
    slidesToScroll={1}
    responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 1 } },
    { breakpoint: 900, settings: { slidesPerRow: 1 } },
    { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>

    {Bannermap.map(({ bannerimg, title, descrip, modalshow, id }) => (
        <div key={id} className='bannerimgsectn'>
            <div className='bannerimgrespn'>
                {bannerimg}
            </div>
            <div className='bannertxt'>
                <div className='titlerespontxt'>
                    <h2>{title}</h2>
                    <p>{descrip}</p>
                </div>
                <div>
                    <div className='endDescript'>{modalshow}</div>
                </div>
            </div>
            <div className='switchon'>
                <p className={activeOption === 'viewdetails' ? 'active' : 'inactive'} onClick={() => handleActive('viewdetails')}>View details</p>
                <p className={activeOption === 'shopnow' ? 'active' : 'inactive'} onClick={() => handleActive('shopnow')}>Shop now</p>
            </div>
        </div>
    ))}

</Carouselslider> */}

{/* <Carouselslider afterChange={onChange}
    slidesPerRow={1} ref={slider} dots={false} draggable
    slidesToScroll={1}
    responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 1 } },
    { breakpoint: 900, settings: { slidesPerRow: 1 } },
    { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>
    {AllDetails?.map((item, id) => {
        return (
            <div key={id} className='bannerimgsectn'>
                <div className='bannerimgrespn'>
                    <img src={`${base}${item?.url}`} alt='img1' />,

                    <div className='overlay'></div>
                </div>

                <div className='bannertxt'>
                    <div>
                        <div className='endDescript'>{item?.categoryName} </div>
                    </div>
                    <div className='titlerespontxt'>
                        <h2>{item?.title}</h2>
                        <p>{item?.description}</p>
                    </div>
                    <div className='switchonmain'>
                        <div className='switchon'>
                            <p className={activeOption === 'viewdetails' ? 'active' : 'inactive'} onClick={() => handleActive('viewdetails')}>View details</p>
                            <p className={activeOption === 'shopnow' ? 'active' : 'inactive'} onClick={() => handleActive('shopnow')}>Shop now</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    })}
</Carouselslider> */}