import { CommonLoading, CustomModal, CustomRow, Flex } from "@components/others";
import { Col, Form, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { DeliveryAddressHead, OrderSum } from "./Style";
import { SvgIcons } from "@assets/images";
import { Button, CustomCheckBox, CustomInput } from "@components/form";
import Label from "@components/form/Label";
import baseRequest from "@request/request";
import { APIURLS } from "@request/apiUrls/urls";
import successHandler from "@request/successHandler";
import errorHandler from "@request/errorHandler";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentId, selectCurrentUser } from "@modules/Auth/authSlice";
// import { RadioStyle } from "@modules/UserProfile/Style";
import AddressList from "@modules/UserProfile/Partials/AddressList";
import styled from "styled-components";

const DeliveryAddressForm = ({ setCurrentStep }) => {

  const [form] = Form.useForm(); // ----- Define Form

  const navigate = useNavigate();  // Navigate

  const location = useLocation(); // Location

  const data = location.state;
  // console.log(data, 'data');

  const TotalData = location.state

  console.log(TotalData, 'TotalData');

  const totalData = useSelector((state) => state.cartpage.totalData);

  console.log(totalData, 'totalData');




  // Example: Accessing individual properties from the data object


  const tableData = data?.TotalData
  console.log(tableData, 'tableData');


  const [selectedOption, setSelectedOption] = useState("");
  const [addressstatus, setAddressStatus] = useState(false);
  const [addressDetail, setAddressDetails] = useState([]);

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [modalwith, setModalwith] = useState(0);

  // Trigger

  const [updateTrigger, setUpdateTrigger] = useState(0);

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

  const CurrentUser = useSelector(selectCurrentUser);

  const CurrentId = useSelector(selectCurrentId);

  // Status

  const statusTrueAddressDetails = addressDetail?.filter(
    (item) => item.status === true
  );

  console.log(statusTrueAddressDetails[0], "statusTrueAddressDetails");

  const addressData = statusTrueAddressDetails[0];

  console.log(addressData, "addressDataaddressData");


  useEffect(() => {
    if (addressData) {
      form.setFieldsValue(addressData);
      setSelectedOption(addressData?.addressType);
    }
  }, [addressData]);

  useEffect(() => {
    form.setFieldsValue({ userId: CurrentId });
  }, [CurrentId]);


  const ChangeStatus = (e) => {
    setAddressStatus(e.target.checked);
  };

  const backPage = () => {
    setCurrentStep(0);
    navigate("/MainPage")
  }

  const nextPage = () => {
    setCurrentStep(2);
    navigate("/MainPage", { state: { data, addressData, } });
  };

  // Change Address

  const changeAddress = () => {
    setModalwith(1000);
    setModalContent(
      <AddressList
        deliveryPageClose={handleOk}
        changeDeliveryAddress={changeDeliveryAddress}
      />
    );
    showModal();
  };

  const selectField = (e) => {
    setSelectedOption(e.target.value);
  };

  const changeDeliveryAddress = () => {
    {
      CurrentId === undefined || null ? navigate('/signin') :
        GetAddress();
    }
  };

  useEffect(() => {
    {
      CurrentId === undefined || null ? navigate('/signin') :
        GetAddress();
    }
  }, [CurrentId]);

  const GetAddress = () => {
    setLoading(true);
    try {
      baseRequest
        .get(`${APIURLS.ADDRESS_GET}${CurrentId}`)
        .then(function (response) {
          setAddressDetails(response.data);
          setLoading(false);
          console.log(response.data, "viewAddress");
        });
    } catch (error) {
      (error) => console.log("errrorrrrr");
      setLoading(false);
    }
  };

  const AddAddressPost = async (data) => {
    await baseRequest
      .post(APIURLS.ADDRESS_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        form.resetFields();
        GetAddress();
        // navigate("/payment");
        console.log(response, "jhjhjhj");
        return response.data;
      })
      .catch(function (error) {
        console.log(error, "error");
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    const NewValues = {
      ...values,
      addressType: selectedOption,
      status: addressstatus,
    };
    if (values.state && values.state.length > 0) {
      AddAddressPost(NewValues);
      console.log(NewValues, "NewValues");
    }
  };

  return (
    <DeliveryAddressHead>
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
        <div style={{ margin: "0px 20px" }}>
          <CustomRow>
            {/* <Col span={24} md={24}>
            <BreadcrumbTag
              separator=">"
              items={[
                {
                  title: "Home",
                },
                {
                  title: <p>cart</p>,
                },
              ]}
            />
          </Col> */}
            {/* <Col span={24} md={24}>
            <StepsHead>
              <Steps
                className="steps_main"
                progressDot
                responsive={false}
                items={[
                  {
                    title: "Cart",
                    status: "finish",
                  },
                  {
                    title: "Address",
                    status: "finish",
                  },
                  {
                    title: "Payment",
                    status: "In Progress",
                  },
                ]}
              />
            </StepsHead>
          </Col> */}
            <OrderSum span={24} md={24}>
              <Flex spacebetween={"true"}>
                <p>Order Summary</p>
              </Flex>
              <div className="total_amt">
                <Flex spacebetween={"true"}>
                  <p>Total Amount Payable</p>
                  <p>{totalData?.totalAmount}</p>
                </Flex>
                <Flex spacebetween={"true"}>
                  <p>Total Savings</p>
                  <p>{totalData?.discountAmount}</p>
                </Flex>
                <p></p>
              </div>
            </OrderSum>
          </CustomRow>
          <br />
          <Flex gap={"10px"}>
            <img src={SvgIcons.Warning} />
            <p>
              Select your address and delivery slot to know accurate delivery
              charges. You can save more by applying a voucher!
            </p>
          </Flex>
          <br />
          <CustomRow>
            <Col span={24} md={24}>
              <Flex spacebetween aligncenter>
                <h1>Delivery Address</h1>
                <Button.Primary
                  className={"ButtonProfile"}
                  text={"Change Address"}
                  onClick={changeAddress}
                />
              </Flex>
            </Col>
          </CustomRow>
        </div>
        <br />
        <CustomRow space={[24, 24]}>
          {/* <Col span={24} md={24} style={{ background: "#fdecda" }}>
          <h1 style={{ padding: "20px" }}>CONTACT DETAILS</h1>
        </Col>
        <Col span={24} offset={2} md={8} xs={22}>
          <CustomInput label={"Name"} name={"userName"} />
        </Col>
        <Col span={24} offset={2} md={8} xs={22}>
          <CustomInput
            label={"Phone"}
            name={"mobileNumber"}
            maxLength={10}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </Col> */}
          {loading ? (
            <div
              style={{
                height: "70vh",
                width: '100%',
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
              <Col span={24} md={24} style={{ background: "#fdecda" }}>
                <h1 style={{ padding: "20px" }}>ADDRESS</h1>
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput type={'number'} label={"Zip/Postal Code"} name={"postalCode"} rules={[
                  {
                    required: true,
                    message: "Please enter your Postal Code",
                  },
                ]} />
                <CustomInput name={"userId"} display={"none"} />
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput label={"Address"} name={"streetAddress"} rules={[
                  {
                    required: true,
                    message: "Please enter your Street Address",
                  },
                ]} />
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput label={"Locality / Town"} name={"city"} rules={[
                  {
                    required: true,
                    message: "Please enter your City",
                  },
                ]} />
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput
                  label={"District"}
                  name={"district"}
                  placeholder={"District"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your District",
                    },
                  ]}
                />
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput
                  label={"Country"}
                  name={"country"}
                  placeholder={"Country"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Country",
                    },
                  ]}
                />
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <CustomInput
                  label={"State/Province"}
                  name={"state"}
                  placeholder={"-"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your State",
                    },
                  ]}
                />
              </Col>
              <Col span={24} offset={2} md={8} xs={20}>
                <Flex center={true} column={true}>
                  <Label>Save address as</Label>
                  <br />

                  <Radio.Group
                    name={"addressType"}
                    onChange={selectField}
                    buttonStyle="solid"
                    // defaultValue="home"
                    style={{ display: "flex", gap: "30px" }} >

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

                    <Radio.Button   value={"work"}
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
                </Flex>
              </Col>
              <Col span={24} offset={2} md={8} xs={22}>
                <p>Make this as Default Address</p>
                <CustomCheckBox
                  onChange={ChangeStatus}
                  name={"status"}
                  rules={[]}
                />
              </Col>
            </>
          )}

          {/* <Col span={24} md={12}> */}

          {/* </Col> */}
        </CustomRow>
        <Flex center={true} wrap margin={"20px 0px"}>
          {/* {addressData.length > 0 ? ( */}
          <Button.PrimaryNow text={"Back"} onClick={backPage} />
          {addressData ? null : (
            <Button.PrimaryNow
              icon={<img src={SvgIcons.White_Add} alt="" />}
              text={"Add Address"}
              htmlType="submit"
            />
          )}


          {/* ) : null} */}

          {!addressData ? null : (
            <Button.PrimaryNow text={"Next"} onClick={nextPage} />

          )}

        </Flex>
        <CustomModal
          isVisible={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          width={modalwith}
          modalTitle={modalTitle}
          modalContent={modalContent}
        />
      </Form>
    </DeliveryAddressHead>
  );
};

