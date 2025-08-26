import React, { useEffect, useState } from "react";
import { StyledProductsView } from "../style";
import { CustomRow } from "@components/others";
import { Col } from "antd";
import { SvgIcons } from "@assets/images";
import { AllCartDetails, GetAllCart } from "../CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentId } from "@modules/Auth/authSlice";
import baseRequest, { base } from "@request/request";
import { APIURLS } from "@request/apiUrls/urls";
import { CartOrderDetails } from "./OrderDetails";
import { CustomCheckBox } from "@components/form";
import EmptyProductPage from "./EmptyProductPage";
import AmountFormat, { AmountFormatmrp } from "@modules/CommonComponents/AmountFormate";
import { InStock, OutOFStock } from "@modules/CommonComponents/SoldOut";
import { OpenNotification } from "@components/common";

export const ProductsView = ({ setCurrentStep }) => {


  // useState

  const [datasource, setDataSource] = useState([]);
  // console.log(datasource, "datasource");
  const [cartId, setCartId] = useState();
  // console.log(cartId, "cartId");
  const [checkedItems, setCheckedItems] = useState([]);
  console.log(checkedItems, "checkedItems");
  const [productDescriptionStates, setProductDescriptionStates] = useState({});

  // Current User

  const CurrentUser = useSelector(selectCurrentId);

  // Cart Details

  const AllCartDetail = useSelector(AllCartDetails);
  // console.log(AllCartDetail, 'AllCartDetail');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCart(CurrentUser));
  }, [CurrentUser]);

  useEffect(() => {
    setDataSource(AllCartDetail);
    const filteredItems = AllCartDetail?.filter((item) => item.productQuantity > 0);
    setCheckedItems(filteredItems);
  }, [AllCartDetail]);

  const adjustCount = async (change, item, id, productQuantity) => {
    console.log(productQuantity, 'productQuantity');
    const newCount = item + change;

    if (newCount > 0 && newCount <= productQuantity) {
      const data = {
        quantity: newCount,
      };
      updateAddCart(data, id);

    } else {
      OpenNotification({
        description: `New quantity exceeds product quantity`,
      });
    }
  };

  // Update Cart

  const updateAddCart = async (data, id) => {
    try {
      const response = await baseRequest.put(
        `${APIURLS.ADD_CART_QUANTITY}${id}`,
        data
      );
      dispatch(GetAllCart(CurrentUser));
      setCartId(response.data);
    } catch (error) {
      console.log(error.response, "add error");
    }
  };

  const toggleDescription = (id) => {
    setProductDescriptionStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Delete Function

  const handleDelete = async (id) => {
    try {
      await baseRequest.delete(`${APIURLS.ADD_CART_DELETE}${id}`);
      dispatch(GetAllCart(CurrentUser));
    } catch (error) {
      console.log(error.response, "error");
    }
  };

  // CheckBox onChange

  const onChange = (id) => {
    const index = checkedItems.findIndex((item) => item.addToCartId === id);
    let updatedCheckedItems;

    if (index !== -1) {
      // Remove the item if it exists
      updatedCheckedItems = checkedItems?.filter(
        (item) => item.addToCartId !== id
      );
    } else {
      // Add the item if it doesn't exist
      const selectedItem = datasource.find((item) => item.addToCartId === id);
      updatedCheckedItems = [...checkedItems, selectedItem];
    }
    setCheckedItems(updatedCheckedItems);
  };

  console.log(datasource, 'datasource578');

  return (
    <StyledProductsView>
      <h1 style={{ margin: "30px 0px" }}>Your Order</h1>
      <CartOrderDetails
        setCurrentStep={setCurrentStep}
        data={checkedItems}
        datasource={datasource}
      />
      <CustomRow space={[12, 12]} style={{ margin: "20px 0px" }}>
        <Col span={14} md={14} lg={12}>
          <span className="heading">Items ({datasource.length} item)</span>
        </Col>

        <Col span={5} md={5} lg={6} style={{ textAlign: "center" }}>
          <span className="heading">Quantity</span>
        </Col>

        <Col span={5} md={5} lg={6} style={{ textAlign: "center" }}>
          <span className="heading">Sub-total</span>
        </Col>
      </CustomRow>
      <div className="pro">
        {datasource.length === 0 ? (
          <EmptyProductPage />
        ) : (
          <>
            {datasource.map((item, index) => {
              return (
                <div
                  style={{ position: "relative" }}
                  className="products"
                  key={item.addToCartId}
                >
                  <CustomRow>
                    <Col
                      span={2}
                      md={2}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <CustomCheckBox
                        disabled={item.productQuantity === 0}
                        checked={
                          item.productQuantity > 0 &&
                          checkedItems.some(
                            (checkedItem) =>
                              checkedItem.addToCartId === item.addToCartId
                          )
                        }
                        onChange={() => onChange(item.addToCartId)}
                      />
                    </Col>
                    <Col span={24} md={10}>
                      <div className="productBox">
                        <img
                          src={`${base}${item.productVarientImageUrl}`}
                          alt={item?.productName || "product"}
                          title={item?.productName || "product"}
                          className="product_img"
                        />
                        <div>
                          <div className="Productname">{item?.productName} </div>
                          <div className="productTitleName">
                            <div className='' style={{ maxHeight: '4em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                              <p> {item?.listDescription || '...'}</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: 'column',
                              }}
                            >
                              <span className="amountPlusQty">{`(Product Qty : ${item.productQuantity})`}</span>
                              <span className="amount">Price : ₹ <AmountFormat number={item.totalAmount} /></span>
                              <span className="mrp">MRP : ₹ <AmountFormatmrp number={item.mrp} /></span>
                            </div>
                            <div>
                              {item.productQuantity > 0 ? (
                                <InStock />
                              ) : (
                                <OutOFStock />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col span={24} md={6} style={{ textAlign: "center" }}>
                      <div className="counterSec">
                        <div className="counterSection">
                          <button
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              adjustCount(-1, item.quantity, item.addToCartId, item.productQuantity)
                            }
                            disabled={item.productQuantity === 0}
                          >
                            -
                          </button>
                          <span className="count">{item.quantity}</span>
                          <button
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              adjustCount(1, item.quantity, item.addToCartId, item.productQuantity)
                            }
                            disabled={item.productQuantity === 0}
                          >
                            +
                          </button>
                        </div>
                        {/* <span className="countText">
                          Delete | Save for later
                        </span> */}
                      </div>
                    </Col>

                    <Col span={24} md={6} style={{ textAlign: "center" }}>
                      <div className="counterAmountContent">
                        <span>₹{item.totalAmount * item.quantity}</span>
                        <span>
                          Saved: ₹{item.discountAmount * item.quantity}
                        </span>
                      </div>
                    </Col>
                    <img
                      onClick={() => handleDelete(item.addToCartId)}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "15px",
                        cursor: "pointer",
                      }}
                      src={SvgIcons.Delete}
                      alt=""
                    />
                  </CustomRow>
                </div>
              );
            })}
          </>
        )}
      </div>
    </StyledProductsView>
  );
};
