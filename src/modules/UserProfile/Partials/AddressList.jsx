import { Button, CustomInput } from "@components/form";
import { CommonLoading, CustomModal, CustomRow, Flex } from "@components/others";
import { selectCurrentId } from "@modules/Auth/authSlice";
import EmptyAddressPage from "@modules/Payment/Partials/EmptyAddressPage";
import { APIURLS } from "@request/apiUrls/urls";
import errorHandler from "@request/errorHandler";
import baseRequest from "@request/request";
import successHandler from "@request/successHandler";
import { Col, Form } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddAddressForm from "./AddAddressForm";
import { AddressData, AddressHead } from "../Style";



const AddressList = ({
  formClose,
  PaymentClose,
  paymentChangeAddress,
  addressGet,
  deliveryPageClose,
  changeDeliveryAddress
  
}) => {

  const [form] = Form.useForm(); // ----- Define Form

  const CurrentId = useSelector(selectCurrentId);

  // UseState

  const [isLoading, setIsLoading] = useState(false);
  const [addressList, setAddressLists] = useState([]);
  console.log(addressList, "addressList");
  const [clickedAddress, setClickedAddress] = useState(null);
  console.log(clickedAddress, "clickedAddress");

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

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


  const addressDetails = addressList.map((item) => ({
    label: item.userAddressId,
    userAddressId: item.userAddressId,
  }));

  useEffect(() => {
    // Set initial form values when addressDetails change
    form.setFieldsValue({
      userAddressId: addressDetails.map((address) => address.userAddressId),
    });
  }, [addressDetails, form]);

  console.log(addressDetails, "addressDetails");

  const ChooseAddressGet = () => {
    GetAddress()
  }

  useEffect(() => {
    GetAddress();
  }, []);

  const GetAddress = () => {
    setIsLoading(true);
    try {
      baseRequest
        .get(`${APIURLS.ADDRESS_GET}${CurrentId}`)
        .then(function (response) {
          setAddressLists(response.data);
          setIsLoading(false);

          return response.data;
        });
    } catch (error) {
      setIsLoading(false);

      console.log("error");
    }
  };

  // Add Address

  const AddAddress = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(1000);
    setModalContent(
      <AddAddressForm PaymentClose={PaymentClose} formCloseNew={formClose} changeaddressGet={addressGet} paymentAddressClose={handleOk} paymentChangeAddress={paymentChangeAddress} ChooseAddressGet={ChooseAddressGet} />
    );
    showModal();
  };


  const handleAddressClick = (index) => {
    setClickedAddress(index);
    const updatedAddressList = addressList.map((address, idx) => ({
      ...address,
      status: idx === index,
    }));

    setAddressLists(updatedAddressList);

    const clickedAddressData = addressList[index];
    const userAddressId = clickedAddressData
      ? clickedAddressData.userAddressId
      : null;

    // Construct field name dynamically based on index
    const fieldName = `userAddressId-${index}`;
    // Set userAddressId for the clicked address only
    form.setFieldsValue({ [fieldName]: userAddressId });

    // Reset userAddressId for other addresses
    addressList.forEach((_, idx) => {
      if (idx !== index) {
        const otherFieldName = `userAddressId-${idx}`;
        form.setFieldsValue({ [otherFieldName]: null });
      }
    });
  };
  

  const ChangeAddressList = async (NewValues, data) => {
    console.log(NewValues, "NewValues");
    setIsLoading(true);

    const allAddressDetails = {
      status: NewValues?.status,
    };
    console.log(allAddressDetails, "allAddressDetails");
    await baseRequest
      .put(
        `${APIURLS.ADDRESS_PUT}${NewValues?.userAddressId}`,
        allAddressDetails
      )
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
        if (PaymentClose) {
          PaymentClose();
        }
        if (paymentChangeAddress) {
          paymentChangeAddress();
        }
        if(deliveryPageClose){
          deliveryPageClose()
        }
        if(changeDeliveryAddress){
          changeDeliveryAddress()
        }
        setIsLoading(false);

        console.log(response, "kkkkk");
        return response.data;
      })
      .catch(function (error) {
        setIsLoading(false);

        console.log(error, "error");
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    const clickedAddressData = addressList[clickedAddress];
    if (clickedAddressData) {
      const NewValues = {
        userAddressId: clickedAddressData.userAddressId,
        status: true,
      };
      ChangeAddressList(NewValues);
      console.log(NewValues, "NewValues");
    } else {
      console.error("No address is clicked.");
    }
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
        <Flex spacebetween aligncenter>
          <h1>Change Address</h1>
          {addressList.length === 0 ? (
            <Button.Primary onClick={AddAddress} text={"Add Address"} />
           ) : null} 
        </Flex>

        {isLoading ? (
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
        ) : addressList.length === 0 ? (
          <EmptyAddressPage />
        ) : (
          <CustomRow space={[24, 24]}>
            {addressList.map((item, index) => {
              return (
                <Col span={24} sm={12} md={12} lg={8} key={item.key}>
                  <AddressData
                    clicked={index === clickedAddress}
                    onClick={() => handleAddressClick(index)}
                  >
                    <p>{item?.streetAddress}</p>
                    <p>{item?.city}</p>
                    <p>{item?.state}</p>
                    <p>{item?.district}</p>
                    <p>{item?.country}</p>
                    <p>{item?.postalCode}</p>
                    <CustomInput
                      name={`userAddressId-${index}`}
                      display={"none"}
                    />
                  </AddressData>
                </Col>
              );
            })}
          </CustomRow>
        )}

        {addressList.length === 0 ? null : (
          <Flex center margin={"20px 0px"}>
            <Button.Primary
              className={"ButtonProfile"}
              text={"Submit"}
              htmlType={"submit"}
            />
          </Flex>
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

export default AddressList;
