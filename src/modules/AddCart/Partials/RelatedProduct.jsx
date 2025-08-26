import React, { useEffect, useRef, useState } from 'react'
import { Carouselslider, RelatedProductSyle } from '../style'
import { AllProduct, GetCategory } from '@modules/ProductList/ProductListSlice';
import { selectCurrentId } from '@modules/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import baseRequest, { base } from '@request/request';
import errorHandler from '@request/errorHandler';
import successHandler from '@request/successHandler';
import { APIURLS } from '@request/apiUrls/urls';
import { useNavigate } from 'react-router-dom';
import { GetAllCart } from '../CartSlice';
import { InStock, OutOFStock } from '@modules/CommonComponents/SoldOut';
import { Offers } from '@modules/CommonComponents/Offers';
import { FaCartPlus } from "react-icons/fa6";
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate';

export const RelatedProduct = () => {

    const dispatch = useDispatch();

    const slider = useRef(null);

    const navigate = useNavigate();

    const [filterProduct, setFilterProduct] = useState({});
    console.log(filterProduct, 'filterProduct');

    const AllProductCarousel = useSelector(AllProduct);

    useEffect(() => {
        if (AllProductCarousel && AllProductCarousel.length > 0) {
            setFilterProduct(AllProductCarousel[0]);
        }
    }, [AllProductCarousel]);

    const CurrentUser = useSelector(selectCurrentId)

    useEffect(() => {
        dispatch(GetCategory(CurrentUser))
    }, [CurrentUser])

    const handleQuickView = (productId) => {
        console.log(productId, 'Produc234tIdProductId');
        navigate(`/singleProduct/${productId}`)
    }

    console.log(AllProductCarousel, 'AllProductCarousel');

    const handleProductClick = (item) => {
        console.log(item, 'itemitem');
        setFilterProduct(item)
    }
    console.log(filterProduct, '234filterProduct1');

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
                productVarientImagesId: values?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImagesId,
                productListId: values?.productListDetails[0]?.productListId,
                userId: CurrentUser,
                quantity: 1,
                totalPrice: values?.productListDetails[0]?.sellRate
            }
            console.log(newValue, 'cartnewValue');
            MovetocartWishList(newValue)
        }
    }

    return (
        <RelatedProductSyle>

            <div className='relatedProductTxt'>
                {AllProductCarousel?.map((item, id) => (
                    <div key={id}>
                        <p onClick={() => handleProductClick(item)}
                            style={{ color: filterProduct.categoryId === item.categoryId ? '#ef8f21' : 'black' }}>
                            {item.categoryName}
                        </p>
                    </div>

                ))}
            </div>

            <Carouselslider
                slidesPerRow={4} ref={slider} dots={false} draggable
                slidesToScroll={1}
                responsive={[{ breakpoint: 1900, settings: { slidesPerRow: 4 } },
                { breakpoint: 1200, settings: { slidesPerRow: 4 } },
                { breakpoint: 900, settings: { slidesPerRow: 3 } },
                { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}>

                {filterProduct?.productDetails?.map((item, id) => {
                    return (
                        <div key={id} className='productimgsectn'>
                            <div className='bannerimgsectn'>
                                <div style={{ padding: '20px' }}>
                                    <div className='Responn'>
                                        <img src={`${base}${item?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImageUrl}`}
                                            alt={item?.productListDetails[0]?.productName || 'productImg'} title={item?.productListDetails[0]?.productName || 'productImg'} />

                                        <Offers text={item?.productListDetails[0]?.discountPercentage} />
                                    </div>
                                    <div className='desribtn'>{item?.productListDetails[0]?.description || '...'} </div>
                                    <div className='priceRatesss'>₹ <AmountFormat number={item?.productListDetails[0]?.totalAmount} /><br /> <span>₹ <AmountFormatmrp number={item?.productListDetails[0]?.mrp} /> </span> </div>
                                    <div className='stockdetails'>
                                        {item?.productListDetails[0]?.quantity <= 0 ?
                                            <OutOFStock /> : <InStock />}
                                    </div>
                                    <div className='viewDetails' onClick={() => handleQuickView(item?.productId)}>View More...</div>
                                </div>
                                <div className='Addtocart' onClick={() => handleMovetoCart(item)}> <FaCartPlus /> Move to cart</div>
                            </div>
                        </div>
                    )
                })}

            </Carouselslider>

        </RelatedProductSyle>
    )
}
