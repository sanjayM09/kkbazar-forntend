import React, { Fragment, useLayoutEffect } from "react";
import {
  MainLayout,
} from "@layout/Partials/Style";
import { MainNavbar } from "./Partials/MainNavbar";
import { Footer } from "@modules/FooterSection";

const DashboardLayout = ({ children, setData }) => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const currentPath = window.location.pathname;
  const isMainNavbarVisible = !(currentPath.includes("/signin") || currentPath.includes("/registerform") || currentPath.includes("/userprofile"));

  return (
    <Fragment>

      <MainLayout style={{ maxWidth: '2000px', margin: 'auto' }}>
        <div style={{ width: "100%" }}>
          {isMainNavbarVisible && <MainNavbar setData={setData} />}
          {children}
          <br />
          <Footer />
        </div>
      </MainLayout>
    </Fragment>

  );
};
export default DashboardLayout;
