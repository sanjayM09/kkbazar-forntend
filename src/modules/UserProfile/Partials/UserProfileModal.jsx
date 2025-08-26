import {
  Button,
  CustomDatePicker,
  CustomInput,
  CustomSelect,
} from "@components/form";
import { CustomRow, Flex } from "@components/others";
import { CustomPageTitle } from "@components/others/CustomPageTitle";
import { APIURLS } from "@request/apiUrls/urls";
import errorHandler from "@request/errorHandler";
import baseRequest from "@request/request";
import successHandler from "@request/successHandler";
import { Col, Form } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { EditProfileSec } from "../Style";

const UserProfileModal = ({
  Updaterecord,
  updateTrigger,
  formClose,
  profileGet,
}) => {
  console.log(Updaterecord, "UpdaterecordUpdaterecord");

  const [form] = Form.useForm(); // ----- Define Form

  // UseState

  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );

  // =========  Date functions ======

  const handleOnChangedate = (dob) => {
    setSelectedDate(dob);
  };

  // Gender Options

  const GenderOption = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];


  useEffect(() => {
    if (Updaterecord) {
      form.setFieldsValue(Updaterecord);
      const fromdatee = new Date(Updaterecord?.dateOfBirth);
      const dateFormat = "YYYY-MM-DD";
      const FrmDateee = dayjs(fromdatee).format(dateFormat);
      form.setFieldsValue({
        dateOfBirth: dayjs(FrmDateee),
      });
    }
  }, [Updaterecord, updateTrigger]);

  // ======= Edit  ======

  const EditProfile = async (data) => {
    await baseRequest
      .put(`${APIURLS.USERS_PUT}${Updaterecord?.userId}`, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        formClose();
        profileGet();

        return response.data;
      })
      .catch(function (error) {
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    const newValues = { ...values, dateOfBirth: selectedDate };
    EditProfile(newValues);
    console.log(newValues, "newValues");
  };

  return (
    <EditProfileSec>
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
        <div style={{ padding: "20px" }}>
          <CustomPageTitle Heading={"Edit Profile"} />
        </div>
        <CustomRow space={[24, 24]}>
          <Col span={24} md={12}>
            <p>First Name</p>
          </Col>
          <Col span={24} md={12}>
            <CustomInput name={"userName"} />
          </Col>

          <Col span={24} md={12}>
            <p>Email ID</p>
          </Col>

          <Col span={24} md={12}>
            <CustomInput name={"emailId"} disabled={Updaterecord} />
          </Col>

          <Col span={24} md={12}>
            <p>Phone Number</p>
          </Col>

          <Col span={24} md={12}>
            <CustomInput
              name={"mobileNumber"}
              maxLength={10}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Col>

          <Col span={24} md={12}>
            <p>Date of Birth</p>
          </Col>

          <Col span={24} md={12}>
            <CustomDatePicker
              name={"dateOfBirth"}
              placeholder={""}
              onChange={handleOnChangedate}
            />
          </Col>

          <Col span={24} md={12}>
            <p>Gender</p>
          </Col>

          <Col span={24} md={12}>
            <CustomSelect
              name={"gender"}
              showSearch={true}
              options={GenderOption}
            />
          </Col>

          {/* <Col span={24} md={12}>
            <p>Password</p>
          </Col>

          <Col span={24} md={12}>
            <CustomInputPassword name={"password"} />
          </Col>

          <Col span={24} md={12}>
            <p>Confirm Password</p>
          </Col>

          <Col span={24} md={12}>
            <CustomInputPassword name={"confirmPassword"} />
          </Col> */}
        </CustomRow>
        <Flex center={"true"} margin={"20px 0"}>
          <Button.Primary className={'ButtonProfile'} text={"Update"} htmlType={"submit"} />
        </Flex>
      </Form>
    </EditProfileSec>
  );
};

export default UserProfileModal;
