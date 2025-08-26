import { CustomRow } from "@components/others";
import baseRequest, { base } from "@request/request";
import { Col } from "antd";
import React from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { StyledFilter } from "./Style";
import { InStock, OutOFStock, SoldOut } from "@modules/CommonComponents/SoldOut";
import { APIURLS } from "@request/apiUrls/urls";
import successHandler from "@request/successHandler";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { Offers } from "@modules/CommonComponents/Offers";
import { NotFound } from "./NotFound";



export const FilterValues = ({ dataSourse }) => {

  console.log(dataSourse, 'filterdataSourse');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const CurrentUser = useSelector(selectCurrentId);


  const AddWishList = async (data) => {
    // setIsloading(true)
    await baseRequest.post(APIURLS.HOME_WISHLIST_POST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: 'success',
          type: 'success',
        })
        // setIsloading(false)
        dispatch(GetHomepagefilter());
        console.log(response, 'add');

        return response.data;
      })
      .catch(function (error) {
        // setIsloading(false)
        console.log(error.response, 'add error');
      })
  }

  const handleWhishlist = (values) => {
    console.log(values, 'valuesvalues');
    if (CurrentUser == null) {
      navigate('/signin')
    } else {
      const newValue = {
        productVarientImagesId: values?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImagesId,
        productListId: values?.productListDetails[0]?.productListId,
        userId: CurrentUser,
      }
      AddWishList(newValue)
      console.log(newValue, 'newValue');
    }
  }

  const handleQuickView = (productListId) => {
    console.log(productListId, 'Produc234tIdProductId');
    navigate(`/singleProduct/${productListId}`)
  }


  return (
    <StyledFilter>
      {dataSourse === undefined || dataSourse?.length <= 0 ? <NotFound /> :
        <CustomRow space={[12, 12]}>

          {dataSourse?.productDetails?.map((product, index) => {
            return (
              <Col span={12} sm={12} xs={24} md={12} lg={6} key={index}>
                <div className="productimgsectn">
                  <div className="boxsectn">
                    <div className="Responn">
                      <img src={`${base}${product?.productListDetails[0]?.productVarientImagesList[0]?.productVarientImageUrl}`}
                        alt={product?.productListDetails[0]?.productName || 'productImg'} title={product?.productListDetails[0]?.productName || 'productImg'} />
                      <div className='quickview' onClick={() => handleQuickView(product?.productId)}><span> Quick View</span></div>
                      {/* <div className='icons'>
                      {product?.productListDetails[0].wishListStatus === true ?
                        <IoMdHeart color='red' onClick={() => handleWhishlist(product)} />
                        :
                        <IoMdHeartEmpty onClick={() => handleWhishlist(product)} />}

                    </div> */}

                      <Offers text={product?.productListDetails[0]?.discountPercentage} />
                    </div>
                    <div className='boxsectntext'>
                      <h4 className='productdescribn'>{product?.productListDetails[0]?.productName}({product?.brandName}) </h4>
                      <p className='piececlass'>{product?.productListDetails[0]?.pieces} {product?.productListDetails[0]?.unit}</p>
                      {/* <div className='weightGramclass'>Weight : {product?.productListDetails[0]?.weight} </div> */}
                      <div className='priceclass'>Price : ₹ {product?.productListDetails[0]?.totalAmount}<br /> <span>MRP&nbsp;:&nbsp;₹&nbsp;{product?.productListDetails[0]?.mrp} </span> </div>

                      {product?.productListDetails[0]?.quantity <= 0 ?
                        <OutOFStock /> : <InStock />}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </CustomRow>
      }
    </StyledFilter>
  );
};
