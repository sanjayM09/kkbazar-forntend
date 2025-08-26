import { SvgIcons } from "@assets/images";
import {
  CommonLoading,
  CustomModal,
  CustomRow,
  Flex,
} from "@components/others";
import { Col } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "@components/form";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  selectCurrentId,
} from "@modules/Auth/authSlice";
import baseRequest from "@request/request";
import { APIURLS } from "@request/apiUrls/urls";
import UserProfileModal from "./UserProfileModal";
import { GetUsers } from "@modules/Auth/Partials/UsersSlice";
import AddAddressForm from "./AddAddressForm";
import { ProfileCard, ProfileDetails } from "../Style";
import { useNavigate } from "react-router-dom";
import AddressList from "./AddressList";
import ChangePassword from "./ChangePassword";
import { BreadCrumbStyles, LogoHeader } from "@modules/Auth/Partials/UserSigninStyle";

const UserProfile = ({ Updaterecord }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.token !== null);
  console.log(isLoggedIn,'isLoggedIn');

  useEffect(() => {
   if(!isLoggedIn){
    navigate('/signin')
   }
  }, [])
  

  // UseState

  const [userDetail, setUserDetails] = useState([]);
  // console.log(userDetail,'userDetail');
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

  // Current ID

  const CurrentId = useSelector(selectCurrentId);

  const profileGet = () => {
    getProfile();
  };

  const addressGet = () => {
    GetAddress();
  };

  // Change Address

  const changeAddress = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(1000);
    setModalContent(
      <AddressList formClose={handleOk} addressGet={addressGet} />
    );
    showModal();
  };

  // Add Address

  const AddAddress = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(1000);
    setModalContent(
      <AddAddressForm
        formClose={handleOk}
        updateTrigger={updateTrigger}
        addressGet={addressGet}
      />
    );
    showModal();
  };

  // Edit Profile

  const editProfile = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(1000);
    setModalContent(
      <UserProfileModal
        Updaterecord={userDetail}
        updateTrigger={updateTrigger}
        formClose={handleOk}
        profileGet={profileGet}
      />
    );
    showModal();
  };

  //Change Password

  const handleChangePassword = () => {
    setUpdateTrigger(updateTrigger + 1);
    setModalwith(500);
    setModalContent(
      <ChangePassword  
      formClose={handleOk}
        updateTrigger={updateTrigger}
        profileGet={profileGet}
      />
    );
    showModal();
  }

  // Logout

  const Signout = () => {
    dispatch(logOut());
    navigate("/");
  };

  // Status

  const statusDetails = addressDetail.map((item) => ({
    label: item.status,
    status: item.status,
  }));

  const hasTrueStatus = statusDetails.some((item) => item.status === true);

  const statusTrueAddressDetails = addressDetail.filter(
    (item) => item.status === true
  );

  console.log(statusTrueAddressDetails[0], "statusTrueAddressDetails");

  const addressData = statusTrueAddressDetails[0];
  console.log(addressData,'addressData');

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  useEffect(() => {
    getProfile();
    GetAddress();
  }, []);

  const getProfile = async () => {
    setLoading(true);
    try {
      const user = "userDetails";
      const response = await baseRequest.get(
        `${APIURLS.USERS_GET}/${CurrentId}`,
        {
          params: { user },
        }
      );
      setUserDetails(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAddress = () => {
    try {
      baseRequest
        .get(`${APIURLS.ADDRESS_GET}${CurrentId}`)
        .then(function (response) {
          setAddressDetails(response.data);
          console.log(response.data, "viewAddress");
        });
    } catch (error) {
      (error) => console.log("errrorrrrr");
    }
  };

  const normalPass = (password) => {
    if (typeof password !== "string" || password.length <= 0) {
      return "";
    }
    const hiddenPart = "*".repeat(password.length);
    return hiddenPart;
  };

  const password = userDetail?.password;
  const confirmPassword = userDetail?.confirmPassword;

  const hidepassword = normalPass(password);
  const hidepasswordone = normalPass(confirmPassword);

  return (
    <>
      {Updaterecord ? null : (
        <>
          <CustomRow>
            <Col span={24} md={24}>
              <LogoHeader>
                <a href="/">
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
            </Col>
          </CustomRow>

          {/* <CustomRow>
              <Col span={24} md={24}>
                <ProfileHead>
                  <CustomRow>
                    <Col span={10} md={6}>
                      <Flex center>
                        <img src={SvgIcons.Profile} alt="Profile" />
                      </Flex>
                    </Col>
                    <Col span={14} md={6}>
                      <h1>{CurrentUser}</h1>
                      <p>user id : {CurrentId}</p>
                      <Button.Primary    text={'Change Profile'} />
                    </Col>
                    <Col span={12} md={12}>
                      <div className="shopping_bag">
                        <img src={SvgIcons.Shopping_Bags} alt="loading" />
                      </div>
                    </Col>
                  </CustomRow>
                </ProfileHead>
              </Col>
            </CustomRow> */}
        </>
      )}
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
        <CustomRow>
          <Col span={24} md={24}>
            <ProfileDetails>
              <Flex spacebetween aligncenter>
                <h1 style={{ fontSize: "28px" }}>Profile</h1>
                {Updaterecord ? null : (
                  <Button.Primary
                    className={"ButtonProfile"}
                    onClick={editProfile}
                    text={"Edit Profile"}
                  />
                )}
              </Flex>

              <ProfileCard>
                <div className="details">
                  <CustomRow space={[24, 24]}>
                    <Col span={8} md={8} xs={10}>
                      <p>First Name</p>
                    </Col>
                    <Col span={2} md={2} xs={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8} xs={10}>
                      <p>{userDetail?.userName} </p>
                    </Col>
                    {/* <Col span={8} md={6}></Col> */}

                    {/* <Col span={8} md={8}> <p>Last Name</p> </Col>
                  <Col span={2} md={2}><p>:</p></Col>
                  <Col span={8} md={8} ><p> </p></Col> */}

                    <Col span={8} md={8} xs={10}>
                      <p>Email Adddress</p>
                    </Col>
                    <Col span={2} md={2} xs={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8} xs={10}>
                      <p>{userDetail?.emailId}</p>
                    </Col>

                    <Col span={8} md={8} xs={10}>
                      <p>Phone Number</p>
                    </Col>
                    <Col span={2} md={2} xs={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8} xs={10}>
                      <p>{userDetail?.mobileNumber}</p>
                    </Col>

                    <Col span={8} md={8} xs={10}>
                      <p>Date Of Birth</p>
                    </Col>
                    <Col span={2} md={2} xs={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8} xs={10}>
                      <p>{userDetail?.dateOfBirth}</p>
                    </Col>

                    <Col span={8} md={8} xs={10}>
                      <p>Gender</p>
                    </Col>
                    <Col span={2} md={2} xs={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8} xs={10}>
                      <p>{userDetail?.gender}</p>
                    </Col>

                    <Col span={24} md={12}>
                        <a onClick={handleChangePassword}>Change Password</a>
                    </Col>

                    {/* <Col span={8} md={8}>
                      <p>Password</p>
                    </Col>
                    <Col span={2} md={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={8}>
                      <p>{hidepassword}</p>
                    </Col>
  
                    <Col span={8} md={8}>
                      <p>Confirm Password</p>
                    </Col>
                    <Col span={2} md={2}>
                      <p>:</p>
                    </Col>
                    <Col span={8} md={4}>
                      <p>{hidepasswordone}</p>
                    </Col> */}
                    {/* {Updaterecord ? null : (
                      <Col span={24} md={24}>
                        <Flex end>
                          <Button.Primary
                            className={"ButtonProfile"}
                            text={"Delete Now"}
                          />
                        </Flex>
                      </Col>
                    )} */}
                  </CustomRow>
                </div>
              </ProfileCard>
              <br />
              {Updaterecord ? (
                <Flex center>
                  <Button.Primary className={"ButtonProfile"} text={"Submit"} />
                </Flex>
              ) : null}
              <br />

              {Updaterecord ? null : (
                <>
                  <CustomRow space={[24, 24]}>
                    <Col md={12}>
                      <h1>Address (Shipping and Billing)</h1>
                    </Col>
                    <Col md={12}>
                      <div className="responsive_btn">
                        <Button.Primary
                          className={"ButtonProfile"}
                          text={"Change Address"}
                          onClick={changeAddress}
                        />
                        <Button.Primary
                          className={"ButtonProfile"}
                          onClick={AddAddress}
                          text={"Add Address"}
                        />
                      </div>
                    </Col>
                  </CustomRow>
                  {hasTrueStatus ? (
                    <>
                      <ProfileCard>
                        <div className="details">
                          <CustomRow space={[12, 12]}>
                            <Col span={8} md={8} xs={10}>
                              <p>Street Address</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.streetAddress}</p>
                            </Col>

                            <Col span={8} md={8} xs={10}>
                              <p>City</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.city} </p>
                            </Col>

                            <Col span={8} md={8} xs={10}>
                              <p>State/Province</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.state}</p>
                            </Col>

                            <Col span={8} md={8} xs={10}>
                              <p>District</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.district}</p>
                            </Col>

                            <Col span={8} md={8} xs={10}>
                              <p>Zip/Postal Code</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.postalCode}</p>
                            </Col>

                            <Col span={8} md={8} xs={10}>
                              <p>Country</p>
                            </Col>
                            <Col span={2} md={2} xs={2}>
                              <p>:</p>
                            </Col>
                            <Col span={8} md={8} xs={10}>
                              <p>{addressData?.country}</p>
                            </Col>
                          </CustomRow>
                        </div>
                      </ProfileCard>
                    </>
                  ) : null}

                  <br />
                  <Flex center={true}>
                    <Button.Primary
                      className={"ButtonProfile"}
                      text={"Logout"}
                      onClick={Signout}
                    />
                  </Flex>
                </>
              )}
            </ProfileDetails>
          </Col>
          <CustomModal
            isVisible={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            width={modalwith}
            modalTitle={modalTitle}
            modalContent={modalContent}
          />
        </CustomRow>
      )}
    </>
  );
};

export default UserProfile;
