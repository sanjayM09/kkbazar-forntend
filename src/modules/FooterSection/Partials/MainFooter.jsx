import { CustomRow } from "@components/others";
import { Col } from "antd";
import React, { useEffect } from "react";
import { StyledMainFooter } from "../style";
import { SvgIcons } from "@assets/images";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalInformation, selectAllPersonalInformations } from "@modules/Auth/Partials/UsersSlice";

export const MainFooter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPersonalInformation())
  }, [])

  const allPersonaldetails = useSelector(selectAllPersonalInformations)

  return (
    <StyledMainFooter>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12} lg={6}>
          <h1>Justclickin</h1>
          <p className="para">
            From clicks to doorstep delights: Explore, shop, and indulge in our curated collection of treasures, just a tap away
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={SvgIcons.Instagram} alt="Instagram" />
            <img src={SvgIcons.Whatsapp} alt="Whatsapp" />
            <img src={SvgIcons.Youtube} alt="Youtube" />
            <img src={SvgIcons.Twitter} alt="Twitter" />
          </div>
        </Col>

        <Col span={24} md={12} lg={6}>
          <p className="heading">Information</p>
          <div className="content">
            <a href="/privacypolicy" className="content">Privacy Policy</a>
          </div>
          <div className="content">
            <a href="/TermsandConditions" className="content">Terms and Conditions</a>
          </div>
          <div className="content">
            <a href="/CancellationPolicy" className="content">Cancellation and Refund</a>
          </div>
          <div className="content">
            <a href="/Shipping" className="content">Shipping and Delivery</a>
          </div>
        </Col>

        <Col span={24} md={12} lg={6}>
          <p className="heading">Contact info</p>
          <div className="content">
            <a href="/ContactUs" className="content">Contact Us</a>
          </div>
          <p className="content">Phone : {allPersonaldetails?.phoneNumber1}</p>
          <p className="content">Email : {allPersonaldetails?.email}</p>
          {/* <div className="content">

            <a href="https://justclickin.in/" style={{ textDecoration: 'none', color: 'white' }}>justclickin.in</a>
          </div> */}
        </Col>

        <Col span={24} md={12} lg={6}>
          <p className="heading">Need Help?</p>
          <div className="content">
            <a href="/faq" className="content">FAQ</a>
          </div>
          <div className="content">
            <a href="/aboutus" className="content">About us</a>
          </div>
        </Col>
      </CustomRow>
    </StyledMainFooter>
  );
};
