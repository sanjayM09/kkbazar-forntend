import { Breadcrumb, Col, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledContainerList } from "../style";
import { FilterList } from "./FilterList";
import {
  CommonLoading,
  CustomRow,
} from "@components/others";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProductDatad,
  GetProductdata,
} from "../ProductListSlice";
import baseRequest, { base } from "@request/request";
import { useNavigate, useParams } from "react-router-dom";
import { APIURLS } from "@request/apiUrls/urls";
import { selectCurrentId } from "@modules/Auth/authSlice";
import successHandler from "@request/successHandler";
import { Offers } from "@modules/CommonComponents/Offers";
import { InStock, OutOFStock } from "@modules/CommonComponents/SoldOut";
import { SvgIcons } from "@assets/images";
import { EmptyProductHead } from "@modules/AddCart/style";
import { TbShoppingCartOff } from "react-icons/tb";
import AmountFormat, { AmountFormatmrp } from "@modules/CommonComponents/AmountFormate";
import { GetAllCart } from "@modules/AddCart/CartSlice";
const BreadcrumbTag = styled(Breadcrumb)`
  color: #000;
  padding: 20px 15px;
  font-size: 20px;
  p {
    font-weight: 400;
    font-size: 20px;
    font-family: "Red Rose", serif;
    cursor: pointer;
  }
`;
export const MainProductList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useState
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  console.log(image, "image");
  const [productDescriptionStates, setProductDescriptionStates] = useState({});
  const [productsList, setProductsList] = useState("");
  console.log(productsList,'productsList');
  const CurrentUser = useSelector(selectCurrentId);
  const [pageSize, setPageSize] = useState(8); // -------- Pagination state
  const [currentPage, setCurrentPage] = useState(1); // -------- Pagination state
  const AllProductViewDetails = useSelector(AllProductDatad);
  console.log(AllProductViewDetails,'AllProductViewDetails');
  const CatagoryName = AllProductViewDetails?.categoryName;
  // Pagination page function ------------
  const calculatePageSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setPageSize(4);
    } else {
      setPageSize(12);
    }
  };
  useEffect(() => {
    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);
    return () => window.removeEventListener("resize", calculatePageSize);
  }, []);
  const totalItems = image.length > 0 ? image.length : AllProductViewDetails?.productDetails?.length || 0;
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = image.length > 0 ? image.slice(indexOfFirstItem, indexOfLastItem) : AllProductViewDetails?.productDetails?.slice(indexOfFirstItem, indexOfLastItem);
  // Pagination change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Pagination page function end ......... ------------
  const FullData = { id, userId: CurrentUser };
  useEffect(() => {
    dispatch(GetProductdata(FullData));
  }, [CurrentUser, id]);
  useEffect(() => {
    setImage(
      AllProductViewDetails?.productDetails?.filter(
        (item) => item.brandId === productsList
      ) || []
    );
    setCurrentPage(1)
  }, [productsList, AllProductViewDetails]);
  const handleQuickView = (id) => {
    navigate(`/singleProduct/${id}`);
  };
  const AddWishList = async (data) => {
    await baseRequest
      .post(APIURLS.PRODUCT_WISHLIST_POST_RESPONSE, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        dispatch(GetProductdata(FullData));
        dispatch(GetAllCart(CurrentUser));
        if (response.data && productsList) {
          const val = product?.productDetails?.filter(
            (item) => item.brandId === productsList
          );
          console.log(val, "werwe");
          setImage(val);
        }
        setProduct(AllProductViewDetails);
        console.log(response, "gfh");
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleWhishList = (item) => {
    if (!CurrentUser) {
      navigate("/signin");
    } else {
      const newValue = {
        productVarientImagesId:
          item?.productListDetails[0]?.productVarientImagesList[0]
            ?.productVarientImagesId,
        productListId: item?.productListDetails[0]?.productListId,
        userId: CurrentUser,
      };
      // AddWishList(newValue);
      console.log(newValue,'dggert');
    }
  };
  const toggleDescription = (id) => {
    setProductDescriptionStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <StyledContainerList>
      <BreadcrumbTag
        separator=">"
        items={[
          {
            title: (
              <a className="links" href="/">
                Home
              </a>
            ),
          },
          { title: <a className="links">All Category</a> },
          { title: <a className="links">{CatagoryName}</a> },
        ]}
      />
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CommonLoading />
        </div>
      ) : (
        <CustomRow space={[24, 24]}>
          <Col span={24} lg={5} md={6} sm={24}>
            <FilterList
              brand={AllProductViewDetails}
              setProductsList={setProductsList}
              productsList={productsList}
            />
          </Col>
          {AllProductViewDetails?.productDetails?.length === 0  && (
            <Col span={24} lg={18} md={18} sm={24}>
              <EmptyProductHead>
                <div className="iconss">
                  <div className="iconclr">
                    <TbShoppingCartOff  />
                  </div>
                </div>
                <div>
                  <h4>Sorry , No Products Found !</h4>
                </div>
              </EmptyProductHead>
            </Col>
          )}
          <Col span={24} lg={18} md={18} sm={24} style={{ marginTop: "65px" }}>
            <CustomRow space={[24, 24]}>
              {currentItems?.map((item, index) => (
                <Col
                  span={24}
                  lg={8}
                  md={12}
                  sm={12}
                  key={item?.productId || index}
                >
                  <div className="image-container">
                    <div className="img-contain">
                      {item?.productListDetails?.[0]
                        ?.productVarientImagesList?.[0]
                        ?.productVarientImageUrl && (
                        <img
                          className="contain-Img"
                          src={`${base}${item?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImageUrl}`}
                          alt={`Product`}  title={`Product`}
                        />
                      )}
                      <div className="quickView">
                        <span onClick={() => handleQuickView(item?.productId)}>
                          Quick View
                        </span>
                      </div>
                      <div className="icons">
                        <div className="likeIcon">
                          <img
                            src={
                              item?.productListDetails[0]?.wishListStatus
                                ? SvgIcons.heartLike
                                : SvgIcons.Like
                            }
                            alt="Like"  title="Like"
                            onClick={() => handleWhishList(item)}
                          />
                        </div>
                      </div>
                      <Offers
                        text={item?.productListDetails[0]?.discountPercentage}
                      />
                    </div>
                    {item?.productListDetails?.[0] && (
                      <div>
                        <h1 className="ProductName">
                          {item?.productListDetails[0]?.productName}
                        </h1>
                        {/* <p
                          className="title"
                          onClick={() => toggleDescription(index)}
                        >
                          {productDescriptionStates[index]
                            ? item?.productListDetails[0]?.description
                            : `${item?.productListDetails[0]?.description?.slice(
                                0,
                                100
                              )}...`}
                        </p> */}
                          <div className='title' style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                            <p> {item?.productListDetails[0]?.description || '...'}</p>
                          </div><br/>
                        <span className="mrp">
                          MRP&nbsp;:&nbsp;
                          <span style={{ textDecoration: "line-through" }}>
                            ₹
                            <AmountFormatmrp
                              number={item?.productListDetails[0]?.mrp}
                            />
                          </span>
                        </span>
                        <h2 className="price">
                          Price&nbsp;:&nbsp;
                          <AmountFormat
                            number={item?.productListDetails[0]?.totalAmount}
                          />
                        </h2>
                        <span className="taxes">(inclusive of all taxes)</span>
                        <div>
                          {item?.productListDetails[0]?.quantity > 0 ? (
                            <InStock />
                          ) : (
                            <OutOFStock />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </CustomRow>
          </Col>
        </CustomRow>
      )}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePageChange}
        style={{ display: "flex", justifyContent: "end",margin:'20px 0px' }}
      />
    </StyledContainerList>
  );
};