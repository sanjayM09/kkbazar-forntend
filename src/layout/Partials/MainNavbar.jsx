import React, { useEffect, useState } from "react";
import { StyledMainNavbar } from "./Style";
import { SvgIcons } from "@assets/images";
import { Badge, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllCategory, GetAllCategory } from "./NavbarSlice";
import { useNavigate } from "react-router-dom";
import { TopNav } from "./TopNav";
import { selectCurrentId } from "@modules/Auth/authSlice";
import styled from "styled-components";
import Search from "antd/es/input/Search";
import { FaCartShopping, FaHeart, FaRegHeart } from "react-icons/fa6";
import { AllCartDetails, GetAllCart } from "@modules/AddCart/CartSlice";
import { RiUserLocationFill } from "react-icons/ri";
import { PiUserCirclePlusFill } from "react-icons/pi";


export const MainNavbar = ({ setData }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);

  const CurrentId = useSelector(selectCurrentId);

  const Category = useSelector(AllCategory);

  const items = Category?.map((item) => ({
    key: item?.categoryId,
    label: <a onClick={() => handle(item)}>{item?.categoryName}</a>,
  }));

  const handle = (item) => {
    console.log(item, "jjj");
    window.location.href = `/productsPage/${item?.categoryId}`;
  };

  const OptionDATA = [
    {
      label: "All",
      value: "AllCategories",
    },
  ];

  // Badge Data get -----------

  const AllCartDetail = useSelector(AllCartDetails);

  useEffect(() => {
    if (CurrentId == null || undefined) {
      console.log('gg');
    } else {

      dispatch(GetAllCart(CurrentId));
    }
  }, [CurrentId]);

  console.log(AllCartDetail, 'AllCartDetail');

  const handleWishDetails = () => {
    navigate("/whishlist");
    setActivePage("WishList");
  };

  const handleOrderDetails = () => {
    navigate("/OrderProductList");
    console.log('asdasd');
    setActivePage("OrderProductList");
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/OrderProductList') {
      setActivePage("OrderProductList");
    } else if (path === '/MainPage') {
      setActivePage("Cart");
    } else if (path === '/whishlist') {
      setActivePage("WishList");
    } else {
      setActivePage(''); 
    }
  }, []);

  const handleCartDetails = () => {
    navigate("/MainPage");
    setActivePage("Cart");
  };


  const [defaultValueSelect, setDefaultValueSelect] = useState("AllCategories");

  useEffect(() => {
    setDefaultValueSelect(OptionDATA);
  }, []);


  const onSearch = (value) => {
    setData(value)
  }


  const hanleClickValuFilter = (e) => {
    const InputValu = e.target.value;
    console.log(InputValu, 'InputValu');
    if (InputValu?.length <= 0) {
      navigate('/')
    }
  };


  const handleClick = () => {
    navigate("/");
  };

  const handleclickProdile = () => {
    navigate("/userprofile");
  };

  const handleclickSignin = () => {
    navigate("/signin");
  };



  return (
    <>
      <TopNav />
      <StyledMainNavbar>
        <div className="primaryNav">

          <img src={SvgIcons.Logo} alt="logo" className="logo" onClick={handleClick} style={{ cursor: 'pointer' }} />

          <div className="navwebrespons">
            <SeacrchInputStyle>
              <Space direction="vertical" size="middle" >
                <Space.Compact >
                  <Search onSearch={onSearch} enterButton placeholder="Search" name="search"
                    onChange={hanleClickValuFilter} />
                </Space.Compact>
              </Space>
            </SeacrchInputStyle>
          </div>

          <div className="logos">


            <div>
              <div style={{ paddingTop: '8px' }}>
                <PiUserCirclePlusFill style={{ cursor: "pointer", fontSize: '30px', ...(activePage === "Profile" && { color: "#EF8F21" }) }}
                  alt="Profile" onClick={CurrentId ? handleclickProdile : handleclickSignin}
                  className="Hide-icon" />
              </div>
            </div>


            <RiUserLocationFill className="Hide-icon HeartFill"
              onClick={() => handleOrderDetails()}
              style={{ cursor: "pointer", fontSize: '22px', ...(activePage === "OrderProductList" && { color: "#EF8F21" }) }} />


            {activePage === "WishList" ?
              <FaHeart className="Hide-icon HeartFill"
                onClick={() => handleWishDetails()}
                style={{ cursor: "pointer", fontSize: '25px', color: '#EF8F21' }} />
              :
              <FaRegHeart className="Hide-icon HeartFill"
                onClick={() => handleWishDetails()}
                style={{ cursor: "pointer", fontSize: '25px' }} />
            }


            <div style={{ marginTop: '10px' }}>
              <Badge count={AllCartDetail?.length || 0} overflowCount={99} className="Hide-icon" >
                <FaCartShopping alt="Cart"
                  className="Hide-icon"
                  onClick={() => handleCartDetails()}
                  style={{ cursor: "pointer", fontSize: '22px', marginTop: '1px', ...(activePage === "Cart" && { color: "#EF8F21" }) }} />
              </Badge>
            </div>

            {/* ========== Mobile Views =========  */}

            <div>
              <div style={{ paddingTop: '8px' }}>
                <PiUserCirclePlusFill style={{ cursor: "pointer", fontSize: '25px', ...(activePage === "Profile" && { color: "#EF8F21" }) }}
                  alt="Profile" onClick={CurrentId ? handleclickProdile : handleclickSignin}
                  className="Hide-icons" />
              </div>
            </div>


            <RiUserLocationFill className="Hide-icons HeartFill"
              onClick={() => handleOrderDetails()}
              style={{ cursor: "pointer", fontSize: '21px', ...(activePage === "OrderProductList" && { color: "#EF8F21" }) }} />


            {activePage === "WishList" ?
              <FaHeart className="Hide-icons HeartFill"
                onClick={() => handleWishDetails()}
                style={{ cursor: "pointer", fontSize: '23px', color: '#EF8F21' }} />
              :
              <FaRegHeart className="Hide-icons HeartFill"
                onClick={() => handleWishDetails()}
                style={{ cursor: "pointer", fontSize: '23px' }} />
            }


            <Badge count={AllCartDetail?.length || 0} overflowCount={99} className="Hide-icons" >
              <FaCartShopping alt="Cart"
                className="Hide-icons"
                onClick={() => handleCartDetails()}
                style={{ cursor: "pointer", fontSize: '20px', marginTop: "3px", ...(activePage === "Cart" && { color: "#EF8F21" }) }} />
            </Badge>

            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <img style={{ width: "22px", margin: '15px 10px 10px 10px' }}
                  src={SvgIcons.LayerBlack}
                  alt="LayerBlack"
                  className="Hide-icons"
                />
              </a>
            </Dropdown>
          </div>
        </div>


        <div className="navmobilerespons">
          <SeacrchInputStyle>
            <Space direction="vertical" size="middle">
              <Space.Compact>
                <Search onSearch={onSearch} enterButton
                  onChange={hanleClickValuFilter} placeholder="Search" name="search" />
              </Space.Compact>
            </Space>
          </SeacrchInputStyle>
        </div>





        <div className="secondaryNav">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a
              style={{ cursor: "pointer" }}
              className="box"
              onClick={(e) => e.preventDefault()}
            >
              <img src={SvgIcons.Layer} alt="Layer" />
              <span className="text">All Category</span>
            </a>
          </Dropdown>
          <div className="box">
            <img src={SvgIcons.Headphone} alt="Layer" />
            <span className="text">+91-9443844922</span>
          </div>
        </div>
      </StyledMainNavbar>
    </>
  );
};

const SeacrchInputStyle = styled.div`
.ant-btn-primary{
  background: #EF8F21;
}

.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):active,
.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover  {
    background: #ef8f21 !important;
}

.ant-input{
  border-radius: 20px;
  color: #000;
  font-weight: 600;
}
.ant-input-search .ant-input-search-button{
  height: 42px;
}
.ant-input-group >.ant-input-group-addon:last-child .ant-input-search-button{
  border-start-end-radius: 20px;
  border-end-end-radius: 20px;
}
  @media screen and (max-width: 667px) {
    .ant-input-search .ant-input-search-button {
      height: 42px;
    }
  }

`;
