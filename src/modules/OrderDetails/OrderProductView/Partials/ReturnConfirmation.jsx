import React, { useState } from 'react'
import { ReturnModal } from './Style'
import { Button, CustomTextArea } from '@components/form'
import { Form } from 'antd'
import { Flex } from '@components/others'
import baseRequest from '@request/request'
import { APIURLS } from '@request/apiUrls/urls'
import successHandler from '@request/successHandler'
import errorHandler from '@request/errorHandler'

export const ReturnConfirmation = ({ OrderDetails, orderhistModalClose, handleOk }) => {

    const [form] = Form.useForm();

    const [isloading, setIsloading] = useState(false)

    console.log(OrderDetails, 'Order23fDetails');



    const PostOrderReturn = async (data) => {
        setIsloading(true)
        await baseRequest.post(`${APIURLS.PRODUCT_RETURN_POST}`, data)
            .then(function (response) {
                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                setIsloading(false)
                if (orderhistModalClose) {
                    orderhistModalClose()
                } if (handleOk) {
                    handleOk()
                }
                console.log(response, 'add');
                return response.data;
            })
            .catch(function (error) {
                setIsloading(false)
                errorHandler(error)
                console.log(error.response, 'add error');
            })
    }


    const handleSubmit = (data) => {
        const NewValueSend = {
            ...data,
            orderItemListId: OrderDetails?.orderItemListId,
            userId: OrderDetails?.userId,
        }
        console.log(NewValueSend, 'NewValueSend');
        PostOrderReturn(NewValueSend)
    }

    return (
        <ReturnModal>
            <h2>Order Return</h2>
            <Form
                form={form}
                name='filtersearch'
                initialValues={{ name: 'Filter' }}
                onFinish={handleSubmit}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <div className='reasonClass'>
                    <p>Reason for Return</p>
                    <CustomTextArea name={'reasonForReturn'}
                        rules={[{ required: true, message: 'Required' }]} /><br />
                    {/* <p>Return Shipping Label (if provided by the seller)</p>
                    <CustomInput name={'ggg'} /><br /> */}
                    {/* <p>Return Instructions</p>
                    <div className='ruleClass'>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur. At eget nibh amet facilisis et tincidunt </li>
                            <li>Ipsum sociis in curabitur neque in orci enim diam. </li>
                            <li>Vulputate curabitur nam leo orci. </li>
                        </ul>
                    </div> */}
                </div>
                <Flex center={true}>
                    <Button.Primary text={'Order Return'} htmlType={'submit'} loading={isloading} />
                </Flex>
            </Form>
        </ReturnModal>
    )
}
