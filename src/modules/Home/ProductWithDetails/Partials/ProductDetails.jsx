import { CustomRow } from '@components/others'
import { Col } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Carouselslider, ProductDetailSectn } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AllhomeproductwithdetailData, GetProductwithDetailssectn } from '@modules/Home/HomeSlice'
import baseRequest, { base } from '@request/request'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { AllUsers, GetUsers } from '@modules/Auth/Partials/UsersSlice'
import successHandler from '@request/successHandler'
import { APIURLS } from '@request/apiUrls/urls'
import { selectCurrentId } from '@modules/Auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { InStock, OutOFStock, SoldOut } from '@modules/CommonComponents/SoldOut'
import { Offers } from '@modules/CommonComponents/Offers'
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate'



export const ProductDetails = () => {

    const slider = useRef(null);

    const [isloading, setIsloading] = useState(false)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const CurrentUser = useSelector(selectCurrentId)

    useEffect(() => {
        dispatch(GetProductwithDetailssectn(CurrentUser))
        dispatch(GetUsers())
    }, [CurrentUser])

    // User LogIn details ----------

    const AllUsersDetails = useSelector(AllUsers)

    console.log(AllUsersDetails, 'AllUsersDetails');

    // Product details ----------

    const AllProductwithDetails = useSelector(AllhomeproductwithdetailData)

    const ProductDetail = AllProductwithDetails?.productDetails

    // console.log(AllProductwithDetails, 'AllDetailswithdetails');

    const AddWishList = async (data) => {
        setIsloading(true)
        await baseRequest.post(APIURLS.HOME_WISHLIST_POST, data)
            .then(function (response) {

                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                setIsloading(false)
                dispatch(GetProductwithDetailssectn(CurrentUser))
                console.log(response, 'add');


                return response.data;
            })
            .catch(function (error) {
                setIsloading(false)
                console.log(error.response, 'add error');
            })
    }

    const handleWhishlist = (values) => {
        console.log(values, 'valuesvalues');
        if (CurrentUser == null) {
            navigate('/signin')
        } else {
            const newValue = {
                productVarientImagesId: values?.productVarientImagesId,
                productListId: values?.productListId,
                userId: CurrentUser,
            }
            AddWishList(newValue)
            console.log(newValue, 'newValue');
        }
    }

    const handleShopList = (CategoryID) => {
        console.log(CategoryID, 'ssProductIdProductId');
        navigate(`/productsPage/${CategoryID}`)
    }

    const handleQuickView = (productId) => {
        console.log(productId, 'Produc234tIdProductId');
        navigate(`/singleProduct/${productId}`)
    }


    return (
        <ProductDetailSectn>
            <h2>{AllProductwithDetails?.categoryName} </h2><br /><br />
            {AllProductwithDetails?.productDetails && AllProductwithDetails?.productDetails?.length > 0 ?
                <CustomRow space={[24, 24]}>
                    <Col span={24} md={12} lg={10}>
                        <div className='leftsectn'>
                            <img src={`${base}${AllProductwithDetails?.dashboardImageUrl}`} style={{ width: '100%' }}
                                alt={AllProductwithDetails?.categoryName || 'categoryName'} 
                                title={AllProductwithDetails?.categoryName || 'categoryName'}
                                />
                            <div className='leftsectshopbtn' onClick={() => handleShopList(AllProductwithDetails?.categoryId)}>
                                Shop Now
                            </div>

                            <div className='leftsectntext'>
                                <div className='boxtxt' style={{ maxHeight: '8em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                    <p>{AllProductwithDetails?.title} - {AllProductwithDetails?.description}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={12} lg={14}>
                        <Carouselslider
                            slidesPerRow={2}
                            ref={slider}
                            rows={2}
                            // autoplay autoplaySpeed={7000}
                            dots={false}
                            draggable
                            slidesToScroll={1}
                            infinite={true}
                            responsive={[
                                { breakpoint: 1800, settings: { slidesPerRow: 2 } },
                                { breakpoint: 1200, settings: { slidesPerRow: 2 } },
                                { breakpoint: 978, settings: { slidesPerRow: 1 } },
                                { breakpoint: 767, settings: { slidesPerRow: 2 } },
                                { breakpoint: 500, settings: { rows: 2, slidesPerRow: 1 } },
                            ]}
                        >

                            {ProductDetail?.map((item, id) => {
                                return (
                                    <div key={id} className='rightsectn'>
                                        <div className='Responn'>
                                            <div className='productImgclass'>
                                                <img src={`${base}${item?.productVarientImageUrl}`}
                                                    alt={item?.productName || 'productName'}
                                                    title={item?.productName || 'productName'} 
                                                    />

                                            </div><br />
                                            <div className='quickview' onClick={() => handleQuickView(item?.productId)}><span> Quick View</span></div>
                                            <div className='icons'>
                                                {item?.wishListStatus === true ? <IoMdHeart color='red' onClick={() => handleWhishlist(item)} /> :
                                                    <IoMdHeartEmpty onClick={() => handleWhishlist(item)} />}
                                            </div>
                                            <Offers text={item?.discountPercentage} />
                                        </div>
                                        <div>
                                            <div className='descripclass'>{item?.listDescription || '...'}</div>
                                            <div className='nameclass'>{item?.productName}</div>
                                            <div className='mrpclass'>MRP: ₹<AmountFormatmrp number={item?.mrp} /> </div>
                                            <div className='Priceclass'>Price: ₹ <AmountFormat className='Priceclass' number={item?.totalAmount} /> ( qty : {item?.quantity} / {item?.unit} )</div>
                                            <div className=''>
                                                {item?.quantity <= 0 ?
                                                    <OutOFStock /> : <InStock />}
                                            </div><br />
                                        </div>
                                    </div>
                                )
                            })}

                            {/* {[...Details, ...Details, ...Details].map(({ productImg, descrip, mrp, price,
                            gram, tax, save, id }) => (
                            <div key={id} className='rightsectn'>
                                <div className='Responn'>
                                    <div className='productImgclass'> {productImg}</div><br />
                                    <div>
                                        <div className='descripclass'>{descrip}</div>
                                        <div className='mrpclass'>MRP: ₹{mrp}</div>
                                        <div className='Priceclass'>Price: ₹{price} (₹ {gram} / g)</div>
                                        <div className='taxclass'>
                                            ({tax} ) <span>You Save {save} % OFF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        </Carouselslider>

                    </Col>
                </CustomRow> : null}

        </ProductDetailSectn>
    )
}
