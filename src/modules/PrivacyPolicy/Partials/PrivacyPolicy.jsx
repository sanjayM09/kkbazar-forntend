import { CustomRow } from "@components/others";
import { BreadcrumbTag } from "@modules/FAQ/Partials/Style";
import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { PrivacyContent } from "./Style";


const PrivacyPolicy = () => {
  return (
    <div>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={24}>
          <BreadcrumbTag
            separator=">"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: <p>my order</p>,
              },
            ]}
          />
        </Col>
      </CustomRow>
      <PrivacyContent>
        <h1>PRIVACY POLICY</h1>
        {/* <h4>Introduction</h4> */}
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Justclickin  is committed to protecting
          the privacy and security of your personal information. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          information when you use our website or service.
        </p>
        <p>Information We Collect</p>
        <p>
          <strong>1.1 Personal Information:</strong> We may collect personal
          information such as your name, email address, phone number, shipping
          address, and payment information when you register an account, make a
          purchase, or interact with our website.
        </p>

        <p>
          <strong>1.2 Browsing Information:</strong> We automatically collect
          certain information about your device and browsing activity, including
          your IP address, browser type, pages visited, and referring website.
        </p>

        <p>
          <strong>1.3 Cookies:</strong> We use cookies and similar tracking
          technologies to personalize your experience, analyze website usage,
          and deliver targeted advertisements. You can manage your cookie
          preferences through your browser settings
        </p>

        <h3>How We Use Your Information</h3>

        <p>
          <strong>2.1 Providing Services:</strong> We use your personal
          information to process orders, fulfill requests, and provide customer
          support.
        </p>

        <p>
          <strong>2.2 Communication:</strong> We may send you transactional
          emails, such as order confirmations and shipping updates, as well as
          promotional communications about our products and services. You can
          opt out of promotional emails at any time.
        </p>

        <p>
          <strong>2.3 Improving Our Services:</strong> We analyze browsing and
          purchase behavior to improve our website, products, and marketing
          strategies.
        </p>

        <p>Information Sharing</p>

        <p>
          <strong>3.1 Service Providers:</strong> We may share your information
          with third-party service providers who assist us in operating our
          website, processing payments, and delivering products.
        </p>

        <p>
          <strong>3.2 Legal Compliance:</strong> We may disclose your
          information to comply with applicable laws, regulations, or legal
          processes, or to protect our rights or property.
        </p>

        <p>
          <strong>3.3 Business Transfers:</strong> In the event of a merger,
          acquisition, or sale of assets, your information may be transferred as
          part of the transaction. We will notify you of any such change in
          ownership or control of your personal information.
        </p>

        <h3>Data Security</h3>

        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, use, or disclosure. However, no
          method of transmission over the internet or electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>

        <h3>Your Choices</h3>
        <p>
          <strong>5.1 Access and Update: </strong>You can access and update your
          account information at any time by logging into your account settings.
        </p>

        <p>
          <strong>5.2 Opt-Out:</strong> You can opt out of receiving promotional
          communications by following the instructions provided in the
          communication or contacting us directly.
        </p>

        <h3>Children's Privacy</h3>

        <p>
          Our website and services are not directed to children under the age of
          13. We do not knowingly collect personal information from children
          under 13. If you believe we have inadvertently collected information
          from a child under 13, please contact us immediately.
        </p>

        <h3>Changes to this Privacy Policy</h3>

        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          material changes by posting the updated policy on our website.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at Phone: +919443844922
        </p>
        <p>Email: Justclickin0508@gmail.com</p>
        <p>
          Address : Building No./Flat No.: 29/1, PUTHEN BANGLOW ROAD, Putheri,
          NAGERCOIL, Kanniyakumari, Tamil Nadu
        </p>
        <p>PIN Code: 629001.</p>
        <p>
          By using our website or services, you consent to the collection, use,
          and disclosure of your information as described in this Privacy
          Policy.
        </p>
      </PrivacyContent>
    </div>
  );
};

export default PrivacyPolicy;
