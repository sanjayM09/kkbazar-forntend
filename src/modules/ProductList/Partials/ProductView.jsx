import { APIURLS } from "@request/apiUrls/urls";
import baseRequest, { base } from "@request/request";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledProduct } from "../style";
import { CustomCardView, CustomRow } from "@components/others";
import { Col } from "antd";
import { SvgIcons } from "@assets/images";
import { Button } from "@components/form";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import successHandler from "@request/successHandler";
import errorHandler from "@request/errorHandler";
import {
  AllSingleproduct,
  AllrecentProductsData,
  GetRecentProductcarousel,
  GetSingleproduct,
  StoreRedux,
} from "../ProductListSlice";
import { InStock, OutOFStock } from "@modules/CommonComponents/SoldOut";
import { RecentProductcarousel } from "./RecentProductcarousel";
import AmountFormat, { AmountFormatmrp } from "@modules/CommonComponents/AmountFormate";
import { GetAllCart } from "@modules/AddCart/CartSlice";

export const ProductView = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [varientImg, setVarientImg] = useState();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedVer, setSelectedVer] = useState(0);
  const [wiislistData, setWiislistData] = useState(false)
  const [trigger, setTrigger] = useState(0); // Trigger state

  const CurrentUser = useSelector(selectCurrentId);

  console.log(varientImg, 'varientImg');

  const FullData = {
    id: id,
    userId: CurrentUser,
  };

  const AllCategoryDetails = useSelector(AllSingleproduct);

  useEffect(() => {
    dispatch(GetSingleproduct(FullData));
    dispatch(StoreRedux(AllCategoryDetails));
  }, [CurrentUser, trigger]);


  console.log(AllCategoryDetails, wiislistData, "All33CategoryDetails");

  useEffect(() => {
    setProduct(AllCategoryDetails);
  }, [AllCategoryDetails, trigger]);

  useEffect(() => {
    if (
      product &&
      product.productList &&
      product.productList.length > 0 &&
      product.productList[0]?.varientImages &&
      product.productList[0]?.varientImages.length > 0
    ) {
      setData(product.productList[0].varientImages[0]);

      const filteredItem = product?.productList?.find(item => item.productListId === varientImg?.productListId);
      if (filteredItem) {
        setVarientImg(filteredItem);
      }

    }

  }, [product]);

  useEffect(() => {
    const filteredItem = product?.productList?.find(item => item.productListId === varientImg?.productListId);
    if (varientImg) {
      setVarientImg(filteredItem);
    }
  }, [product, trigger])


  const handleImg = (val, index) => {
    setData(val);
    setSelectedVer(index);
  };

  useEffect(() => {
    console.log(selected, varientImg, 'wervarientImg');
    if (varientImg) {
      setData(varientImg?.varientImages[0]);
      setSelectedVer(varientImg?.varientImages[0]);
    }
  }, [varientImg]);

  console.log(selectedVer, 'selectedVer');

  const handleImgs = (val, index) => {
    console.log(val, index, 'val234');
    setVarientImg(val, index);
    // setData(val?.varientImages[0]);
    setSelected(index);
    console.log('234fdfg');
  };

  // ------ Varient box click set data -------------

  const handlevarientclick = (DetaItem) => {
    console.log(DetaItem, 'DetaItem');
  }



  const AddWishList = async (data) => {
    console.log(data, 'gsdfg');
    setListLoading(true);
    await baseRequest
      .post(APIURLS.HOME_WISHLIST_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        setListLoading(false);
        dispatch(GetSingleproduct(FullData));
        setWiislistData(response.data)
        dispatch(GetAllCart(CurrentUser));
        console.log(response.data, 'response.data');
        return response.data;
      })
      .catch(function (error) {
        setListLoading(false);
      });
  };

  console.log(product, 'productwer');

  const handleWhishList = (item) => {
    if (CurrentUser == null) {
      navigate('/signin')
    } else {


      if (!item) {
        console.error("Item is undefined or null");
        return;
      }

      const InsideValue = item.productList?.[0];
      console.log(item, 'lll');

      let newValue = {
        productVarientImagesId: null,
        productListId: null,
        userId: CurrentUser,
      };

      if (varientImg && item.varientImages?.[0]) {
        newValue.productVarientImagesId = item.varientImages[0].productVarientImagesId;
        newValue.productListId = item.productListId;
      } else if (InsideValue && InsideValue.varientImages?.[0]) {
        newValue.productVarientImagesId = InsideValue.varientImages[0].productVarientImagesId;
        newValue.productListId = InsideValue.productListId;
      }
      AddWishList(newValue);
      console.log(newValue, 'sdfsdfnewVa35345lue');
    }



  };

  const MovetocartWishList = async (data) => {
    console.log(data, 'gsdfg');
    await baseRequest
      .post(APIURLS.WHISHLIST_MOVECART_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        dispatch(GetAllCart(CurrentUser));
        console.log(response, "addcart");
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return errorHandler(error);
      });
  };

  const handleMovetoCart = (values) => {
    console.log(values, "bvc");
    if (CurrentUser == null) {
      navigate("/signin");
    } else {

      if (!values) {
        console.error("Item is undefined or null");
        return;
      }

      const InsideValue = values.productList?.[0];

      let newValue = {
        productVarientImagesId: null,
        productListId: null,
        userId: CurrentUser,
        quantity: 1,
      };

      if (varientImg && values.varientImages?.[0]) {
        newValue.productVarientImagesId = values.varientImages[0].productVarientImagesId;
        newValue.productListId = values.productListId;
      } else if (InsideValue && InsideValue.varientImages?.[0]) {
        newValue.productVarientImagesId = InsideValue.varientImages[0].productVarientImagesId;
        newValue.productListId = InsideValue.productListId;
      }

      console.log(newValue, "cartnewValue");
      MovetocartWishList(newValue);
    }
  };

  console.log(varientImg, 'sdfsdf');

  // ----- Recent List Carousel --------

  const RecentId = {
    categoryId: AllCategoryDetails?.categoryId,
    productListId: AllCategoryDetails?.productList && AllCategoryDetails?.productList[0]?.productListId,
  }

  console.log(RecentId, 'asd');

  useEffect(() => {
    dispatch(GetRecentProductcarousel(RecentId));
  }, [AllCategoryDetails])

  const CarouselData = useSelector(AllrecentProductsData)

  const UpdateForm = () => {
    dispatch(GetRecentProductcarousel(RecentId));
  }

  console.log(CarouselData, 'CarouselData');
  console.log(data, 'sdfsdf data');





  // zoom checking ------------



  return (
    <Fragment>
      <StyledProduct>

        <h1 className="pageHeading">Product</h1>

        {/* {loading ? (
        <div style={{ textAlign: "center" }}>
          <CommonLoading />
        </div>
      ) : ( */}

        <CustomRow space={[30, 30]} style={{ marginTop: "40px" }}>
          {varientImg ? (
            <>
              <Col span={10} md={5} lg={4} style={{ height: "410px", overflow: "auto" }}>
                <CustomRow space={[24, 24]} style={{ height: "100%" }}>
                  <Col
                    span={24}
                    md={24}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: '10px',
                      overflow: "auto",
                    }}
                  >
                    {varientImg &&
                      varientImg?.varientImages?.map((item, index) => {
                        return (
                          <img
                            style={{
                              cursor: "pointer",
                              objectFit: "contain",
                              height: "100px",
                              // border:
                              //   index === selectedVer 
                              //     ? "2px solid #0e21f1"
                              //     : "none",
                              border: item === selectedVer ? "2px solid #ef8f21" : index === selectedVer ? "2px solid #ef8f21" : "none",
                              borderRadius: "5px",
                            }}
                            key={item?.productVarientImagesId}
                            src={`${base}${item.productVarientImageUrl}`}
                            alt={varientImg?.productName || "product"}
                            title={varientImg?.productName || "product"}
                            onClick={() => handleImg(item, index)}
                          />
                        );
                      })}
                  </Col>
                </CustomRow>
              </Col>
              <Col span={14} md={19} lg={20}>
                <img
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    height: "410px",
                  }}
                  src={`${base}${data?.productVarientImageUrl}`}
                  alt={varientImg?.productName || "product"} 
                  title={varientImg?.productName || "product"} />

              </Col>
            </>
          ) : (
            <>
              <Col span={10} md={5} lg={4} style={{ height: "410px", overflow: "auto" }}>
                <CustomRow space={[24, 24]} style={{ height: "100%" }}>
                  <Col
                    span={24}
                    md={24}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: '10px',
                      overflow: "auto",
                    }}
                  >
                    {product &&
                      product.productList &&
                      product.productList[0]?.varientImages.map((item, index) => {
                        return (
                          <img
                            style={{
                              cursor: "pointer",
                              objectFit: "contain",
                              height: "100px",
                              border:
                                index === selectedVer
                                  ? "2px solid #EF8F21"
                                  : "none",
                              borderRadius: "5px",
                              // padding: "10px",
                            }}
                            key={item?.productVarientImagesId}
                            src={`${base}${item.productVarientImageUrl}`}
                            alt={varientImg?.productName || "Product"}
                            title={varientImg?.productName || "Product"}
                            onClick={() => handleImg(item, index)}
                          />
                        );
                      })}
                  </Col>
                </CustomRow>
              </Col>

              <Col span={14} md={19} lg={20} >
                <img
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    height: "410px",
                  }}
                  src={`${base}${data?.productVarientImageUrl}`}
                  alt={varientImg?.productName || "product"}
                  title={varientImg?.productName || "product"}
                />
              </Col>

            </>
          )}

          <Col span={24} md={24}>
            <div style={{}}>
              {product &&
                product?.productList?.map((item, index) => {
                  return (
                    <>
                      <img
                        style={{
                          cursor: "pointer",
                          border: index === selected ? "2px solid #EF8F21" : "none",
                          borderRadius: "5px",
                          padding: "10px",
                          objectFit: "contain",
                          height: "100px",
                          width: "100px",
                          margin: "10px",
                          background: '#e9e9e9'
                        }}
                        key={item?.productListId}
                        src={`${base}${item.varientImages[0]?.productVarientImageUrl}`}
                        alt={item?.productName || "productName"}
                        title={item?.productName || "productName"}
                        onClick={() => handleImgs(item, index)}
                      />
                      {/* <h2>ui</h2> */}
                    </>
                  );
                })}
            </div>

            {/* {varientImg ? ( */}
            <div>

              {varientImg ?
                <>
                  <h1 className="pageHeading">Name : {varientImg?.productName}</h1>
                  <div style={{ display: "flex", gap: "10px", margin: "15px 0px" }}>
                    {varientImg?.varientList?.map((item, index) => {
                      return (
                        <span className="varientItems" key={index} onClick={() => handlevarientclick(varientImg)}>
                          {item?.varientName}&nbsp; {item?.varientValue}
                        </span>
                      );
                    })}
                  </div>
                </>
                :
                <>
                  <h1 className="pageHeading">Name : {product?.productName}</h1>
                  <div style={{ display: "flex", gap: "10px", margin: "15px 0px" }}>
                    {product?.productList && product?.productList[0]?.varientList?.map((item, index) => {
                      return (
                        <span className="varientItems" key={index} onClick={() => handlevarientclick(product)}>
                          {item?.varientName}&nbsp; {item?.varientValue}
                        </span>
                      );
                    })}
                  </div>
                </>
              }



              <span className="description">Description</span>
              <CustomCardView style={{ margin: "20px 0px" }}>
                <p className="desContent">
                  {varientImg ?
                    <>
                      {varientImg?.description}
                    </> :
                    product?.productList && product?.productList.length > 0 && product.productList[0]?.description
                  }
                </p>
              </CustomCardView>

              <span className="mrp">
                Brand : {varientImg ? <>{varientImg?.brandName}</> : <>{product?.productList && product?.productList[0]?.brandName}</>} ,  MRP:{" "}
                <span style={{ textDecoration: "line-through" }}>
                  ₹ {varientImg ?
                    <>
                      <AmountFormatmrp number={varientImg?.mrp} />
                    </> :
                    product?.productList && product?.productList.length > 0 && <AmountFormatmrp number={product.productList[0]?.mrp} />
                  }
                </span>
              </span>
              <h1 className="price">
                Price: ₹
                {varientImg ?
                  <>
                    <AmountFormat number={varientImg?.totalAmount} />
                  </> :
                  product?.productList && product?.productList.length > 0 && <AmountFormat number={product.productList[0]?.totalAmount} />
                } &nbsp;&nbsp;

                <span className="discount">
                  You Save:&nbsp;

                  {varientImg ?
                    <>
                      {varientImg?.discountPercentage}
                    </> :
                    product?.productList && product?.productList.length > 0 && product.productList[0]?.discountPercentage
                  }  % OFF
                </span>
              </h1>
              <div className=''>

                {varientImg ?
                  <>
                    {varientImg?.quantity <= 0 ?
                      <OutOFStock /> : <InStock />}
                  </> :
                  (product?.productList && product.productList.length > 0 && product.productList[0]?.quantity <= 0 ?
                    <OutOFStock /> : <InStock />)
                }

              </div>

              <span className="tax">(inclusive of all taxes)</span>

              <div style={{ display: "flex", width: "50%", margin: "20px 0px" }}>
                <Button.AddCart
                  onClick={() => { varientImg ? handleMovetoCart(varientImg) : handleMovetoCart(product) }}
                  className="WishlistAddcartclass"
                  style={{
                    background: "#FAB442",
                    width: "100%",
                    height: "60px",
                    borderRadius: "10px",
                  }}
                  icon={<img src={SvgIcons.AddCart} alt="cart" title="cart" />}
                  text={"Add Cart"}
                />

                <Button.Whishlist
                  loading={listLoading}
                  // onClick={() => handleWhishList(varientImg)}
                  onClick={() => { varientImg ? handleWhishList(varientImg) : handleWhishList(product) }}
                  className="WishlistAddcartclass"
                  style={{
                    color: "red",
                    background: "#fff",
                    border: "2px solid #FAB442",
                    width: "100%",
                    height: "60px",
                    borderRadius: "10px",
                  }}

                  icon={
                    varientImg ? (
                      (() => { console.log('check12'); })(),
                      varientImg.wishListStatus === true ? (
                        <img src={SvgIcons.withLike} alt="Liked" title="Liked" />
                      ) : (
                        <img src={SvgIcons.withoutLike} alt="Not Liked" title="Not Liked" />
                      )
                    ) : (
                      product?.productList && product?.productList.length > 0 && product.productList[0]?.wishListStatus === true ? (
                        <img src={SvgIcons.withLike} alt="Liked" title="Liked" />
                      ) : (
                        <img src={SvgIcons.withoutLike} alt="Not Liked" title="Not Liked" />
                      )
                    )
                  }

                  text={"Wishlist"}
                />

              </div>
            </div>

          </Col>
        </CustomRow>

        {/* )} */}
      </StyledProduct >


      <RecentProductcarousel CarouselData={CarouselData}
        UpdateForm={UpdateForm} setTrigger={setTrigger} trigger={trigger} />

    </Fragment >
  );
};