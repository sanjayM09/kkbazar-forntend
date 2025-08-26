import React, { useEffect, useState } from 'react'
import { OrderSeparateProduct } from './Style'
import { SvgIcons } from '@assets/images'
import { CommonLoading, CustomModal, Flex } from '@components/others'
import { Rate } from 'antd'
import { ReturnConfirmation } from './ReturnConfirmation'
import { RiCustomerServiceFill } from 'react-icons/ri'
import baseRequest, { base } from '@request/request'
import { OrderCancellModal } from './OrderCancellModal'
import { useNavigate } from 'react-router-dom'
import PaySlipPrint from '@modules/PaySlip/Partials/PaySlipPrint'
import { APIURLS } from '@request/apiUrls/urls'
import { selectCurrentId } from '@modules/Auth/authSlice'
import { useSelector } from 'react-redux'
import { ReturnBankStatement } from './ReturnBankStatement'
import AmountFormat, { AmountFormatmrp } from '@modules/CommonComponents/AmountFormate'
import { ReturnOrderCancelModal } from './OrderReturnModal'
import { OrderReturmCancelled } from './OrderReurnCancelModal'


export const OrderProductDetails = ({ RecordValues, orderhistModalClose }) => {

    console.log(RecordValues, 'RecordValues');

    const nevigate = useNavigate();

    const [startRAte, setStartRAte] = useState(0)

    const [cancelltrigger, setCancelltrigger] = useState(0)

    const [payslipTrigger, setPayslipTrigger] = useState(0)

    const [memberData, setMemberData] = useState({})

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

    // Current user id ------

    const CurrentUser = useSelector(selectCurrentId)

    // ------- Get Product Members Datas ---------

    useEffect(() => {
        GetProductMemberData()
    }, [RecordValues])


    const GetProductMemberData = async (data) => {
        await baseRequest.get(`${APIURLS.PRODUCT_MEMBER_GET_LIST}/${CurrentUser}/${RecordValues?.orderItemId}/${RecordValues?.orderItemListId}`, data)
            .then(function (response) {
                console.log(response.data, 'Membersdata');
                setMemberData(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error, 'Membersdata error');
            })
    }

    console.log(memberData, 'updateeghgh');

    // -------- Modal Details -----------

    const handleOrderReturn = (record) => {
        // nevigate('/orderproductView')
        setModelwith(600)
        setModalContent(<ReturnConfirmation OrderDetails={record} orderhistModalClose={orderhistModalClose} handleOk={handleOk} />);
        // setModalContent(<OrderReturnModal />);
        showModal();
    }

    const handleMoneyRefundDetails = (record) => {
        setModelwith(600)
        setModalContent(<ReturnBankStatement orderhistModalClose={orderhistModalClose}
            OrderDetails={record} formclose={handleOk} />);
        showModal();
    }

    const handleOrderCancell = (RecordValues) => {
        setModelwith(400)
        setCancelltrigger(cancelltrigger + 1)
        setModalContent(<OrderCancellModal CancelValue={RecordValues} formclose={handleOk}
            orderhistModalClose={orderhistModalClose} cancelltrigger={cancelltrigger} />);
        showModal();
    }

    const handleReturnOrderCancel = (RecordValues) => {
        setModelwith(500)
        setCancelltrigger(cancelltrigger + 1)
        setModalContent(<OrderReturmCancelled CancelValue={RecordValues} formclose={handleOk}
            orderhistModalClose={orderhistModalClose} cancelltrigger={cancelltrigger} />);
        showModal();
    }

    const handleHelp = () => {
        nevigate('/faq')
    }

    const handleInvoicePrint = () => {
        setPayslipTrigger(payslipTrigger + 1)
        setModelwith(800)
        setModalContent(<PaySlipPrint InvoiceData={memberData} payslipTrigger={payslipTrigger} />);
        showModal();
    }

    useEffect(() => {
        setStartRAte(RecordValues?.starRate)
    }, [RecordValues])

    const handleRateChange = (value) => {
        setStartRAte(value)
    }

    return (
        <OrderSeparateProduct>
            <div className='productImgBox'>
                <div className='customercare'>
                    <div className='iconcus' onClick={() => handleHelp()} >
                        <RiCustomerServiceFill />
                        <p>Help</p>
                    </div>
                </div>
                <div className='imgShow'>
                    <img src={`${base}${RecordValues?.productVarientImageUrl}`}
                        alt={RecordValues?.productName || 'Productimg'}
                        title={RecordValues?.productName || 'Productimg'} 
                        />
                </div>
                <div className='nameClass'>{RecordValues?.productName} </div>
                <div className='descrbtnClass'>{RecordValues?.description} </div>
                <div className='priceClass'>₹ <AmountFormat number={RecordValues?.totalAmount} /> <span>₹ <AmountFormatmrp number={RecordValues?.mrp} /></span> </div>

                <div className='DeliverDetailClass'>
                    <div className='deliverd'>
                        <div className='imgicon'>
                            <img src={SvgIcons.OrderedBox} />
                        </div>
                        <p>
                            {RecordValues?.orderStatus == 'delivered' ? 'Delivered'
                                : RecordValues?.orderStatus == 'cancelled' ? 'Order Cancelled'
                                    : RecordValues?.orderStatus == 'pending' ? 'Product on process'
                                        : RecordValues?.orderStatus == 'confirmed' ? 'Order Confirmed'
                                            : RecordValues?.orderStatus === 'returnRequestPending' ? 'Return request'
                                                : RecordValues?.orderStatus === 'returnAccepted' ? 'Refund Detail'
                                                    : RecordValues?.orderStatus === 'returnRejected' ? 'Return Rejected'
                                                        : RecordValues?.orderStatus === 'refundRequestPending' ? 'Refund Request Pending'
                                                            : RecordValues?.orderStatus === 'refundAccepted' ? 'Refund Success'
                                                                : null}
                            <br />
                            <span>
                                {RecordValues?.orderStatus == 'delivered' ? RecordValues?.deliveredDate :
                                    RecordValues?.date}
                            </span>
                        </p>
                    </div>

                    {RecordValues?.returnType === 'yes' && RecordValues?.orderStatus === 'delivered' &&
                        (RecordValues?.returnCancelled === false || RecordValues?.returnCancelled === null) ?
                        <div className='return' onClick={() => handleOrderReturn(RecordValues)} >
                            <img src={SvgIcons.RetuenDeleverd} color='' /><span>Return</span>
                        </div> :
                        RecordValues?.returnType === 'no' &&
                            RecordValues?.orderStatus === 'delivered' ?
                            <div className='return' style={{ cursor: 'default' }}>
                                <img src={SvgIcons.RetuenDeleverd} color='' /><span>Deliverd Success</span>
                            </div> : RecordValues?.orderStatus === 'cancelled' ?
                                <div className='return' style={{ cursor: 'default' }}>
                                    <img src={SvgIcons.RetuenDeleverd} color='' /><span>Order Cancelled</span>
                                </div> : RecordValues?.orderStatus === 'confirmed' ?
                                    <div className='return' style={{ cursor: 'default' }} >
                                        <img src={SvgIcons.RetuenDeleverd} color='' /><span>Order Confirmed</span>
                                    </div> : RecordValues?.orderStatus === 'pending' ?
                                        <div className='return' onClick={() => handleOrderCancell(RecordValues)} >
                                            <img src={SvgIcons.RetuenDeleverd} color='' /><span>Cancel</span>
                                        </div>
                                        //  RecordValues?.orderStatus === 'returnRequestPending' ?
                                        //     <div className='return'>
                                        //         <img src={SvgIcons.RetuenDeleverd} color='' />
                                        //         <span style={{ fontSize: '15px' }}>Return request is processing</span>
                                        //     </div>
                                        // returnCancelled
                                        : RecordValues?.orderStatus === 'returnRequestPending' && RecordValues?.returnCancelled === false ?
                                            <div className='return' onClick={() => handleReturnOrderCancel(RecordValues)}>
                                                <img src={SvgIcons.RetuenDeleverd} color='' />
                                                <span style={{ fontSize: '15px' }}>Return Cancelled</span>
                                            </div> : RecordValues?.orderStatus === 'delivered' && RecordValues?.returnCancelled === true ?
                                                <div className='return' style={{ cursor: 'default' }}>
                                                    <img src={SvgIcons.RetuenDeleverd} color='' />
                                                    <span style={{ fontSize: '15px' }}>Delivered</span>
                                                </div> : RecordValues?.orderStatus === 'delivered' && RecordValues?.returnCancelled === false ?
                                                    <div className='return' onClick={() => handleOrderReturn(RecordValues)}>
                                                        <img src={SvgIcons.RetuenDeleverd} color='' />
                                                        <span style={{ fontSize: '15px' }}>Return</span>
                                                    </div> :

                                                    RecordValues?.orderStatus === 'returnAccepted' ?
                                                        <div className='return' onClick={() => handleMoneyRefundDetails(RecordValues)} >
                                                            <img src={SvgIcons.RetuenDeleverd} color='' /><span>Refund</span>
                                                        </div> : RecordValues?.orderStatus === 'returnRejected' ?
                                                            <div className='return' style={{ cursor: 'default' }}>
                                                                <img src={SvgIcons.RetuenDeleverd} color='' /><span>Return Rejected</span>
                                                            </div>
                                                            : RecordValues?.orderStatus === 'refundRequestPending' ?
                                                                <div className='return' style={{ cursor: 'default' }}>
                                                                    <img src={SvgIcons.RetuenDeleverd} color='' />
                                                                    <span style={{ fontSize: '15px' }}>Refund Request Pending</span>
                                                                </div> : RecordValues?.orderStatus === 'refundAccepted' ?
                                                                    <div className='return' style={{ cursor: 'default' }}>
                                                                        <img src={SvgIcons.RetuenDeleverd} color='' />
                                                                        <span style={{ fontSize: '15px' }}>Refund Success</span>
                                                                    </div>
                                                                    : null

                    }


                </div>

                <div className='itemrateimgClass'>
                    <div className='imgsection'>
                        <img src={`${base}${RecordValues?.productVarientImageUrl}`}
                            alt={RecordValues?.productName || 'Productimg'}   title={RecordValues?.productName || 'Productimg'}/>
                    </div>
                    <div>
                        <p>Product Rate</p>
                        <Rate onChange={handleRateChange} value={startRAte} disabled />
                    </div>
                </div>

            </div>

            <div className='productImgBox'>
                <div className='addressbox'>
                    <h2>Delivery Address</h2>
                    <p>{memberData?.userName} <span>|</span> {memberData?.streetAddress}</p>
                    <p>Address Type : {memberData?.addressType}, City : {memberData?.city}, Country : {memberData?.country} </p>
                </div>
            </div>

            <div className='productImgBox'>
                <div className='priceBox'>
                    <h2>Total Order Price</h2>
                    <Flex spacebetween={true} aligncenter={true}>
                        <div>
                            {/* <p>You saved ₹ 1150.00 on this order  </p> */}
                            <p>Quantity : {RecordValues?.quantity} </p>
                        </div>
                        <p><span>₹&nbsp;<AmountFormat number={RecordValues?.totalPrice} /></span></p>
                    </Flex>

                    <div className='paytypeClass'><img src={SvgIcons.CashondeliveryOrder} /><p>{RecordValues?.paymentType} </p></div>
                    {RecordValues?.orderStatus == 'delivered' ?
                        <div className='invoiceClass' onClick={() => handleInvoicePrint(memberData)}>Get invoice</div>
                        : null}
                </div>
            </div>

            {/* <div className='productImgBox'>
                <div className='Updatesend'>
                    <h2>Updates sent to</h2>
                    <Flex gap={'5px'} aligncenter={true}><BiSolidPhoneCall /><p>{RecordValues?.mobileNumber} </p></Flex>
                </div>
            </div> */}

            {/* <div className='productImgBox'>
                <div className='orderId'>Order ID # 1249757 84225319706903</div>
            </div> */}

            <CustomModal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={modelwith} modalTitle={modalTitle} modalContent={modalContent} />

        </OrderSeparateProduct>
    )
}
