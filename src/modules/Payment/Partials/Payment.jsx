import { SvgIcons } from "@assets/images";
import { Button } from "@components/form";
import {
  CommonLoading,
  CustomModal,
  CustomRow,
  Flex,
} from "@components/others";
import { Col, Form } from "antd";
import React, { useEffect, useState } from "react";
import {
  CardsStyle,
  OrderSum,
  PaymentCard,
  PaymentForm,
  RadioContainer,
  RadioStyled,
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import AddressList from "@modules/UserProfile/Partials/AddressList";
import EmptyAddressPage from "./EmptyAddressPage";
import { GetOrderViewProductSectn } from "@modules/OrderDetails/OrderDetailsSlice";
import { GetAllCart } from "@modules/AddCart/CartSlice";
import errorHandler from "@request/errorHandler";

const Payment = ({ setCurrentStep }) => {

  const [form] = Form.useForm(); // ----- Define Form

  const dispatch = useDispatch();

  const [successMessage, setSuccessMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [isbuttonload, setIsbuttonload] = useState(false);

  // Location

  const location = useLocation();

  // Navigate

  const navigate = useNavigate();

  const CurrentId = useSelector(selectCurrentId);

  // UseState

  const [addressDetail, setAddressDetails] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  // Trigger

  const [updateTrigger, setUpdateTrigger] = useState(0);

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const data = location.state;

  console.log(data, 'ghsfdf');

  const TotalProductDetail = location.state;

  console.log(TotalProductDetail, "datatotal");

  const totalData = useSelector((state) => state.cartpage.totalData);


  // const AmountDATA = tableData?.data?.data

  const paymentData = data?.data?.TotalData
  // ?.data?.data?.TotalData;


  console.log(paymentData, "paymentData");

  // console.log(AmountDATA,'AmountDATA');

  const NewAddress = () => {
    navigate("/deliveryaddress");
  };

  const statusTrueAddressDetails = addressDetail?.filter((item) => item.status === true);

  const addressData = statusTrueAddressDetails[0];

  console.log(addressData, "addressData");

  const paymentChangeAddress = () => {
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
    setisLoading(true);
    try {
      baseRequest
        .get(`${APIURLS.ADDRESS_GET}${CurrentId}`)
        .then(function (response) {
          setAddressDetails(response.data);
          setisLoading(false);
          console.log(response.data, "viewAddress");
        });
    } catch (error) {
      (error) => console.log("errrorrrrr");
      setisLoading(false);
    }
  };

  const changeAddress = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(1000);
    setModalContent(
      <AddressList
        PaymentClose={handleOk}
        paymentChangeAddress={paymentChangeAddress}
      />
    );
    showModal();
  };

  const backPage = () => {
    setCurrentStep(1);
    navigate("/MainPage", { state: { data } });
  };


  const handlePaymentMethodChange = (e) => {
    const selectedValue = e.target.value;
    setPaymentMethod(selectedValue);
  };

  console.log(paymentMethod, 'paymentMethod456');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // const MainRadioStyled = styled.div`
  // background: ${({ isSelected }) => isSelected ? '#fdecda' : '#fdecda'};
  //   border-radius: 20px;
  //   transition:  0.3s ease;
  // `


  const onFinish = (value) => {
    const totalAmt = 1;
    console.log(totalAmt, "sasaww");
  };


  // Product details SAve function -----------



  const ProductSavePost = (data) => {
    setIsbuttonload(true);
    try {
      baseRequest.post(`${APIURLS.PRODUCT_CONFIRM_PAYMENT}`, data)
        .then(function (response) {
          console.log(response.data, "viewAddress");
          dispatch(GetOrderViewProductSectn())
          dispatch(GetAllCart(CurrentId));
          setIsbuttonload(false);
          if (paymentMethod === 'cod') {
            navigate("/OrderProductList");
          } else {
            console.log('check');
          }
        });
    } catch (error) {
      setIsbuttonload(false);
      console.log(error, "errrorrrrr");
      return errorHandler(error)
    }
  };

  const NewValues = () => {
    const Storess = TotalProductDetail?.data?.data
    const StoresLenth = TotalProductDetail?.data?.data?.length
    const TotalAmnt = totalData?.totalAmount
    const AddressId = TotalProductDetail?.addressData?.userAddressId
    const PaymntType = paymentMethod === 'onlinepay' ? 'Online' : 'Cash on delivery'

    const prodictDetail = {
      userId: CurrentId,
      totalItems: StoresLenth,
      paymentType: PaymntType,
      totalAmount: TotalAmnt,
      orderItemList: Storess,
      userAddressId: AddressId,
    }
    ProductSavePost(prodictDetail)
    console.log(prodictDetail, 'prodictDetailpost');
  }


  // Razor pay function -------------

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalData?.totalAmount === "") {
      alert("please give amount");
    } else {
      var options = {
        key: "rzp_test_a2SVIUUmTul6ji",
        key_secret: "kZ4YyxCAUpsP8u54LN6449wU",
        amount: totalData?.totalAmount * 100 || 0,
        currency: "INR",
        name: "Justclickin",
        image: "https://dev.justclickin.in/assets/Logo-b753b6ac.svg",
        description: "for testing purpose",
        handler: function (response) {
          console.log("Payment ID: " + response.razorpay_payment_id);
          alert(
            "Payment successful. Payment ID: " + response.razorpay_payment_id
          );
          setSuccessMessage(
            "Payment successful. Payment ID state: " +
            response.razorpay_payment_id
          );

          NewValues();
        },
        prefill: {
          name: "ideaux",
          email: "dd@gmail.com",
          contact: "7397018115",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#ef8f21",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };



  const handleEmptysubmit = () => {
    const Message = 'Please Select Payment Type'
    alert(Message)
  }

  console.log(successMessage, 'successMessage');


  useEffect(() => {
    if (successMessage) {
      navigate("/OrderProductList");
      // NewValues()
      console.log('callpost');
    }
  }, [successMessage]);

  return (
    <PaymentForm>
      <Form
        form={form}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        // onFinish={onFinish}
        autoComplete="off"
      >
        <CustomRow>
          <OrderSum span={24} md={24}>
            <Flex spacebetween={"true"}>
              <p>Order Summary</p>
              {/* <p>Estimated delivery by 19 Nov 2023</p> */}
            </Flex>
            <div className="total_amt">
              <Flex spacebetween={"true"}>
                <p>Total Order Amount</p>
                <p>{totalData?.totalAmount}</p>
              </Flex>
              <Flex spacebetween={"true"}>
                <p>Sub Total </p>
                <p>{totalData?.mrp}</p>
              </Flex>
              <Flex spacebetween={"true"}>
                <p>Savings</p>
                <p>{totalData?.discountAmount}</p>
              </Flex>
              <Flex>
                <p>Shipping Cost</p>
              </Flex>
              <Flex>
                <p>Tax</p>
              </Flex>
            </div>
          </OrderSum>
        </CustomRow>
        <br />
        <CustomRow>
          <Col span={12} md={12} xs={12}>
            <h1>Delivery Address</h1>
          </Col>
          <Col span={12} md={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "15px",
              }}
              onClick={changeAddress}
            >
              <p style={{ cursor: "pointer" }}>Change Address</p>
              <img
                style={{ cursor: "pointer" }}
                src={SvgIcons.Add}
                loading=""
              />
            </div>
          </Col>
        </CustomRow>
        <br />
        <CustomRow>
          <Col span={24} md={24}>
            {isLoading ? (
              <div
                style={{
                  height: "30vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>
                  <CommonLoading />
                </h1>
              </div>
            ) : addressDetail.length === 0 ? (
              <>
                <CardsStyle>
                  <EmptyAddressPage />
                </CardsStyle>
              </>
            ) : (
              <CardsStyle>
                {/* {addressDetail.length === 0 ? (<EmptyAddressPage />) : null} */}
                <p>{addressData?.streetAddress}</p>
                <p>
                  {addressData?.state}, {addressData?.country}
                </p>
                <p>{addressData?.postalCode}</p>
              </CardsStyle>
            )}
          </Col>
        </CustomRow><br />

        <h1>Payment Type</h1>
        <br />
        <PaymentCard>
          <RadioContainer
            onChange={handlePaymentMethodChange}
            value={paymentMethod} className="onlinepayresponse"
            style={{ padding: '10px', borderColor: '#ef8f21', boxSizing: 'border-box' }}
          >
            {/* <RadioStyled
              style={{ width: "100%", padding: '20px', gap: '10px' }}
              selected={paymentMethod === "onlinepay"}
              value="onlinepay"
            > Online Pay
            </RadioStyled> */}
            <RadioStyled value="cod" selected={paymentMethod === "cod"}
              style={{ width: "100%", padding: '20px', gap: '10px' }}>
              Cash On Delivery
            </RadioStyled>

          </RadioContainer>
        </PaymentCard>



        <Flex wrap center={"true"} margin={"20px 0px"}>
          <Button.PrimaryNow text={"Back"} onClick={backPage} />
          {paymentMethod === 'onlinepay' ?
            <Button.PrimaryNow text={"Pay online"} onClick={handleSubmit} /> : paymentMethod === 'cod' ?
              <Button.PrimaryNow text={"Pay COD"} onClick={NewValues} loading={isbuttonload} /> :
              <Button.PrimaryNow text={"Choose pay type"} loading={isbuttonload} onClick={handleEmptysubmit} />
          }
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
    </PaymentForm>
  );
};

export default Payment;
