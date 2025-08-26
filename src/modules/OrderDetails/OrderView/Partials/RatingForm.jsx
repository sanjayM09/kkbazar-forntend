import { Button, CustomTextArea } from '@components/form';
import { Form, Rate } from 'antd';
import React, { useEffect, useState } from 'react'
import { RatingSection } from './Style';
import { Flex } from '@components/others';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentId } from '@modules/Auth/authSlice';
import successHandler from '@request/successHandler';
import baseRequest from '@request/request';
import { APIURLS } from '@request/apiUrls/urls';
import errorHandler from '@request/errorHandler';
import { GetOrderViewProductSectn } from '@modules/OrderDetails/OrderDetailsSlice';

export const RatingForm = ({ recordData, reviewTrigger, FormClose, OrderhistModalClose }) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch();

    console.log(recordData, 'reco5345rdDatarecordData');

    const [starValue, setStarValue] = useState(0)

    const [isloading, setIsloading] = useState(false)

    const [editData, setEditData] = useState({})

    const CurrentUser = useSelector(selectCurrentId)

    const handleRateChange = (value) => {
        console.log('Selected rate:', value);
        setStarValue(value)
    };

    useEffect(() => {
        if (recordData?.reviewStatus === false) {
            setStarValue(0)
        }
        form.resetFields();
    }, [reviewTrigger])

    useEffect(() => {
        if (recordData?.reviewStatus === true) {
            if (editData) {
                setStarValue(editData?.starRate);
                form.setFieldsValue(editData)
            }
        }
    }, [editData, reviewTrigger])


    console.log(editData, 'editDatai87678');

    const GetProductFeedBack = async () => {
        setIsloading(true)
        await baseRequest.get(`${APIURLS.PRODUCT_FEEDBACK_Get}/${CurrentUser}/${recordData?.reviewId}`)
            .then(function (response) {
                setIsloading(false)
                // OrderhistModalClose();
                setEditData(response.data)
                console.log(response.data, 'getmdaar');
                return response.data;
            })
            .catch(function (error) {
                setIsloading(false)
                console.log(error, 'getmdaar error');
            })
    }


    const AddProductFeedBack = async (data) => {
        setIsloading(true)
        await baseRequest.post(APIURLS.PRODUCT_FEEDBACK_POST, data)
            .then(function (response) {
                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: 'success',
                    type: 'success',
                })
                if (FormClose) {
                    FormClose()
                }
                GetProductFeedBack();
                if (OrderhistModalClose) {
                    OrderhistModalClose();
                }
                setIsloading(false)

                console.log(response, 'addpooost');
                return response.data;
            })
            .catch(function (error) {
                setIsloading(false)
                console.log(error.response, 'addpooost error');
                return errorHandler(error)
            })
    }

    useEffect(() => {
        if (recordData?.reviewStatus === true) {
            GetProductFeedBack();
        }
    }, [recordData]);


    const handleSubmit = (values) => {
        const newValue = {
            // ...values,
            starRate: starValue,
            productListId: recordData?.productListId,
            userId: CurrentUser,
            message: values?.message || '',
            orderItemId: recordData?.orderItemId,
            orderItemListId: recordData?.orderItemListId,
        }
        AddProductFeedBack(newValue)
        console.log('Submitted values:', newValue);

    };

    return (
        <RatingSection>
            <Form
                form={form}
                name='starRating'
                initialValues={{ name: 'Filter' }}
                onFinish={handleSubmit}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <h2>Give Your Product FeedBack</h2><br />
                <div className='ratingClass'>
                    <Flex aligncenter={true} gap={'20px'}>
                        <h3>Product Rate</h3>
                        <Rate onChange={handleRateChange} value={starValue} name={'starRate'} />
                    </Flex>
                </div>
                <br />
                <h3>Feedback</h3>
                <div className='feedbackClass'>
                    <CustomTextArea name={'message'} placeholder={'Type here'} />
                </div><br />
                {recordData?.reviewStatus === true ? null :
                    <Flex center={true}>
                        <Button.Primary text={'Submit'} htmlType={'submit'} loading={isloading} />
                    </Flex>
                }
            </Form>
        </RatingSection>
    )
}
