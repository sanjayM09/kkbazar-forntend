import React, { useState } from 'react'
import { ReturnModal } from './Style'
import { Flex } from '@components/others'
import { LuDot } from "react-icons/lu";
import { PiPhoneCallFill } from 'react-icons/pi';
import baseRequest from '@request/request';
import { APIURLS } from '@request/apiUrls/urls';


export const ReturnOrderCancelModal = () => {

    // const [form] = Form.useForm();

    const [isloading, setIsloading] = useState(false)

    // const ProductCancel = async (data) => {
    //     setIsloading(true)
    //     await baseRequest.put(`${APIURLS.ORDER_RETURN_CANCEL_POST}/${CancelValue?.orderItemListId}`, data)
    //         .then(function (response) {
    //             successHandler(response, {
    //                 notifyOnSuccess: true,
    //                 notifyOnFailed: true,
    //                 msg: 'success',
    //                 type: 'success',
    //             })
    //             setIsloading(false)
    //             if (formclose) {
    //                 formclose();
    //             }
    //             if (orderhistModalClose) {
    //                 orderhistModalClose();
    //             }
    //             console.log(response, 'add');
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             setIsloading(false)
    //             errorHandler(error)
    //             console.log(error.response, 'add error');
    //         })
    // }

    // const handleSubmit = (values) => {
    //     const newValue = {
    //         orderStatus: 'cancelled',
    //         reason: values?.reason || '',
    //     }
    //     ProductCancel(newValue)
    //     console.log('Submitted values:', newValue);

    // };

    // useEffect(() => {
    //     form.resetFields();
    // }, [CancelValue, cancelltrigger])


    return (
        <ReturnModal>
            <h2>Order Return</h2>
            <div className='reasonClass'>
                <p>Refund Amount</p>
                <div className='ruleClass'>
                    <Flex aligncenter={true} spacebetween={true}>
                        <h6>Total Amount paid</h6>
                        <h6>₹539.00</h6>
                    </Flex>
                    <Flex aligncenter={true} spacebetween={true}>
                        <h6>Customer Charge</h6>
                        <h6>₹539.00</h6>
                    </Flex>
                    <Flex aligncenter={true} spacebetween={true}>
                        <h6>Refund Ammount</h6>
                        <h6>₹539.00</h6>
                    </Flex>
                </div>
                <p>Return Tracking</p>
                <Flex aligncenter={true} className='transferdetail'><LuDot />
                    Refund will be transferred tomorrow or the after tomorrow </Flex>
            </div>
            <Flex gap={'10px'} aligncenter={true} className='callnumber'><PiPhoneCallFill />6349803472</Flex>
        </ReturnModal>
    )
}
