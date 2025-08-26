import React, { useEffect, useRef } from 'react'
import { Carouselslider, NewProductSection } from './style'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AllhomenewproductData, GetNewproductsectn } from '@modules/Home/HomeSlice'
import { base } from '@request/request'
import { useNavigate } from 'react-router-dom'


export const ProductPage = () => {

    const slider = useRef(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(GetNewproductsectn())
    }, [])

    const AllproductDetails = useSelector(AllhomenewproductData)

    const handleShopPage = (item) => {
        const ProfuctIDSend = item?.productId
        navigate(`/singleProduct/${ProfuctIDSend}`)
    }

    console.log(AllproductDetails, 'Al2222lp45roductDetails');

    return (
        <>
            {AllproductDetails && AllproductDetails?.length > 0 ?
                <NewProductSection>
                    <h2>Recently Launched  Products</h2>
                    <Carouselslider
                        slidesPerRow={2}
                        ref={slider}
                        dots={false}
                        draggable
                        slidesToScroll={1}
                        infinite={true}
                        responsive={[
                            { breakpoint: 1800, settings: { slidesPerRow: 2 } },
                            { breakpoint: 900, settings: { slidesPerRow: 2 } },
                            { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>

                        {AllproductDetails?.map((item, id) => {
                            return (
                                <div key={id} className='Boxstyle'>
                                    <div className='boxinnnerstyle'>
                                        <Row gutter={12}>
                                            <Col span={24} md={24}>
                                                <div className='boxtxt'>
                                                    <h4>{item?.productName}</h4></div>
                                            </Col>
                                            <Col span={12} md={15}>

                                                <div className='boxtxt' style={{ maxHeight: '8em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
                                                    <p> {item?.description}</p>
                                                </div>


                                            </Col>
                                            <Col span={12} md={9} className='responboximg'>
                                                <img src={`${base}${item?.url}`} alt={item?.productName || 'img1'} title={item?.productName || 'img1'} />
                                            </Col>
                                        </Row>
                                        <div className='ButtonShop' onClick={() => handleShopPage(item)} >Shop Now</div>
                                    </div>
                                </div>
                            )
                        })}


                        {/* {[...newproductmap, ...newproductmap, ...newproductmap].map(({ productImg, name, descrip, id }) => (
                    <div key={id} className='Boxstyle'>
                        <div className='boxinnnerstyle'>
                            <Row gutter={12}>
                                <Col span={15} md={15}>
                                    <div className='boxtxt'>
                                        <h4>{name}</h4>
                                        <p>{descrip}</p>
                                    </div>
                                </Col>
                                <Col span={9} md={9} className='responboximg'>
                                    {productImg}
                                </Col>
                            </Row>
                            <div className='ButtonShop'>Shop Now</div>
                        </div>
                    </div>
                ))} */}
                    </Carouselslider>
                </NewProductSection>
                : null}
        </>
    )
}


// {[...newproductmap, ...newproductmap, ...newproductmap].map(({ productImg, name, descrip, id }) => (
//     <div key={id} className='Boxstyle'>
//         <div className='boxinnnerstyle'>
//             <Row gutter={12}>
//                 <Col span={15} md={15}>
//                     <div className='boxtxt'>
//                         <h4>{name}</h4>
//                         <p>{descrip}</p>
//                     </div>
//                 </Col>
//                 <Col span={9} md={9} className='responboximg'>
//                     {productImg}
//                 </Col>
//             </Row>
//             <div className='ButtonShop'>Shop Now</div>
//         </div>
//     </div>
// ))}