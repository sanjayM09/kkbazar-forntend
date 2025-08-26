import React, { useState } from "react";
import { ImageProfile, NavTopDraw } from "./Style";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { RiMenu4Line } from 'react-icons/ri'
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { CustomModal, Flex } from "@components/others";
import { Button } from "@components/form";
import { logOut } from "@modules/Auth/authSlice";
import { AvImg } from "@assets/images";

export const NavHeader = ({ showDrawer }) => {

  const dispatch = useDispatch();

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const LogOutModal = () => (
    <div>
      <h1 style={{ fontSize: "1.2rem" }}>Are you Sure You Want to Logout ?</h1>
      <br />
      <Flex style={{ justifyContent: "center", gap: "20px" }}>
        <Button.Success text={"Logout"} onClick={Signout} />
        <Button.Danger text={"Cancel"} onClick={handleOk} />
      </Flex>
    </div>
  );

  const Signout = () => {
    dispatch(logOut());
    localStorage.removeItem('openKeys')
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const ViewNotification = () => {
    // setModalContent(<Notifications />);  // ---- > FUTURE USE
    setModalTitle("Notifications");
    showModal();
  };

  const items = [
    {
      key: "1",
      label: "My Account",
      onClick: () => {
        console.log("clicked");
      },
    },
    {
      key: "2",
      label: "Log Out",
      onClick: () => {
        setModalContent(<LogOutModal />);
        setModalTitle("Log Out");
        showModal();
      },
    },
  ];

  return (
    <NavTopDraw>
      <Flex spacebetween={'true'} aligncenter={'true'} H_100={'true'}>
        <span className="DrawBtn" onClick={showDrawer} >
          <RiMenu4Line style={{ fontSize: "20px" }} />
        </span>
        <div className="Btnresponsive">
          <AiOutlineBell className="notify"
            style={{
              fontSize: "23px",
              marginRight: "10px",
              marginTop: "6px",
            }}
            onClick={ViewNotification}
          />
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <ImageProfile>
              <img src={AvImg} alt="Profile" />
            </ImageProfile>
          </Dropdown>
        </div>
      </Flex>

      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={400}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </NavTopDraw>
  );
};
