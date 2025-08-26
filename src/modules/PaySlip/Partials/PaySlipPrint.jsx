import { CustomModal, CustomRow, Flex } from "@components/others";
import { Col } from "antd";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  BillTable,
  DotedLine,
  HeaderTitle,
  Maindesign,
  PrintHolder,
  PrintSubTitle,
  PrintTableFooterHolders,
  PrintTitle,
  PrintViewValue,
  PrintWrapper,
  TopHeadTitle,
} from "./Style";
import { SvgIcons } from "@assets/images";
import { IoPrintOutline } from "react-icons/io5";
import { Button } from "@components/form";
import PaySlipPrintPdf from "./PaySlipPrintPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import dayjs from "dayjs";
import AmountFormat from "@modules/CommonComponents/AmountFormate";
import { base } from "@request/request";

const PaySlipPrint = ({ InvoiceData, payslipTrigger }) => {


  console.log(InvoiceData, 'InvoiceData');

  const [imageUrl, setImageUrl] = useState();

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  // ----------  Form Reset UseState ---------
  const [modelwith, setModelwith] = useState(0);

  // ===== Modal Functions Start =====
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {

  }, [payslipTrigger])


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPdf = () => {
    const pdfDownloadLink = document.getElementById("pdfDownloadLink");
    console.log(pdfDownloadLink, "pdfDownloadLink");
    if (pdfDownloadLink) {
      pdfDownloadLink.click();
    }
  };

  const TodayDate = dayjs();

  const HeaderTable = () => {
    return (
      <Fragment>
        <PrintWrapper>

          <PDFDownloadLink fileName="Invoice" id="pdfDownloadLink"
            document={<PaySlipPrintPdf />} />

          <CustomRow space={[2, 2]}>
            <Col span={24} md={4}>
              <img src={`${base}${InvoiceData?.companyImage}`}
                alt='companylogo' title='companylogo' style={{ width: "60px" }} />
            </Col>
            <Col span={24} md={20}>
              <HeaderTitle>
                <h1>
                  Tax Invoice/Bill of supply/cash memo (Original for Recipient)
                </h1>
                <br />
                <DotedLine>
                  <h1>Invoice number : {InvoiceData?.orderItemListId}</h1>
                </DotedLine>
              </HeaderTitle>
            </Col>
          </CustomRow>

          <CustomRow space={[0, 10]}>
            <Col span={24} md={24}>
              <Flex>
                <TopHeadTitle>
                  <h2>Sold By :</h2>
                </TopHeadTitle>
              </Flex>
            </Col>

            <Col span={24} xs={10} sm={8} md={24}>
              <Flex>
                <TopHeadTitle>
                  <h2>
                    Shipping-From Address :{" "}
                    <span>
                      amet consectetur. Lorem nunc amet nec commodo eu et.
                      Interdum sapien odio commodo odio ornare amet aliquam
                      lorem. Morbi fermentum aliquet pulvinar dictumst lectus.
                      amet consectetur. Lorem nunc amet nec commodo eu et.
                      Interdum sapien odio commodo odio ornare amet aliquam
                      lorem. Morbi fermentum aliquet pulvinar dictumst lectus.
                      {/* {orderInvoiceList?.companyAddress} */}
                    </span>{" "}
                  </h2>
                </TopHeadTitle>
              </Flex>
            </Col>

            <Col span={24} md={24}>
              <Flex>
                <TopHeadTitle>
                  <h2>GST IN :&nbsp;&nbsp;&nbsp;</h2>
                </TopHeadTitle>
                {InvoiceData?.gst}
                {/* <TopHeadTitle>
                  <h2>State/UT Code :</h2>
                </TopHeadTitle> */}
              </Flex>
            </Col>
          </CustomRow>

          <hr
            style={{
              border: "1px solid",
              marginTop: "15px",
            }}
          />

          <CustomRow space={[0, 24]} style={{ margin: "20px 0px" }}>
            <Col span={24} md={12}>
              <CustomRow space={[0, 10]}>
                <Col span={24} xs={10} sm={8} md={24}>
                  <h1 style={{ fontSize: '16px', textDecoration: 'underline' }} >Order Details</h1>

                  <div className="orderdetail" style={{ textAlign: 'start' }}>
                    <div>
                      Order ID <span>: {InvoiceData?.orderId}; </span>
                    </div>
                    <div>
                      Order Date <span>: {InvoiceData?.date}; </span>
                    </div>
                    <div>
                      Invoice Date <span>: {TodayDate.format('YYYY-MM-DD')};</span>
                    </div>

                  </div>

                </Col>
                <Col span={24} xs={10} sm={8} md={24}>
                  <h2>  Total items <span>: {InvoiceData?.quantity} </span>  </h2>
                </Col>
              </CustomRow>
            </Col>
            <Col span={24} md={12}>
              <HeaderTitle>
                <h1 style={{ fontSize: '16px', textDecoration: 'underline' }} >Billing Address</h1>
              </HeaderTitle>
              <div className="billingaddres">
                <div> Name : <span>{InvoiceData?.companyName} ;</span></div>
                <div>Phn : <span>{InvoiceData?.companyPhoneNumber} ;</span></div>
                <div>Email : <span>{InvoiceData?.companyEmail} ;</span></div>
                <div>Address : <span>{InvoiceData?.companyAddress},<div> {InvoiceData?.companyCountry}, {InvoiceData?.companyPincode} ;</div></span></div>
              </div>

            </Col>

          </CustomRow>
        </PrintWrapper>
      </Fragment>
    );
  };

  console.log(imageUrl, "imageUrl");

  return (
    <Fragment>
      <PrintWrapper>
        <PrintHolder ref={componentRef}>
          <Maindesign>

            <div className="printicon">

              <Button.Primary onClick={handlePrint} className='printhide'
                icon={<IoPrintOutline size={20} style={{ marginRight: "5px" }} />}
                text={"Print"} />

              {/* <Button.Primary onClick={handleDownloadPdf} className='printhide'
                icon={<IoPrintOutline size={20} style={{ marginRight: "5px" }} />}
                text={"Download PDF"} /> */}

            </div>

            <HeaderTable />
          </Maindesign>

          <BillTable>
            <table>
              <thead>
                <tr>
                  <th>SI.No</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th style={{ borderRight: "none" }}>
                    Unit
                  </th>
                  <th style={{ borderLeft: "none" }}>Qty</th>

                  {/* <th>  Tax <br />  Type </th> */}
                  <th>  Tax <br /> Amount </th>
                  <th> Total <br />  Amount</th>
                </tr>
              </thead>
              {/* <tbody>
                {orderInvoiceList?.orderItemDetails?.map((item, index) => (
                  <tr>
                    <td>{item?.productName}</td>
                    <td>{item?.totalPrice}</td>
                    <td>{InvoiceData?.quantity}</td>
                    <td>{item?.gst}</td>
                    <td>{item?.gstTaxAmount}</td>
                    <td>{item?.totalAmount}</td>
                  </tr>
                ))}
              </tbody> */}

              <tr>
                <td>1</td>
                <td>{InvoiceData?.productName} </td>
                <td>{InvoiceData?.description} </td>
                <td>{InvoiceData?.unit} </td>
                <td>{InvoiceData?.quantity}</td>
                <td>{InvoiceData?.gstTaxAmount} </td>
                <td>{InvoiceData?.totalAmount} </td>
              </tr>

              <tr>
                <td colSpan={9}>
                  <Flex spacebetween={true}>
                    <h3>Total</h3>
                    <h3>₹ <AmountFormat number={InvoiceData?.totalAmount} /></h3>
                  </Flex>
                </td>
              </tr>

            </table>
          </BillTable>

          <PrintTableFooterHolders>
            <CustomRow>
              <Col span={24} md={20}>
                <CustomRow>

                  <Col span={24} xs={222} sm={22} md={22}>
                    <Flex>
                      <HeaderTitle>
                        <div className="orderdetail" style={{ textDecoration: 'underline' }}>Place of Delivery</div>
                      </HeaderTitle>
                    </Flex>
                    <div className="orderdetail" style={{ textAlign: 'start' }}>
                      <div>  Address Type <span>: {InvoiceData?.addressType}; </span> </div>
                      <div> Address <span>: {InvoiceData?.streetAddress}; </span></div>
                      <div> City <span>: {InvoiceData?.city}; </span></div>
                      <div> Country <span>: {InvoiceData?.country};</span> </div>
                      <div>Post Pin <span>: {InvoiceData?.postalCode};</span> </div>
                    </div>
                  </Col>


                </CustomRow>
              </Col>

              <Col span={24} md={4}>
                <CustomRow>
                  <Col span={24} md={24}>
                    <PrintTitle Size={"14px"} TextAlign={"center"}>
                      Justclickin 
                    </PrintTitle>
                    <div style={{ width: "50%" }}>
                      <img src={`${base}${InvoiceData?.signature}`}
                        alt={InvoiceData?.productName || 'signature'}  title={InvoiceData?.productName || 'signature'}  style={{ width: "100px" }} />
                    </div>
                    <PrintTitle Size={"14px"}
                      TextAlign={"center"} MT={"30px"} BTM={"20PX"} >
                      Authorised Signatory
                    </PrintTitle>
                  </Col>
                </CustomRow>
              </Col>
            </CustomRow>
          </PrintTableFooterHolders>
          <PrintTableFooterHolders>
            <hr
              style={{
                border: "1px solid",
                // marginTop: "5px",
              }}
            />
            <CustomRow>
              <Col span={12} md={21}></Col>
              <Col span={12} md={3}>
                <CustomRow>
                  <Col span={24} md={24}>
                    <PrintTitle Size={"14px"} TextAlign={"center"} MT={"10px"}>
                      <img src={`${base}${InvoiceData?.companyImage}`}
                        alt='companylogo' title='companylogo' style={{ width: "40px" }} />
                    </PrintTitle>

                    <PrintTitle Size={"14px"} TextAlign={"center"}>
                      Thank You!
                    </PrintTitle>
                    <PrintTitle Size={"14px"} TextAlign={"center"}>
                      <p style={{ fontSize: "10px" }}>(for shopping with us)</p>
                    </PrintTitle>
                  </Col>
                </CustomRow>
              </Col>
            </CustomRow>
          </PrintTableFooterHolders>
          <PrintTableFooterHolders>
            {/* <div style={{ pageBreakInside: "avoid" }}> */}
            <CustomRow gutter={[12, 24]}>
              <Col span={24} md={24}>
                <PrintSubTitle Under Size={"14px"} Weight={"700"}>
                  Return Policy :&nbsp;
                  <span
                    style={{
                      // color: "#545454",
                      fontFamily: "Red Rose, serif",
                      fontSize: "11px",
                      fontWeight: "400",
                    }}
                  >
                    At Justclickin  we try to deliver perfectly each and every time.
                    But in the off-chance that you need to return the item,
                    please do so with the
                    <b style={{ fontWeight: "bold", fontSize: "12px" }}>
                      &nbsp; ORIGINAL BRAND BOX/PRICE tag, original packing and
                      invoice
                    </b>
                    without which it will be really difficult for us to act on
                    your request. Please help us in helping you, Terms and
                    conditions apply. The goods sold are intended for end-user
                    consumption and not for re-sale.
                  </span>
                </PrintSubTitle>
                {/* <PrintTitle Size={"10px"}> */}
                <PrintViewValue></PrintViewValue>
                {/* </PrintTitle> */}
              </Col>
              <Col span={24} md={24}>
                <Flex>
                  <PrintSubTitle Under Size={"14px"} Weight={"700"}>
                    Contact Justclickin  :
                  </PrintSubTitle>
                  <PrintViewValue>
                    | www.Justclickin .com | help center
                  </PrintViewValue>
                </Flex>
              </Col>
            </CustomRow>
            {/* </div> */}
          </PrintTableFooterHolders>
        </PrintHolder>
      </PrintWrapper>

      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={modelwith}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </Fragment>
  );
};

export default PaySlipPrint;
