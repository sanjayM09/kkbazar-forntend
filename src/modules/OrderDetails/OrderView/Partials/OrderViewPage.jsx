import React, { useEffect, useState } from 'react'
import { OrderViewCart } from './Style'
import CustomSearchInput from '@components/form/CustomSearchInput'
import { Col, Form, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AllOrderviewproduct, GetOrderViewProductSectn, GetOrderviewproducttatus, SetOrdersData } from '@modules/OrderDetails/OrderDetailsSlice';
import { selectCurrentId } from '@modules/Auth/authSlice';
import { SvgIcons } from '@assets/images';
import { CommonLoading, CustomModal, CustomRow, Flex } from '@components/others';
import { MdArrowForwardIos } from "react-icons/md";
import { base } from '@request/request';
import { useNavigate } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { RatingForm } from './RatingForm';
import { OrderProductDetails } from '@modules/OrderDetails/OrderProductView/Partials/ProductDetails';
import { EmptyOrderPage } from './EmptyProductPage';
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate';


export const OrderViewPage = () => {

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [pageSize, setPageSize] = useState(5);  // -------- Pagination state
  const [currentPage, setCurrentPage] = useState(1);   // -------- Pagination state

  const [reviewTrigger, setReviewTrigger] = useState(0);

  // -------- Modal Details -----------

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  // ----------  Form Reset UseState ---------
  const [modelwith, setModelwith] = useState(0);

  // ===== Modal Functions Start =====
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // -------- Modal Details -----------


  const OrderProductList = useSelector(AllOrderviewproduct);

  const CurrentUser = useSelector(selectCurrentId);

  const GetOrderviewstatus = useSelector(GetOrderviewproducttatus);

  console.log(GetOrderviewstatus, 'GetOrderviewstatus');

  useEffect(() => {
    if (CurrentUser == undefined || null) {
      navigate('/signin')
    } else {
      dispatch(GetOrderViewProductSectn(CurrentUser))
      dispatch(SetOrdersData(OrderProductList))
    }
  }, [CurrentUser])

  const OrderhistModalClose = () => {
    handleOk();
    dispatch(GetOrderViewProductSectn(CurrentUser))
  }



  // Pagination page function ------------

  const calculatePageSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setPageSize(4);
    } else {
      setPageSize(3);
    }
  };

  useEffect(() => {
    calculatePageSize();
    window.addEventListener('resize', calculatePageSize);
    return () => window.removeEventListener('resize', calculatePageSize);
  }, []);

  const totalItems = OrderProductList?.length;
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = OrderProductList?.slice(indexOfFirstItem, indexOfLastItem);


  // Pagination change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination page function end ......... ------------



  useEffect(() => {
    if (OrderProductList && OrderProductList?.length > 0) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [OrderProductList])



  console.log(CurrentUser, 'CurrentUserCurrentUser');

  console.log(OrderProductList, 'OrderProductList');

  const handleOrderDetails = (RecordValues) => {
    // nevigate('/orderproductView')
    console.log(RecordValues, 'RecordValues');
    setModelwith(800)
    setModalContent(<OrderProductDetails RecordValues={RecordValues} orderhistModalClose={OrderhistModalClose} />);
    showModal();
  }

  const handleReturnProduct = (itemreturn) => {
    console.log(itemreturn, 'RecordValues');
    setModelwith(800)
    setModalContent(<OrderProductDetails RecordValues={itemreturn} />);
    showModal();
  }

  const handleRating = (recordData) => {
    console.log(recordData, 'recordData');
    setReviewTrigger(reviewTrigger + 1)
    setModelwith(700)
    setModalContent(<RatingForm recordData={recordData} reviewTrigger={reviewTrigger}
      FormClose={handleOk} OrderhistModalClose={OrderhistModalClose} />);
    showModal();
  }


  return (
    <OrderViewCart>
      <h2>All orders</h2>
      <div className='Filterclass'>
        <h4>from anytime</h4>
      </div><br />

      {/* {GetOrderviewstatus === 'succeeded' ? */}
      <>
        {CurrentUser == null ? <EmptyOrderPage /> : (
          <>

            <div className='orderViewBox'>
              {currentItems && currentItems.length === 0 ? <EmptyOrderPage /> : null}

              {currentItems && currentItems.length > 0 &&       //----Check length
                <>
                  {currentItems?.map((item, id) => {
                    return (
                      <div key={id} className='orderbox'>
                        <div className='orderstatuss'>
                          <div className='imgicon'>
                            {item?.orderStatus == 'delivered' ? <img src={SvgIcons.DeliveredBox} /> :
                              <img src={SvgIcons.OrderedBox} />}
                          </div>
                          <p>
                            {/* {item?.orderStatus} */}
                            {item?.orderStatus == 'delivered' ? 'Delivered'
                              : item?.orderStatus == 'cancelled' ? 'Order Cancelled'
                                : item?.orderStatus == 'pending' ? 'Product on process'
                                  : item?.orderStatus === 'returnRequestPending' ? 'Return request'
                                    : item?.orderStatus === 'returnAccepted' ? 'Refund Detail'
                                      : item?.orderStatus === 'returnRejected' ? 'Return Rejected'
                                        : item?.orderStatus === 'refundRequestPending' ? 'Refund Request Pending'
                                          : item?.orderStatus === 'refundAccepted' ? 'Refund Success'
                                            : null}<br /><span>{item?.date} </span> </p>
                        </div>

                        <div className='imgdetails'>
                          <CustomRow space={[12, 12]}>
                            <Col span={24} md={9} lg={5}>
                              <div className='orderImg'>
                                <img src={`${base}${item?.productVarientImageUrl}`}
                                  alt={item?.productName || 'Productimg'}   title={item?.productName || 'Productimg'} />
                              </div>
                            </Col>
                            <Col span={22} md={13} lg={17}>
                              <div>
                                <div className='productName'>{item?.productName}</div>
                                {/* <div className='productDescrip'>{item?.description || '...'}  </div> */}
                                <div className='productDescrip' style={{ maxHeight: '8em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                  {item?.description || '...'}
                                </div>
                                <div className='productDescrip'>Qty: {item?.quantity} | Rate: ₹ <AmountFormat number={item?.totalPrice} /> <span>MRP : ₹ <AmountFormatmrp number={item?.mrp} /></span></div>
                                <div className='TrackingClass'>

                                  {item?.returnType === 'yes' && item?.orderStatus == 'delivered' &&
                                    (item?.returnCancelled === false || item?.returnCancelled === null) ?
                                    <div className='delicerdCar' onClick={() => handleReturnProduct(item)}>
                                      <img src={SvgIcons.RetuenDeleverd} color='' /><span>Return</span>
                                    </div> :
                                    item?.returnType === 'no' && item?.orderStatus == 'delivered' ?
                                      <div className='delicerdCar'>
                                        <img src={SvgIcons.RetuenDeleverd} color='' /><span>Deliverd Success</span>
                                      </div>
                                      : item?.orderStatus === 'delivered' && item?.returnCancelled === true ?
                                        <div className='delicerdCar'>
                                          <img src={SvgIcons.RetuenDeleverd} color='' /><span>Delivered</span>
                                        </div>
                                        : item?.orderStatus == 'cancelled' ?
                                          <div className='delicerdCar'>
                                            <img src={SvgIcons.DeliveredCar} /><span>Product Cancelled </span>
                                          </div> : item?.orderStatus == 'confirmed' ?
                                            <div className='delicerdCar'>
                                              <img src={SvgIcons.DeliveredCar} /><span> Order Confirmed</span>
                                            </div>
                                            : item?.orderStatus === 'pending' ?
                                              <div className='delicerdCar'>
                                                <img src={SvgIcons.DeliveredCar} /><span> Order on processing</span>
                                              </div>
                                              : item?.orderStatus === 'returnRequestPending' ?
                                                <div className='delicerdCar'>
                                                  <img src={SvgIcons.DeliveredCar} /><span>Return request is processing</span>
                                                </div>
                                                : item?.orderStatus === 'returnAccepted' ?
                                                  <div className='delicerdCar'>
                                                    <img src={SvgIcons.DeliveredCar} /><span>Apply Refund</span>
                                                  </div>
                                                  : item?.orderStatus === 'returnRejected' ?
                                                    <div className='delicerdCar'>
                                                      <img src={SvgIcons.DeliveredCar} /><span>Return Rejected</span>
                                                    </div> :
                                                    item?.orderStatus === 'refundRequestPending' ?
                                                      <div className='delicerdCar'>
                                                        <img src={SvgIcons.DeliveredCar} /><span>Refund Request Pending</span>
                                                      </div>
                                                      : item?.orderStatus === 'refundAccepted' ?
                                                        <div className='delicerdCar'>
                                                          <img src={SvgIcons.DeliveredCar} /><span>Refund Success</span>
                                                        </div>
                                                        : null
                                  }

                                </div>

                                <div className='messageshow'>
                                  {item?.returnType === 'yes' && item?.orderStatus == 'delivered' ?
                                    <Flex aligncenter={true}><GoDotFill />
                                      <p>Product Delivered Successfully</p>
                                    </Flex> :
                                    item?.returnType === 'no' && item?.orderStatus == 'delivered' ?
                                      <Flex aligncenter={true}><GoDotFill />
                                        <p>Product Delivered Successfully (No return option for this product) </p>
                                      </Flex> :
                                      item?.orderStatus == 'cancelled' ?
                                        <Flex aligncenter={true}><GoDotFill color='#ef8f21' />
                                          <p>Product Cancelled Successfully</p>
                                        </Flex>
                                        : item?.orderStatus == 'confirmed' ?
                                          <Flex aligncenter={true}><GoDotFill color='#6df5ff' />
                                            <p>The product will be delivered soon.</p>
                                          </Flex>
                                          :
                                          null}

                                </div>

                              </div>
                            </Col>
                            <Col span={2} md={2} lg={2}><MdArrowForwardIos cursor={'pointer'} onClick={() => handleOrderDetails(item)} /> </Col>
                          </CustomRow>
                        </div>

                        {item?.orderStatus == 'delivered' && 'cancelled' ?
                          <div className='ratingClass' onClick={() => handleRating(item)}><p style={{ margin: 'auto', cursor: 'pointer' }}>Rating & FeedBack</p></div>
                          : null}
                      </div>
                    )
                  })}

                  <Pagination current={currentPage}
                    pageSize={pageSize}
                    total={totalItems} onChange={handlePageChange} />
                </>
              }

            </div>
          </>
        )
        }
      </>
      {/* : <CommonLoading />} */}

      <CustomModal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={modelwith} modalTitle={modalTitle} modalContent={modalContent} />

    </OrderViewCart >
  );
};