export default DeliveryAddressForm;

// const StyledRadioButton = styled(Radio.Button)`
//   border-color: ${(props) => (props.checked ? 'orange' : 'gray')} !important;
//   background-color: ${(props) => (props.checked ? '#f9b34b' : 'white')} !important;
//   color: ${(props) => (props.checked ? 'white' : 'rgba(0, 0, 0, 0.85)')} !important;

//   &:hover {
//     border-color: blue !important;
//   }
// `;

// const RadioStyle = styled(Radio.Button)`

// background: #fdecda !important;
// border-radius: 50px !important;
// color: black !important;
// padding: 0px 30px !important;

// :where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:first-child {
//   border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'} !important;
//   border-radius: 50px !important;
//   padding: 0px 30px !important;
//   background: #fdecda !important;
//   color: black !important;
// }

// .ant-radio-button-wrapper:not(:first-child)::before {
//   display: none !important;
// }

// :where(.css-dev-only-do-not-override-mzwlov) .ant-radio-button-wrapper:last-child {
//   border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'} !important;
//   border-radius: 50px !important;
//   color: black !important;
//   background: #fdecda !important;
//   padding: 0px 30px !important;
// }

// .ant-radio-button-wrapper:not(:first-child)::before {
//   width: 0px !important;
//   border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'} !important;
//   /* border: 2px solid #1677ff; */
// }

// .ant-radio-button-wrapper:not(:first-child)::before {
//   width: 0px  !important;
// }




// `

export const RadioStyle = styled(Radio.Button)`

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:first-child {
  border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'} !important;
    border-radius: 50px !important;
    padding: 0px 30px !important;;
    background: #fdecda !important;
    color: black;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:not(:first-child)::before {
  display: none !important;;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-radio-button-wrapper:last-child {
  border: 2px solid ${({ checked }) => checked ? '#ef8f21' : '#fdecda'} !important;;
    border-radius: 50px !important;;
    color: black !important;;
    background: #fdecda !important;
    padding: 0px 30px !important;;

}


`
