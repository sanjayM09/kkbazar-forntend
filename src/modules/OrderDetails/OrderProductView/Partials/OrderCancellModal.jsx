import { Button, CustomTextArea } from '@components/form'
import { Flex } from '@components/others'
import { APIURLS } from '@request/apiUrls/urls';
import errorHandler from '@request/errorHandler';
import baseRequest from '@request/request';
import successHandler from '@request/successHandler';
import { Form } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react';

export const OrderCancellModal = ({ CancelValue, formclose, orderhistModalClose, cancelltrigger }) => {

    console.log(CancelValue, 'CancelValue');

    const [form] = Form.useForm();

    const [isloading, setIsloading] = useState(false)

    const ProductCancel = async (data) => {
        setIsloading(true)
        await baseRequest.put(`${APIURLS.PRODUCT_CANCELL_POST}/${CancelValue?.orderItemListId}`, data)
            .then(function (response) {
                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                setIsloading(false)
                if (formclose) {
                    formclose();
                }
                if (orderhistModalClose) {
                    orderhistModalClose();
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

    const handleSubmit = (values) => {
        const newValue = {
            orderStatus: 'cancelled',
            reason: values?.reason || '',
        }
        ProductCancel(newValue)
        console.log('Submitted values:', newValue);

    };

    useEffect(() => {
        form.resetFields();
    }, [CancelValue, cancelltrigger])



    return (
        <div style={{ background: '#fcecda', padding: '10px' }}>
            <h3 style={{ textAlign: 'center' }}>Are You Sure To cancel Order</h3><br />
            <Form
                form={form}
                name='filtersearch'
                initialValues={{ name: 'Filter' }}
                onFinish={handleSubmit}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <h3>Reason</h3>
                <CustomTextArea name={'reason'} placeholder={'Type here'}
                    rules={[{ required: true, message: 'Required' }]} />
                <Flex center={true}>
                    <Button.Primary text={'OK'} htmlType={'submit'} loading={isloading} />
                </Flex>
            </Form>
        </div>
    )
}
