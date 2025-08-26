import { Button, CustomCheckBox, CustomInput } from "@components/form";
import {
  CommonLoading,
  CustomModal,
  CustomRow,
  Flex,
} from "@components/others";
import { CustomPageTitle } from "@components/others/CustomPageTitle";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";
import successHandler from "@request/successHandler";
import { Col, Form, Radio } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import AddressList from "./AddressList";
import { useEffect } from "react";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { useSelector } from "react-redux";
import { AddressHead, RadioStyle } from "../Style";

const AddAddressForm = ({
  formClose,
  updateTrigger,
  addressGet,
  paymentAddressClose,
  paymentChangeAddress,
  ChooseAddressGet,
  changeaddressGet,
  formCloseNew,
  PaymentClose,
}) => {
  const [form] = Form.useForm(); // ----- Define Form

  const CurrentId = useSelector(selectCurrentId);

  const [selectedOption, setSelectedOption] = useState("home");
  const [addressData, setAddressData] = useState([]);

  const [addressstatus, setAddressStatus] = useState(false);

  // Trigger

  const [addressTrigger, setAddressTrigger] = useState(0);

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [modalwith, setModalwith] = useState(0);

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

  // ===== Modal Functions End =====

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({ userId: CurrentId });
  }, [updateTrigger, CurrentId]);


  const selectField = (e) => {
    setSelectedOption(e.target.value);
  };

  const ChangeStatus = (e) => {
    setAddressStatus(e.target.checked);
  };

  const AddAddress = async (data) => {
    setLoading(true);
    await baseRequest
      .post(APIURLS.ADDRESS_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        if (formClose) {
          formClose();
        }
        if (addressGet) {
          addressGet();
        }
        if (paymentAddressClose) {
          paymentAddressClose();
        }
        if (paymentChangeAddress) {
          paymentChangeAddress();
        }
        if (ChooseAddressGet) {
          ChooseAddressGet();
        }
        if (changeaddressGet) {
          changeaddressGet();
        }
        if (formCloseNew) {
          formCloseNew();
        }
        if (PaymentClose) {
          PaymentClose();
        }
        setLoading(false);
        form.resetFields();
        setAddressData(response.data);

        return response.data;
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error.response, "add error");
      });
  };

  const onFinish = (values) => {
    const NewValues = {
      ...values,
      addressType: selectedOption,
      status: addressstatus,
    };
    AddAddress(NewValues);
    console.log(NewValues, "NewValues");
  };

  return (
    <AddressHead>
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
        <CustomRow>
          <Col span={24} md={24}>
            <div style={{ padding: "20px" }}>
              <Flex spacebetween>
                <CustomPageTitle Heading={"Add Address"} />
              </Flex>
            </div>
          </Col>
        </CustomRow>
        {loading ? (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              <CommonLoading />
            </h1>
          </div>
        ) : (
          <>
            <CustomRow space={[24, 24]}>
              <Col span={24} md={12}>
                <p>Street Address</p>
              </Col>
              <Col span={24} md={12}>
                <CustomInput name={"streetAddress"} />
                <CustomInput name={"userId"} display={"none"} />
              </Col>

              <Col span={24} md={12}>
                <p>City</p>
              </Col>

              <Col span={24} md={12}>
                <CustomInput name={"city"} />
              </Col>

              <Col span={24} md={12}>
                <p>State/Province</p>
              </Col>

              <Col span={24} md={12}>
                <CustomInput name={"state"} />
              </Col>

              <Col span={24} md={12}>
                <p>District</p>
              </Col>

              <Col span={24} md={12}>
                <CustomInput name={"district"} />
              </Col>

              <Col span={24} md={12}>
                <p>Zip/Postal Code</p>
              </Col>

              <Col span={24} md={12}>
                <CustomInput type={'number'} name={"postalCode"} />
              </Col>

              <Col span={24} md={12}>
                <p>Country</p>
              </Col>

              <Col span={24} md={12}>
                <CustomInput name={"country"} />
              </Col>

              <Col span={24} md={12}>
                <p>Save address as</p>
              </Col>

              <Col span={24} md={12}>
                <Radio.Group
                  name={"addressType"}
                  onChange={selectField}
                  defaultValue="home"
                  style={{ display: "flex", gap: "30px" }}
                >
                  <Radio.Button
                    value={"home"}
                    checked={selectedOption === "home"}
                    style={{
                      borderColor: selectedOption === 'home' ? '#f9b34b' : '#d9d9d9',
                      backgroundColor: selectedOption === 'home' ? '#f9b34b' : '#fdecda',
                      color: selectedOption === 'home' ? 'white' : 'rgba(0, 0, 0, 0.85)'
                    }}
                  >
                    Home
                  </Radio.Button>
                  <Radio.Button
                    value={"work"}
                    checked={selectedOption === "work"}
                    style={{
                      borderColor: selectedOption === 'work' ? '#f9b34b' : '#d9d9d9',
                      backgroundColor: selectedOption === 'work' ? '#f9b34b' : '#fdecda',
                      color: selectedOption === 'work' ? 'white' : 'rgba(0, 0, 0, 0.85)'
                    }}
                  >
                    Work
                  </Radio.Button>
                </Radio.Group>
              </Col>

              <Col span={24} md={12}>
                <p>Make this as Default Address</p>
              </Col>

              <Col span={24} md={12}>
                <CustomCheckBox
                  onChange={ChangeStatus}
                  name={"status"}
                  rules={[]}
                />
              </Col>
            </CustomRow>
            <Flex center={"true"} margin={"20px 0"}>
              <Button.Primary
                className={"ButtonProfile"}
                text={"Add"}
                htmlType={"submit"}
              />
            </Flex>
          </>
        )}

        <CustomModal
          isVisible={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          width={modalwith}
          modalTitle={modalTitle}
          modalContent={modalContent}
        />
      </Form>
    </AddressHead>
  );
};

export default AddAddressForm;
