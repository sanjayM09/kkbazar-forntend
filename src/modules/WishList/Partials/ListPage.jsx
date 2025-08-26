import React, { useEffect, useState } from 'react'
import { MyWishList } from './Style'
import { CommonLoading, CustomRow } from '@components/others'
import { Col, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Allwishlistproduct, GetWishProductSectn, Getwishlistproducttatus, StoreRedux } from '@modules/WishList/WhishListSlice'
import baseRequest, { base } from '@request/request'
import { selectCurrentId } from '@modules/Auth/authSlice'
import { IoIosArrowDropright, IoMdClose } from 'react-icons/io'
import { APIURLS } from '@request/apiUrls/urls'
import successHandler from '@request/successHandler'
import { GetProductwithDetailssectn } from '@modules/Home/HomeSlice'
import errorHandler from '@request/errorHandler'
import { EmptyWishlistPage } from './AddWishList'
import { InStock, OutOFStock, SoldOut } from '@modules/CommonComponents/SoldOut'
import { Offers } from '@modules/CommonComponents/Offers'
import { useNavigate } from 'react-router-dom'
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate'
import { GetAllCart } from '@modules/AddCart/CartSlice'

export const ListPage = () => {

    const dispatch = useDispatch();
    const [Isloading, setIsloading] = useState(false)
    const [triggerload, setTriggerload] = useState(0)

    const navigate = useNavigate();

    const [pageSize, setPageSize] = useState(8);  // -------- Pagination state
    const [currentPage, setCurrentPage] = useState(1);   // -------- Pagination state

    // User LogIn details ----------

    const AllDetails = useSelector(Allwishlistproduct)
    const WishlistLoadStatus = useSelector(Getwishlistproducttatus)
    const CurrentUser = useSelector(selectCurrentId)

    console.log(AllDetails, 'AllDetails');

    useEffect(() => {
        if (CurrentUser == undefined || null) {
            navigate('/signin')
        } else {
            dispatch(GetWishProductSectn(CurrentUser))
            dispatch(StoreRedux(AllDetails))
        }
    }, [CurrentUser])


    // Pagination page function ------------

    const calculatePageSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            setPageSize(4);
        } else {
            setPageSize(8);
        }
    };

    useEffect(() => {
        calculatePageSize();
        window.addEventListener('resize', calculatePageSize);
        return () => window.removeEventListener('resize', calculatePageSize);
    }, []);

    const totalItems = AllDetails?.length;
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = AllDetails?.slice(indexOfFirstItem, indexOfLastItem);


    // Pagination change handler
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Pagination page function end ......... ------------

    const handleQuickView = (productIdID) => {
        console.log(productIdID, 'Produc234tIdProductId');
        navigate(`/singleProduct/${productIdID}`)
    }

    // Remove WishList post ===========

    const RemoveWishList = async (data) => {
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
                setTriggerload(triggerload + 1)
                dispatch(GetProductwithDetailssectn())
                dispatch(GetWishProductSectn(CurrentUser))
                console.log(response, 'add');


                return response.data;
            })
            .catch(function (error) {
                setIsloading(false)
                console.log(error.response, 'add error');
            })
    }

    const handleClass = (values) => {
        console.log(values, '21values');
        const newValue = {
            productVarientImagesId: values?.productVarientImagesId,
            productListId: values?.productListId,
            userId: CurrentUser,
        }
        RemoveWishList(newValue)

        console.log(newValue, '21values newValue');

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
                dispatch(GetWishProductSectn(CurrentUser))
                dispatch(GetProductwithDetailssectn())
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
        console.log(values, 'sold');
        // const message = 'Product is out of stock'
        // if (values?.alertQuantity <= 5) {
        //     alert(message)
        // } else {
        const newValue = {
            productVarientImagesId: values?.productVarientImagesId,
            productListId: values?.productListId,
            userId: CurrentUser,
            quantity: 1,
        }

        console.log(newValue, 'cartnewValue');
        MovetocartWishList(newValue)
        // }
    }

    console.log(AllDetails, 'wishlistAllDetails');


    return (
        <MyWishList>
            <h2>My Wishlist</h2><br />
            {/* {WishlistLoadStatus === 'succeeded' ? */}

            {/* //  : (triggerload ? null : <CommonLoading />)}  */}
            {/* // :<CommonLoading />} */}



            <>
                {currentItems?.length > 0 ? (
                    <>
                        <CustomRow space={[12, 24]}>
                            {currentItems.map((item, index) => (
                                <Col span={12} md={12} lg={6} key={index} className='boxsectn'>
                                    <div className='boxline'>
                                        <div className='response'>
                                            {Isloading == item?.id ? (
                                                <CommonLoading />
                                            ) : (
                                                <>
                                                    <img src={`${base}${item?.productImagesUploadUrl}`}
                                                        alt={item?.productName || 'productName'}
                                                        title={item?.productName || 'productName'} 
                                                        />
                                                    <div className='closeclass' onClick={() => handleClass(item)}>
                                                        <IoMdClose />
                                                    </div>
                                                    <div className='quickView' onClick={() => handleQuickView(item?.productId)}>
                                                        <span> Quick View</span>
                                                    </div>
                                                </>
                                            )}

                                            <Offers text={item?.discountPercentage} />
                                        </div>

                                        <div className='boxtxt'>{item?.productName}</div>
                                        <div className='priceclass'>
                                            Price : ₹ <AmountFormat number={item?.totalAmount} /> <br />
                                            <span>&nbsp;MRP:&nbsp;₹&nbsp; <AmountFormatmrp number={item?.mrp} /></span>
                                        </div>

                                        <div style={{ textAlign: 'center' }}>
                                            {item?.quantity <= 0 ?
                                                <OutOFStock /> : <InStock />}
                                        </div>

                                        <div className='movetocartcalss' onClick={() => handleMovetoCart(item)}>
                                            Move to Cart &nbsp;<IoIosArrowDropright />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </CustomRow>
                        <Pagination current={currentPage}
                            pageSize={pageSize}
                            total={totalItems} onChange={handlePageChange} />
                    </>
                ) : (
                    <EmptyWishlistPage />
                )}
            </>


        </MyWishList>
    )
}
