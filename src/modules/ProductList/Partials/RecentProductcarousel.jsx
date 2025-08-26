import React, { useRef } from 'react'
import { Carouselslider, NextButton, PreviousButton, RecentListCarousel } from '../style'
import baseRequest, { base } from '@request/request';
import { Offers } from '@modules/CommonComponents/Offers';
import { InStock, OutOFStock } from '@modules/CommonComponents/SoldOut';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentId } from '@modules/Auth/authSlice';
import successHandler from '@request/successHandler';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { APIURLS } from '@request/apiUrls/urls';
import errorHandler from '@request/errorHandler';
import { FaCartPlus } from "react-icons/fa6";
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate';
import { GetAllCart } from '@modules/AddCart/CartSlice';

export const RecentProductcarousel = ({ CarouselData, UpdateForm, setTrigger, trigger }) => {

    const slider = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const CurrentUser = useSelector(selectCurrentId)

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
                // dispatch(GetSingleproduct(FullData));
                if (UpdateForm) {
                    UpdateForm()
                }
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


    const handleQuickView = (productIdID) => {
        console.log(productIdID, 'Produc234tIdProductId');
        navigate(`/singleProduct/${productIdID}`);
        // dispatch(GetSingleproduct(FullData));
        setTrigger(trigger + 1);
    }

    // Move to cart Section ============

    const MovetocartWishList = async (data) => {
        // setIsloading(true)
        await baseRequest.post(APIURLS.WHISHLIST_MOVECART_GET, data)
            .then(function (response) {

                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                // setIsloading(false)
                dispatch(GetAllCart(CurrentUser));

                console.log(response, 'addcart');
                return response.data;
            })
            .catch(function (error) {
                // setIsloading(false)
                console.log(error.response, 'addaddcart error');
                return errorHandler(error)
            })
    }

    const handleMovetoCart = (values) => {
        if (CurrentUser == null) {
            navigate('/signin')
        } else {
            const newValue = {
                productVarientImagesId: values?.productListDetails[0]?.
                    productVarientImagesList[0]?.productVarientImagesId,
                productListId: values?.productListDetails[0]?.productListId,
                userId: CurrentUser,
                quantity: 1,
            }

            console.log(newValue, 'cartnewValue');
            MovetocartWishList(newValue)
        }
    }

    console.log(CarouselData, 'CarouselData');

    return (
        <RecentListCarousel>
            <h1>{CarouselData?.categoryName} </h1>
            <Carouselslider
                slidesPerRow={4}
                ref={slider}
                dots={false}
                draggable
                slidesToScroll={1}
                infinite={true}
                responsive={[
                    { breakpoint: 1800, settings: { slidesPerRow: 4 } },
                    { breakpoint: 1000, settings: { slidesPerRow: 3 } },
                    { breakpoint: 920, settings: { slidesPerRow: 3 } },
                    { breakpoint: 700, settings: { slidesPerRow: 2 } },
                    { breakpoint: 400, settings: { rows: 1, slidesPerRow: 1 } },
                ]}
            >
                {CarouselData?.productDetails?.map((product, index) => (
                    <div key={index} className='productimgsectn'>
                        <div className='boxsectn'>
                            <div className='Responn'>
                                <img src={`${base}${product?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImageUrl}`}
                                    alt={product?.productListDetails[0]?.productName || 'productImg'}
                                    title={product?.productListDetails[0]?.productName || 'productImg'} 
                                    />
                                <div className='quickview' onClick={() => handleQuickView(product?.productId)}><span> Quick View</span></div>
                                {/* <div className='icons'>
                                    {product?.productListDetails[0].wishListStatus === true ?
                                        <IoMdHeart color='red' onClick={() => handleWhishlist(product)} />
                                        :
                                        <IoMdHeartEmpty onClick={() => handleWhishlist(product)} />}

                                </div> */}
                                <Offers text={product?.productListDetails[0]?.discountPercentage} />
                            </div>
                            <div className='boxsectntext'>
                                <h4 className='productdescribn'>{product?.productListDetails[0]?.productName}({product?.brandName}) </h4>
                                <p className='piececlass'>{product?.productListDetails[0]?.pieces} {product?.productListDetails[0]?.unit}</p>
                                {/* <div className='weightGramclass'>Weight : {product?.productListDetails[0]?.weight} </div> */}
                                <div className='priceclass'>Price : ₹ <AmountFormat number={product?.productListDetails[0]?.totalAmount} /><br /> <span>MRP&nbsp;:&nbsp;₹&nbsp;<AmountFormatmrp number={product?.productListDetails[0]?.mrp} /> </span> </div>
                                <div className=''>
                                    {product?.productListDetails[0]?.quantity <= 0 ?
                                        <OutOFStock /> : <InStock />}
                                </div>
                                <div className='Carttomove' onClick={() => handleMovetoCart(product)}><FaCartPlus /> Add Cart</div>
                            </div>
                        </div>

                    </div>
                ))}
            </Carouselslider>
            <PreviousButton onClick={() => slider.current.prev()}><IoIosArrowBack /></PreviousButton>
            <NextButton onClick={() => slider.current.next()}><IoIosArrowForward /></NextButton>

        </RecentListCarousel>
    )
}
