import React from "react";
import { Col, Form, Input } from "antd";
import { CustomRow, Flex } from "@components/others";
import { Button, CustomInput, CustomInputPassword } from "@components/form";

const SignInForm = ({ handleSignIn }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    handleSignIn(values);
  };

  return (
    <Form
      onFinish={onFinish}
      labelCol={{
        span: 24,
      }}
      autoComplete="off"
      wrapperCol={{
        span: 24,
      }}
      form={form}
    >
      <CustomRow space={[24, 24]}>
        <Col span={24}>
          <CustomInput
            name="email"
            label={"Email"}
            placeholder={"Enter Email"}
            rules={[
              { required: true, message: "Please enter your email address" },
            ]}
          />
        </Col>

        <Col span={24}>
          <CustomInputPassword
            label="Password"
            name="password"
            placeholder="Enter User123!"
            rules={[
              {
                required: true,
                message: "Please enter a password ( User123! )",
              },
            ]}
          />
        </Col>
      </CustomRow>
      <Flex center={"true"} gap={"20px"} margin={"20px 0"}>
        <Button.PrimaryNow text={"SUBMIT"} htmlType="submit" />
      </Flex>
    </Form>
  );
};

export default SignInForm;
