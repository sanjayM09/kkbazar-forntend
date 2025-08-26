import { Button, CustomInput, CustomInputPassword } from "@components/form";
import { CustomRow, Flex } from "@components/others";
import { CustomPageTitle } from "@components/others/CustomPageTitle";
import { APIURLS } from "@request/apiUrls/urls";
import errorHandler from "@request/errorHandler";
import baseRequest from "@request/request";
import successHandler from "@request/successHandler";
import { Col, Form } from "antd";
import React, { useEffect } from "react";


const ChangePassword = ({formClose,updateTrigger,profileGet}) => {

  const [form] = Form.useForm(); // ----- Define Form

  useEffect(() => {
    form.resetFields()
  }, [updateTrigger])
  

  const addressChange = async (values) => {

    const allPasswordDetails = {
        email:values?.email,
        oldPassword:values?.oldPassword,
        newPassword:values?.newPassword
     }

    await baseRequest
      .post(`${APIURLS.CHANGE_PASSWORD_POST}`, allPasswordDetails)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        formClose()
        profileGet()
        console.log(response.data,'kkkkkk');
        return response.data;
      })
      .catch(function (error) {
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    console.log(values,'values');
    addressChange(values)
  };

  return (
    <div>
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
          <CustomPageTitle Heading={"Change Password"} />
          <CustomRow space={[24, 24]}>
            <Col span={24} md={24}>
              <CustomInput
                label={"Email"}
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                ]}
              />
            </Col>
            <Col span={24} md={24}>
              <CustomInputPassword label={"Old Password"} name={'oldPassword'}   rules={[
                  {
                    required: true,
                    message: "Please enter your Old password",
                  },
                ]}/>
            </Col>
            <Col span={24} md={24}>
              <CustomInputPassword label={"New Password"} name={'newPassword'}  rules={[
                  {
                    required: true,
                    message: "Please enter your New Password",
                  },
                ]} />
            </Col>
          </CustomRow>
          <Flex center aligncenter margin={"20px 0px"}>
            <Button.Primary text={"Submit"} htmlType={"submit"} />
          </Flex>
      </Form>
    </div>
  );
};

export default ChangePassword;
