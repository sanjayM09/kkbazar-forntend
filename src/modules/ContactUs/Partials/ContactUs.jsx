import { SvgIcons } from "@assets/images";
import { Button, CustomInput, CustomTextArea } from "@components/form";
import { CustomRow } from "@components/others";
import { Col, Form } from "antd";
import React from "react";
import { LeftSide, RightSide, StyledIframe } from "../Style";
import styled from "styled-components";
import successHandler from "@request/successHandler";
import errorHandler from "@request/errorHandler";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";

const FooterSec = styled.div`
  margin: 0px 30px;

  a{
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    color: black;
    padding: 5px;
  }

  h3{
    padding: 5px;
  }

  p {
    padding: 5px;
    font-weight: 400;
    font-size: 14px;
  }
`;

const HeaderSec =styled.div`
  margin: 0px 30px;

  p {
    padding: 5px;
    font-weight: 400;
    font-size: 14px;
  }
  

  
`

const ContactUs = () => {
  const [form] = Form.useForm(); // ----- Define Form


  const FeedbackPost = async (data) => {
    await baseRequest
      .post(APIURLS.FEEDBACKPOST, data)
      .then(function (response) {
        successHandler(response, {
          notifyOnSuccess: true,
          notifyOnFailed: true,
          msg: "success",
          type: "success",
        });
        form.resetFields();
        console.log(response, "jhjhjhj");
        return response.data;
      })
      .catch(function (error) {
        console.log(error, "error");
        return errorHandler(error, "dd");
      });
  };

  const onFinish = (values) => {
    console.log(values, "values");
    FeedbackPost(values)
  };

  return (
    <Form
      form={form}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{ margin: "40px 20px" }}>
        <CustomRow>
          <Col span={24} md={20} offset={1}>
            <HeaderSec>
              <h2>Contact us for more information</h2>
              <p>
                We are here to help! At Justclickin, we value our customers and
                are committed to providing you with the best possible shopping
                experience. If you have a question about your order, need help
                with our products, or just want to share your thoughts, we are
                here to help. Please do not hesitate to contact us through any
                of the following methods.
              </p>
              <h3>Customer support</h3>
              <p>Telephone: +91-9442428832</p>
              <p>Email: Justclickin0508@gmail.com</p>
              <p><strong>Hours of operation: Monday to Friday, 9:00 am - 6:00 pm (EST)</strong></p>
              <h3>Live conversations</h3>
              <p>Use our live chat feature on our website for immediate assistance. Our customer service representatives are ready to assist you in real time.</p>
          
              <h3>Please visit us Justclickin Community:</h3>
              <p> 29/1,PUTHEN BANGLOW ROAD,NAGERCOIL,</p>
              <p> Putheri,Kanniyakumari,Tamil Nadu,629001</p>
              <p>
                <strong>Office hours : Monday to Friday, 9:00 am - 6:00 pm (EST)
                . </strong>
                
              </p>
              <h3>Please follow us</h3>
              <p>
                Stay connected with Justclickin on our social media channels for
                updates, promotions and more!
              </p>
              <p>Facebook: KK Marketplace Facebook </p>
              <p>Twitter: @Justclickin</p>
              <p>Instagram: @Justclickin</p>
              <h2>Feedback and suggestions</h2>
              <p>
                Your feedback is important to us. If you have any suggestions or
                comments on how we can improve our services, please let us know.
                You can fill out the form below and our team will get back to
                you as soon as possible.
              </p>
            </HeaderSec>
          </Col>
        </CustomRow>
        <CustomRow>
          <Col offset={2} span={24} md={6} sm={18} xs={18}>
            <LeftSide>
              <h1>Location</h1>
              <p>
                29/1,PUTHEN BANGLOW ROAD,NAGERCOIL,
                <br />
                Putheri,Kanniyakumari,Tamil Nadu,629001
              </p>
              <StyledIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.865977124091!2d77.42776997746056!3d8.216230670714673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f6dc4eabb353%3A0x6cc3a24bea807d39!2s1st%20St%2C%20Putheri%2C%20Tamil%20Nadu%20629001!5e0!3m2!1sen!2sin!4v1715336661436!5m2!1sen!2sin"
                width="100%"
                height="200px"
                //   frameborder="0"
              />
              <h1>follow us</h1>
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={SvgIcons.InstagramNew} />
                <img src={SvgIcons.WhatsappNew} />
                <img src={SvgIcons.YoutubeNew} />
                <img src={SvgIcons.TwitterNew} />
              </div>
            </LeftSide>
          </Col>
          <Col offset={2} span={24} md={10} sm={18} xs={18}>
            <RightSide>
              <h1>FeedBack Form</h1>
              <br />
              <CustomInput
                borderRadius={"0px"}
                background={"white"}
                placeholder={"Enter Your Name"}
                name={"name"}
                rules={[
                  {
                    required: true,
                    message: "Please enter a Name",
                  },
                ]}
              />
              <br />
              <CustomInput
                border={"#ef8f21"}
                borderRadius={"0px"}
                background={"white"}
                placeholder={"Enter a Valid Email Address"}
                name={"address"}
                rules={[
                  {
                    required: true,
                    message: "Please enter a Email",
                  },
                ]}
              />
              <br />
              <CustomTextArea
                borderRadius={"0px"}
                placeholder={"Enter Your Message"}
                name={"message"}
                rules={[
                  {
                    required: true,
                    message: "Please enter a Message",
                  },
                ]}
              />
              <br />
              <Button.Primary
                className={"ContactButton"}
                text={"Submit"}
                htmlType={"Submit"}
              />
            </RightSide>
          </Col>
        </CustomRow>
        <CustomRow>
          <Col span={24} md={20} offset={1}>
            <FooterSec>
              <p>
                Thank you for choosing Justclickin. We look forward to serving
                you!
              </p>
              {/* <p>Privacy Policy | Service Planning</p> */}
              <a href="/privacypolicy">Privacy Policy</a>&nbsp;|&nbsp;
              <a href="">Service Planning</a>
            </FooterSec>
          </Col>
        </CustomRow>
      </div>
    </Form>
  );
};

export default ContactUs;
