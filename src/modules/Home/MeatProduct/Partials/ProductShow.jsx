import React, { useEffect, useRef } from 'react'
import { Carouselslider, ProductShowStyle } from './Style'
import { useDispatch, useSelector } from 'react-redux'
import { AllProduct, GetCategory } from '@modules/ProductList/ProductListSlice'
import baseRequest, { base } from '@request/request'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { selectCurrentId } from '@modules/Auth/authSlice'
import { APIURLS } from '@request/apiUrls/urls'
import successHandler from '@request/successHandler'
import { useNavigate } from 'react-router-dom'
import { InStock, OutOFStock, SoldOut } from '@modules/CommonComponents/SoldOut'
import { Offers } from '@modules/CommonComponents/Offers'
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate'


export const ProductShow = () => {

    const slider = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const CurrentUser = useSelector(selectCurrentId)

    useEffect(() => {
        dispatch(GetCategory(CurrentUser))
    }, [CurrentUser])

    const AllProductCarousel = useSelector(AllProduct)

    console.log(AllProductCarousel, 'AllProductCarousel');

    console.log(CurrentUser, 'CurrentUserCurrentUser');

    const AddWishList = async (data) => {
        // setIsloading(true)
        await baseRequest.post(APIURLS.HOME_WISHLIST_POST, data)
            .then(function (response) {

                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                // setIsloading(false)
                dispatch(GetCategory(CurrentUser))
                console.log(response, 'add');

                return response.data;
            })
            .catch(function (error) {
                // setIsloading(false)
                console.log(error.response, 'add error');
            })
    }

    const handleWhishlist = (values) => {
        console.log(values, 'valuesvalues');
        if (CurrentUser == null) {
            navigate('/signin')
        } else {
            const newValue = {
                productVarientImagesId: values?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImagesId,
                productListId: values?.productListDetails[0]?.productListId,
                userId: CurrentUser,
            }
            AddWishList(newValue)
            console.log(newValue, 'newValue');
        }
    }

    const handleQuickView = (productListId) => {
        console.log(productListId, 'Produc234tIdProductId');
        navigate(`/singleProduct/${productListId}`)
    }

    return (
        <ProductShowStyle>

            {AllProductCarousel?.map((category, id) => {
                return (
                    <div key={id}>
                        <h2>{category?.categoryName}</h2>
                        <Carouselslider
                            slidesPerRow={4}
                            ref={slider}
                            dots={false}
                            draggable
                            slidesToScroll={1}
                            infinite={true}
                            responsive={[
                                { breakpoint: 1800, settings: { slidesPerRow: 4 } },
                                { breakpoint: 1200, settings: { slidesPerRow: 4 } },
                                { breakpoint: 920, settings: { slidesPerRow: 3 } },
                                { breakpoint: 700, settings: { slidesPerRow: 2 } },
                                { breakpoint: 400, settings: { rows: 1, slidesPerRow: 1 } },
                            ]}
                        >
                            {category?.productDetails.map((product, index) => (
                                <div key={index} className='productimgsectn'>
                                    <div className='boxsectn'>
                                        <div className='Responn'>
                                            <img src={`${base}${product?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImageUrl}`}
                                                alt={product?.productListDetails[0]?.productName || 'productImg'} title={product?.productListDetails[0]?.productName || 'productImg'} />
                                            <div className='quickview' onClick={() => handleQuickView(product?.productId)}><span> Quick View</span></div>
                                            <div className='icons'>
                                                {product?.productListDetails[0].wishListStatus === true ?
                                                    <IoMdHeart color='red' onClick={() => handleWhishlist(product)} />
                                                    :
                                                    <IoMdHeartEmpty onClick={() => handleWhishlist(product)} />}

                                            </div>
                                            <Offers text={product?.productListDetails[0]?.discountPercentage} />
                                        </div>
                                        <div className='boxsectntext'>
                                            <h4 className='productdescribn'>{product?.productListDetails[0]?.productName}({product?.brandName}) </h4>
                                            <p className='piececlass'>{product?.productListDetails[0]?.pieces} {product?.productListDetails[0]?.unit}</p>
                                            {/* <div className='weightGramclass'>Weight : {product?.productListDetails[0]?.weight} </div> */}
                                            <div className='priceclass'>Price : ₹ <AmountFormat number={product?.productListDetails[0]?.totalAmount} /><br /> <span>MRP&nbsp;:&nbsp;₹&nbsp;<AmountFormatmrp number={product?.productListDetails[0]?.mrp} />  </span> </div>
                                            <div className=''>
                                                {product?.productListDetails[0]?.quantity <= 0 ?
                                                    <OutOFStock /> : <InStock />}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Carouselslider>
                    </div>
                )
            })}


            {/* <Carouselslider
                slidesPerRow={1}
                ref={slider}
                dots={false}
                draggable
                slidesToScroll={1}
                infinite={true}
                responsive={[
                    { breakpoint: 1800, settings: { slidesPerRow: 4 } },
                    { breakpoint: 1200, settings: { slidesPerRow: 4 } },
                    { breakpoint: 920, settings: { rows: 1, slidesPerRow: 3 } },
                    { breakpoint: 400, settings: { rows: 1, slidesPerRow: 2 } },
                ]}
            >

                {AllDetails.map(({ imgsect, para, piece, price, id }) => (
                    <div key={id} className='productimgsectn' >
                        <div className='boxsectn'>
                            <div className='Responn'>
                                {imgsect}
                            </div>
                            <div className='boxsectntext'>
                                <p className='describtn'>{para} </p>
                                <p className='piececlass'>{piece} </p>
                                <div className='priceclass'>Price : ₹ {price} <span>MRP : ₹ {price} </span> </div>
                            </div>
                        </div>

                    </div>
                ))}

            </Carouselslider> */}
        </ProductShowStyle>
    )
}
