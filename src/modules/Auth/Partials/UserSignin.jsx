import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, selectCurrentUser } from "@modules/Auth/authSlice";
import SignInForm from "./SignInForm";
import { OpenNotification } from "@components/common";
import { CustomRow } from "@components/others";
import { Col } from "antd";
import { SvgIcons } from "@assets/images";
import { CustomPageTitle } from "@components/others/CustomPageTitle";
import SocialButton from "@components/form/CustomSocialButton";
import { GoogleBtn } from "./RegisterStyle";
import {
  BreadCrumbStyles,
  LogoHeader,
  SignInCard,
  UserSigninForm,
  UsersigninContent,
} from "./UserSigninStyle";
import baseRequest from "@request/request";
import { auth, provider } from "@utils/FirebaseConnect";
import errorHandler from "@request/errorHandler";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@components/form";

const UserSignin = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignIn = async (data) => {
    try {
      const authData = await baseRequest.post(`/user/login`, {
        ...data,
      });
      console.log(authData,'authData');
      // Mock API, add the origin API and payload data
      dispatch(setCredentials(authData?.data));
      OpenNotification({
        type: "",
        msg: "",
        description: `Welcome Back ${authData?.data?.name}`,
      });
      navigate("/", { replace: true });
    } catch (error) {
      return errorHandler(error, "dd");
    }
  };

  const token = useSelector(selectCurrentUser);
  console.log(token, "token");

  const navigateToRegister = () => {
    navigate("/registerform");
  };

  const logGoogleUser = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        navigate("/");
        console.log(result, "result");
      }
    } catch (error) {
      console.error("Google Sign-in error", error);
    }
  };

  //   const logGoogleUser = async () => {
  //     const response = await signInWithGooglePopup();
  //     console.log(response);
  // }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <UserSigninForm>
        <CustomRow>
          <Col span={24} md={24}>
            <LogoHeader>

              <img src={SvgIcons.Logo} onClick={handleClick} />

              <BreadCrumbStyles
                separator=">"
                items={[
                  {
                    title: <div style={{ cursor: 'pointer' }} onClick={handleClick}>Home</div>,
                  },
                  {
                    title: <p>my order</p>,
                  },
                ]}
              />
            </LogoHeader>
          </Col>
          <Col span={24} md={24}>
            <div style={{ padding: "0px 40px" }}>
              <CustomPageTitle Heading={"Login on Justclickin "} />
            </div>
          </Col>
        </CustomRow>
        <SignInCard>
          <SignInForm handleSignIn={handleSignIn} />
          <br />
        </SignInCard>
        <br />
        <UsersigninContent>
          <p>
            Are you new to Justclickin ?&nbsp;
            <span onClick={navigateToRegister}>Create Account</span>
          </p>
          {/* <h3>OR</h3> */}
        </UsersigninContent>
        {/* <div className="googlebtn_head">
          <GoogleBtn>
            <SocialButton.Google
              onClick={logGoogleUser}
              icon={<img src={SvgIcons.Google_btn} alt="" />}
              text={"Continue With Google"}
              htmlType="submit"
            />
          </GoogleBtn>
        </div> */}
      </UserSigninForm>
    </>
  );
};
export default UserSignin;
