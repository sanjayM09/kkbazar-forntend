import { Button, CustomInput, CustomInputNumber, CustomTextArea } from '@components/form';
import { CustomRow, Flex } from '@components/others';
import { CustomPageTitle } from '@components/others/CustomPageTitle';
import { selectCurrentId } from '@modules/Auth/authSlice';
import { APIURLS } from '@request/apiUrls/urls';
import errorHandler from '@request/errorHandler';
import baseRequest from '@request/request';
import successHandler from '@request/successHandler';
import { Col, Form } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const ReturnBankStatement = ({ orderhistModalClose, OrderDetails, formclose }) => {

    const [form] = Form.useForm(); // ----- Define Form

    const [isloading, setIsloading] = useState(false)

    const CurrentUser = useSelector(selectCurrentId)

    console.log(OrderDetails, '35OrderDertbetails');

    useEffect(() => {
        form.setFieldsValue(OrderDetails)
    }, [OrderDetails])


    const PostBAnkStatement = async (data) => {
        setIsloading(true)
        await baseRequest.post(`${APIURLS.PRODUCT_BANK_STATEMENTPOST}`, data)
            .then(function (response) {
                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                setIsloading(false)
                if (orderhistModalClose) {
                    orderhistModalClose();
                }
                if (formclose) {
                    formclose();
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

    const onFinish = (values) => {
        const NewValueSend = { ...values, userId: CurrentUser }
        console.log(NewValueSend, 'NewValueSend');
        PostBAnkStatement(NewValueSend)
    }

    return (
        <Fragment>
            <Form
                form={form}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <CustomRow space={[12, 12]}>
                    <Col span={24} md={24}>
                        <CustomPageTitle Heading={'Bank Statement'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'holderName'} label={'Holder Name'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInputNumber name={'accountNumber'} label={'Account Number'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'bankName'} label={'Bank Name'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'branchName'} label={'Branch Name'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'ifscCode'} label={'IFSC Code'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'panNumber'} label={'Pan Number'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={24}>
                        <CustomTextArea name={'bankAddress'} label={'Bank Address'}
                            rules={[{ required: true, message: 'Required' }]} />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomInput name={'orderReturnId'} display={'none'} />
                        <CustomInput name={'orderItemListId'} display={'none'} />
                    </Col>
                </CustomRow>

                <Flex center={"true"} margin={"20px 0px"}>
                    <Button.Primary text={'Submit'} htmlType={'submit'} loading={isloading} />
                </Flex>
            </Form>
        </Fragment>
    )
}
