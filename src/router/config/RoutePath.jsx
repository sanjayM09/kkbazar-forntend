import DashboardLayout from "@layout/DashboardLayout";
import RegisterForm from "@modules/Auth/Partials/RegisterForm";
import UserSignin from "@modules/Auth/Partials/UserSignin";
import { HomeMain } from "@modules/Home/HomeMain";
import { MainProductList } from "@modules/ProductList/Partials/MainProductList";
import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Payment from "@modules/Payment/Partials/Payment";
import DeliveryAddressForm from "@modules/Payment/Partials/DeliveryAddressForm";
import AboutUS from "@modules/AboutUs/Partials/AboutUS";
import FAQ from "@modules/FAQ/Partials/FAQ";
import PrivacyPolicy from "@modules/PrivacyPolicy/Partials/PrivacyPolicy";
import { ProductView } from "@modules/ProductList/Partials/ProductView";
import { WishListMain } from "@modules/WishList";
import UserProfile from "@modules/UserProfile/Partials/UserProfile";
import { OrderProductList } from "@modules/OrderDetails/OrderView/Index";
import { OrderProductView } from "@modules/OrderDetails/OrderProductView";
import PaySlipPrintPdf from "@modules/PaySlip/Partials/PaySlipPrintPdf";
import { AddCart } from "@modules/AddCart";
import PaySlipPrint from "@modules/PaySlip/Partials/PaySlipPrint";
import CancellationPolicy from "@modules/PrivacyPolicy/Partials/CancellationPolicy";
import TermsandConditions from "@modules/PrivacyPolicy/Partials/TermsandConditions";
import Shipping from "@modules/PrivacyPolicy/Partials/Shipping";
import ContactUs from "@modules/ContactUs/Partials/ContactUs";
import EmptyAddressPage from "@modules/Payment/Partials/EmptyAddressPage";
import MainPage from "@modules/Payment/Partials/Index";
import { FilterDataSec } from "@modules/FilterData";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";
import { useDispatch, useSelector } from "react-redux";
import { AllHomefilterData, GetHomepagefilter, SetFilterProduct } from "@modules/FilterData/HomeFilterSlice";
import { MainNavbar } from "@layout/Partials/MainNavbar";

const RoutePathPages = () => {

  const [dataSourse, setDataSourse] = useState({})

  const [data, setData] = useState({})

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AllFilterDAtas = useSelector(AllHomefilterData);

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(GetHomepagefilter(data));
      dispatch(SetFilterProduct(dataSourse));
      navigate(`/FilterDataSec`)
    }
  }, [data]);

  console.log(data,'searchhydata');

  useEffect(() => {
    setDataSourse(AllFilterDAtas)
  }, [AllFilterDAtas])


  return (
    <>
      <DashboardLayout setData={setData}>

        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/signin" element={<UserSignin />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/deliveryaddress" element={<DeliveryAddressForm />} /> */}
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/productsPage/:id" element={<MainProductList />} />
          <Route path="/singleProduct/:id" element={<ProductView />} />
          <Route path="/whishlist" element={<WishListMain />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/OrderProductList" element={<OrderProductList />} />
          <Route path="/orderproductView" element={<OrderProductView />} />
          <Route path="/PaySlipPrintPdf" element={<PaySlipPrintPdf />} />
          {/* <Route path="/AddCart" element={<AddCart />} /> */}
          <Route path="/PaySlipPrint" element={<PaySlipPrint />} />
          <Route path="/CancellationPolicy" element={<CancellationPolicy />} />
          <Route path="/TermsandConditions" element={<TermsandConditions />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/EmptyAddressPage" element={<EmptyAddressPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/FilterDataSec" element={<FilterDataSec dataSourse={dataSourse} />} />
          <Route path="/MainNavbar" element={<MainNavbar />} />

        </Routes>

      </DashboardLayout>


    </>
  );
};

export default RoutePathPages;
