import { SvgIcons } from "@assets/images";
import {
  Button,
  CustomDatePicker,
  CustomInput,
  CustomInputPassword,
  CustomSelect,
} from "@components/form";
import SocialButton from "@components/form/CustomSocialButton";
import { CustomRow, Flex } from "@components/others";
import { CustomPageTitle } from "@components/others/CustomPageTitle";
import { Col, Form } from "antd";
import React, { useState } from "react";
import { GoogleBtn, LoginContent, MainForm } from "./RegisterStyle";
import { APIURLS } from "@request/apiUrls/urls";
import successHandler from "@request/successHandler";
import errorHandler from "@request/errorHandler";
import dayjs from "dayjs";
import baseRequest from "@request/request";
import { useNavigate } from "react-router-dom";
import { BreadCrumbStyles, LogoHeader } from "./UserSigninStyle";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm(); // ----- Define Form

  // useState

  const [dates, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  // Gender Options

  const GenderOption = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  // =========  Date functions ======

  const onDateChange = (date) => {
    setDate(date);
  };

  // Navigate To Login

  const navigateToLogin = () => {
    navigate("/signin");
  };

  const AddRegisterPost = async (data) => {
    await baseRequest
      .post(APIURLS.REGISTER_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        form.resetFields();
        console.log(response, "jhjhjhj");
        return response.data;
      })
      .catch(function (error) {
        console.log(error, "error");
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    const NewValues = { ...values, dateOfBirth: dates };
    // console.log(NewValues, "NewValues");
    AddRegisterPost(NewValues);
  };

  return (
    <>
      <CustomRow>
        <Col span={24} md={24}>
          <LogoHeader>
            <a style={{cursor:'pointer'}} href="/">
              <img src={SvgIcons.Logo} />
            </a>
            <BreadCrumbStyles
              separator=">"
              items={[
                {
                  title: <a href="/">Home</a>,
                },
                {
                  title: <p>my order</p>,
                },
              ]}
            />
          </LogoHeader>
          <div style={{ padding: "40px" }}>
            <CustomPageTitle Heading={"Register on Justclickin"} />
          </div>
        </Col>
      </CustomRow>
      <MainForm>
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
          <CustomRow space={[24, 24]}>
            <Col span={12} md={6} xs={10}>
              <p>User Name</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInput name={"userName"} />
            </Col>
            <Col span={12} md={4} xs={10}>
              <p>Email Address</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInput
                name={"emailId"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                ]}
              />
            </Col>
            <Col span={12} md={6} xs={10}>
              <p>Phone Number</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInput
                name={"mobileNumber"}
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Mobile Number",
                  },
                ]}
              />
            </Col>
            <Col span={12} md={4} xs={10}>
              <p>Alternate Number</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInput
                name={"alternateMobileNumber"}
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Col>
            <Col span={12} md={6} xs={10}>
              <p>Password</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInputPassword
                name={"password"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Password",
                  },
                ]}
              />
            </Col>
            <Col span={12} md={4} xs={10}>
              <p>Confirm Password</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomInputPassword
                name={"confirmPassword"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Confirm Password",
                  },
                ]}
              />
            </Col>
            <Col span={12} md={6} xs={10}>
              <p>Date Of Birth</p>
            </Col>

            <Col span={12} md={6} xs={14}>
              <CustomDatePicker name={"dateOfBirth"} onChange={onDateChange} />
            </Col>
            <Col span={12} md={4} xs={10}>
              <p>Gender</p>
            </Col>
            <Col span={12} md={6} xs={14}>
              <CustomSelect
                name={"gender"}
                showSearch={true}
                options={GenderOption}
              />
            </Col>
          </CustomRow>
          <Flex center={"true"} margin={"20px 0"}>
            <Button.PrimaryNow text={"submit"} htmlType="submit" />
          </Flex>
          <LoginContent>
            <p>
              Aldready Have an account?&nbsp;
              <span onClick={navigateToLogin}>User Login</span>
            </p>

            {/* <h3>OR</h3> */}
          </LoginContent>
          {/* <div className="googlebtn_head">
            <GoogleBtn>
              <SocialButton.Google
                icon={<img src={SvgIcons.Google_btn} alt="" />}
                text={"Continue With Google"}
              />
              <div className="vertical_line"></div>
        <SocialButton.FaceBook icon={<img src={SvgIcons.FB} alt="" />}    text={'Continue With Facebook'} htmlType="submit" />
            </GoogleBtn>
          </div> */}
        </Form>
      </MainForm>
    </>
  );
};

export default RegisterForm;
