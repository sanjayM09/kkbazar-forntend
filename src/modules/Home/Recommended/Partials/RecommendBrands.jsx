import React, { useRef } from 'react'
import { Carouselslider, RecommendSectnStyle } from './Style'
import { CustomRow } from '@components/others'
import { Col } from 'antd'


export const RecommendBanner = () => {

    const slider = useRef(null);

    // const ImgLittlesect = [
    //     {
    //         imgshow: <img src={BeautyImg} alt='imghy' />
    //     },
    //     {
    //         imgshow: <img src={BeautyImg} alt='imghy' />
    //     },
    // ]

    // const Details = [
    //     {
    //         productImg: <img src={productData2} alt='img1' />,
    //         name: 'BY I KALL',
    //         descrip: 'Fresho Seer Fish - Large Steaks, Fresh & Flavourful/Surmai/Anjal, 250  g',
    //         mrp: '779', price: '3222', gram: '0.56',
    //         tax: 'GST inclusive price', save: ' 31',
    //     },
    //     {
    //         productImg: <img src={productData3} alt='img2' />,
    //         name: 'iPhone',
    //         descrip: 'Fresho Kolkata/Bengali Saral Puti Fish - Whole, Uncleaned, 500 g',
    //         mrp: '87', price: '6422', gram: '0.76',
    //         tax: 'inclusive of all taxes', save: ' 31',
    //     },
    //     {
    //         productImg: <img src={CategoryImg1} alt='img53' />,
    //         name: 'iPhone',
    //         descrip: 'Fresho Rohu Steak345s Fish - Large, Fresh & Flavourful, 500 g ',
    //         mrp: '76345',
    //         price: '122', gram: '0.76', tax: 'inclusive of all taxes', save: ' 31',
    //     },
    // ]

    return (
        <RecommendSectnStyle>
            <h2>Recommended</h2><br /><br />
            <CustomRow space={[24, 24]}>
                <Col span={24} md={8}>
                    <div className='leftsectn'>
                        {/* <img src={BeautyImg} style={{ width: '100%' }} /> */}
                        <div className='leftsectshopbtn'> Shop Now </div>
                        {/* <div className='leftsectnsecnimg'>
                            {ImgLittlesect.map((item, id) => {
                                return (
                                    <div key={id} className='imgsplit'>
                                        {item.imgshow}<br />
                                    </div>
                                );
                            })}

                        </div> */}
                    </div>
                </Col>

                <Col span={24} md={16}>
                    <Carouselslider
                        slidesPerRow={1}
                        ref={slider}
                        // autoplay autoplaySpeed={7000}
                        dots={false}
                        draggable
                        slidesToScroll={1}
                        infinite={true}
                        responsive={[
                            { breakpoint: 1800, settings: { slidesPerRow: 3 } },
                            { breakpoint: 1200, settings: { slidesPerRow: 3 } },
                            { breakpoint: 920, settings: { rows: 1, slidesPerRow: 2 } },
                        ]}
                    >
                        {/* {[...Details, ...Details, ...Details].map(({ productImg, descrip, name, mrp, price,
                            gram, tax, save, id }) => (
                            <div key={id} className='rightsectn'>
                                <div className='Responn'>
                                    <div className='productImgclass'>
                                        <div className='productImgclassiiner'>
                                            {productImg}
                                        </div>
                                    </div><br />
                                </div>

                                <div className='descripclass'>{descrip}</div>
                                <div className='nameclass'>{name}</div>
                                <div className='mrpclass'>MRP: ₹{mrp}</div>
                                <div className='Priceclass'>Price: ₹{price} </div>
                                <div className='taxclass'>
                                    ({tax} )
                                </div>
                                
                            </div>
                        ))} */}
                    </Carouselslider>
                </Col>

            </CustomRow>
        </RecommendSectnStyle>
    )
}
