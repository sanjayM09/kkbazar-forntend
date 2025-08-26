import { CustomRow } from "@components/others";
import { Col } from "antd";
import React from "react";
import { CancellationHead } from "./Style";

const CancellationPolicy = () => {
  return (
    <div>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={24}>
          <CancellationHead>
            <h1>Justclickin  Cancellation and Refund Policy</h1>
            <p>
              At Justclickin , we strive to ensure your utmost satisfaction with
              every purchase. If you wish to cancel an order or request a
              refund, please review our policies below
            </p>
            <h3>Cancellation Policy:</h3>
            <p>
              <strong>1. Order Cancellation:</strong> You can cancel your order
              within 24 hours of placing it. Simply contact our customer support team at Phone: +91-9443844922 with your order number and
              cancellation request.
            </p>
            <p>
              <strong>2. Cancellation After Dispatch:</strong> Once your order
              has been dispatched, it cannot be cancelled. In such cases, you
              can initiate a return once you receive the product.
            </p>
            <h3>Refund Policy:</h3>
            <p>
              <strong> 1. Eligibility for Refunds:</strong> Refunds are
              applicable in the following cases:
              <br />
              • Product(s) received in damaged or defective condition.
              <br />
              • Product(s) not as described on the website.
              <br />• Non-delivery of the product(s) within the specified
              timeframe.
            </p>
            <p>
              <strong>2. Refund Process:</strong> If your refund request is
              approved, we will initiate the refund process. Refunds will be
              issued to the original payment method used during the purchase.
            </p>

            <p>
              <strong>3. Refund Timeframe:</strong> Please allow [insert
              timeframe] for the refund to be processed and reflected in your
              account. The actual time taken for the refund to reflect may vary
              depending on your payment provider.
            </p>
            <p>
              <strong>4. Refund Amount:</strong>The refund amount will include
              the product price and any applicable taxes. Shipping charges, if
              any, are non-refundable.
            </p>
            <p>
              <strong>5. Refunds for Promotional Items: </strong>
              If you received a promotional or free item as part of your
              purchase and you wish to return the purchased item, the value of
              the promotional item will be deducted from your refund amount.
            </p>

            <h3>Return Policy:</h3>
            <p>
              <strong>1. Initiating a Return: </strong>To initiate a return,
              please contact our customer support team within 10 days of
              receiving the product. Provide your order number and details of
              the issue.
            </p>
            <p>
              <strong>2. Return Shipping:</strong> You may be responsible for
              the return shipping costs unless the return is due to our error
              (e.g., damaged, defective, or incorrect item).
            </p>
            <p>
              <strong>3. Return Condition:</strong> Returned products must be in
              their original packaging and in the same condition as when you
              received them. Any used, altered, or damaged items may not be
              eligible for a refund.
            </p>
            <h3>Contact Us:</h3>
            <p>
              If you have any questions or concerns regarding our cancellation
              and refund policy, please feel free to contact us at Phone:
              +919443844922
            </p>
            <p>Email: Justclickin0508@gmail.com</p>
            <p>
              Address : Building No./Flat No.: 29/1, PUTHEN BANGLOW ROAD,
              Putheri, NAGERCOIL, Kanniyakumari, Tamil Nadu
            </p>
            <p>PIN Code: 629001.</p>
          </CancellationHead>
        </Col>
      </CustomRow>
    </div>
  );
};

export default CancellationPolicy;
