import React, { Fragment } from "react";
import dayjs from "dayjs";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { SvgIcons } from "@assets/images";

const PaySlipPrintPdf = () => {

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 11,
      lineHeight: 1.5,
      padding: "20px 30px",
      flexDirection: "column",
    },
    Dotted: {
      border: "2px dashed #000",
      borderRadius: "22px",
      background: "#F3F3F3",
      padding: "7px",
      fontSize: "13px",
      // display: "inline-block",
      fontWeight: "400",
      // lineHeight: "18.74px",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    hr: {
      //   flexDirection: "row",
      borderTopWidth: 1, //
      borderColor: "black",
      width: "100%", //
      //   marginVertical: 10, //
    },
    row: {
      flexDirection: "row",
      border: "1px solid black",
    },
    rows: {
      flexDirection: "row",
      border: "1px solid black",
      justifyContent: "space-between",
      padding: "10px 20px",
      marginBottom: 10,
    },
    column: {
      flex: 1,
      padding: "10px 0",
      borderRight: "1px solid black",
    },
    unitPriceColumn: {
      flex: 1,
      padding: "10px 0",
      borderRightWidth: 0,
    },
    headerText: {
      fontSize: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
    cellText: {
      fontSize: 10,
      textAlign: "center",
    },
    logoImage: {
      width: 50,
    },
    centeredContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "space-between",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "space-between", //
    },
    labelText: {
      fontSize: 14,
      padding: 5, //
    },
    amountText: {
      fontSize: 14,
      padding: 5, //
    },
  });


  const PrintedDate = dayjs().format("DD-MMM-YY [at] HH:mm");
  const formattedDate = dayjs().format("DD-MMM-YY");
  const formattedAmount = "";
  
  const Header = () => {
    return (
      <>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.6, alignItems: "flex-start" }}>
            <Image src={SvgIcons.Logo} style={styles.logoImage} />
          </View>
          <View
            style={{
              flex: 0.4,
              alignItems: "flex-end",
              gap: "3px",
            }}
          >
            <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
              Tax Invoice/Bill of supply/cash
              <br /> memo (Original for Recipient)
            </Text>

            <View style={styles.Dotted}>
              <Text style={{ fontSize: "13px", fontWeight: "400" }}>
                Invoice number : 83749405873
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.5, gap: "10px" }}>
          <View style={{ gap: "5px", padding: "5px" }}>
            <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
              Sold By&nbsp;:&nbsp;12.
            </Text>
            <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
              Shipping-From Address&nbsp;:&nbsp;gg.
            </Text>
            <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
              GST IN&nbsp;:&nbsp;gg,State/UT Code :
            </Text>
            {/* <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
              GST IN&nbsp;:&nbsp;{record?.email}
            </Text> */}
          </View>
        </View>
        <View>
          <View style={styles.hr} />
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: "15px 0px",
          }}
        >
          <View style={{ flex: 0.5, gap: "20px" }}>
            <View style={{ gap: "5px", padding: "5px 0px" }}>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Order No&nbsp;:&nbsp;10236.
              </Text>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Order Date&nbsp;:&nbsp;5265.
              </Text>
              {/* <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Invoice Date&nbsp;:&nbsp;{record?.invoice_date}
              </Text> */}
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Invoice Date&nbsp;:&nbsp;14589
              </Text>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Invoice Details&nbsp;:&nbsp;14589
              </Text>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Pan&nbsp;:&nbsp;14589
              </Text>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Total Items&nbsp;:&nbsp;41
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.5 }}>
            <View style={{ gap: "5px", padding: "5px" }}>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Billing Address&nbsp;:&nbsp;
              </Text>
            </View>
            <View style={{ gap: "5px", padding: "5px" }}>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                hghhghg.
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.5 }}>
            <View style={{ gap: "5px", padding: "5px" }}>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Shipping Address&nbsp;:&nbsp;
              </Text>
            </View>
            <View style={{ gap: "5px", padding: "5px" }}>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                chennai.
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  const data = [
    {
      sNo: 1,
      description: "Item 1",
      unitPrice: 10.0,
      qty: 2,
      netAmount: 20.0,
      taxRate: 5,
      taxType: "Sales Tax",
      taxAmount: 1.0,
      totalAmount: 21.0,
    },
    {
      sNo: 2,
      description: "Item 2",
      unitPrice: 15.0,
      qty: 3,
      netAmount: 45.0,
      taxRate: 5,
      taxType: "Sales Tax",
      taxAmount: 2.25,
      totalAmount: 47.25,
    },
    {
      sNo: 3,
      description: "Item 3",
      unitPrice: 20.0,
      qty: 1,
      netAmount: 20.0,
      taxRate: 5,
      taxType: "Sales Tax",
      taxAmount: 1.0,
      totalAmount: 21.0,
    },
  ];

  const TableHeadings = () => {
    return (
      <View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.headerText}>SI.No</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Description</Text>
          </View>
          <View style={styles.unitPriceColumn}>
            <Text style={styles.headerText}>Unit Price</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Qty</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Net Amount</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Tax Rate</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Tax Type</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Tax Amount</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Total Amount</Text>
          </View>
        </View>
        <View>
          {data.map((item, index) => {
            return (
              <>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.sNo}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.description}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.unitPrice}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.qty}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.netAmount}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.taxRate}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.taxType}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.taxAmount}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.cellText}>{item?.totalAmount}</Text>
                  </View>
                </View>
              </>
            );
          })}

          <View style={{ borderTop: "none" }}>
            <View style={styles.rows}>
              <Text>Total</Text>
              <Text>5000</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{ position: "relative", width: "100vw" }}>
        <View style={{ marginTop: "20px" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: "0.5" }}>
              {/* <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Place of Supply&nbsp;:&nbsp;AAAAA.
              </Text>
              <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                Place of Delivery&nbsp;:&nbsp;BBBBB.
              </Text> */}
            </View>
            <View
              style={{
                flex: "0.5",
                display: "flex",
                // alignItems: "flex-end",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <View style={{ flex: "0.5" }}>
                <Text
                  style={{
                    fontSize: "11px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;Google
                </Text>
                <Text
                  style={{
                    fontSize: "11px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  Authorised Signatory
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page style={styles.page} size={"A4"}>
        <View style={{ flexGrow: 1 }}>
          <Header />
          <TableHeadings />
          <Footer />
          <View style={styles.hr} />
          <View
            style={{
              display: "flex",
              margin: "15px 0px",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Image
              src={SvgIcons.Logo}
              style={{ width: 30, marginRight: "10px" }}
            />
            <Text
              style={{
                fontSize: "11px",
                fontWeight: "500",
              }}
            >
              Thank You!
            </Text>
            <Text
              style={{
                fontSize: "6px",
                fontWeight: "400",
              }}
            >
              (for shopping with us)
            </Text>
          </View>
          <View style={{ display: "flex" }}>
            <View style={{ margin: "5px 0px" }}>
              <Text
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Return Policy&nbsp;&nbsp;:&nbsp;&nbsp;
                <Text
                  style={{
                    fontSize: "8px",
                    fontWeight: "400",
                    marginBottom: "10px",
                  }}
                >
                  At Justclickin  we try to deliver perfectly each and every time.
                  But in the off-chance that you need to return the item, please
                  do so with the ORIGINAL BRAND BOX/PRICE tag, original packing,
                  and invoice without which it will be really difficult for us
                  to act on your request. Please help us in helping you, Terms
                  and conditions apply. The goods sold are intended for end-user
                  consumption and not for re-sale.
                </Text>
              </Text>
            </View>
            <Text
              style={{
                fontSize: "11px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Contact Justclickin  :
              <Text
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  marginBottom: "5px",
                }}
              >
                9056789076 | www.Justclickin .com | help center
              </Text>
            </Text>
          </View>
        </View>
      </Page>
      {/* ))}  */}
    </Document>
  );
};

export default PaySlipPrintPdf;
