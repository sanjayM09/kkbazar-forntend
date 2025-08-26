import { SvgIcons } from "@assets/images";
import { CustomRow, Flex } from "@components/others";
import { BreadcrumbTag, ImgTag } from "@modules/FAQ/Partials/Style";
import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { ContentTag, MainContent } from "./Style";


const AboutUS = () => {
  return (
    <>
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
        <Col span={24} md={24}>
          <Flex center={true}>
            <ImgTag>
              <img src={SvgIcons.About_Us} alt="loading"  />
            </ImgTag>
          </Flex>
        </Col>
        <Col span={24} md={24}>
          <Flex center={true}>
            <ContentTag>
              <br />
              <p>
                Why <span>Justclickin  ?</span>
              </p>
              <p>
                Many people get great products directly from manufacturers and
                sell from a boutique. In markets or from their home. At Justclickin 
                you can enjoy buying the same products online. Easy return if
                you don't like what you buy.
              </p>
              <p>
                <br />
                Why are we <span>different ?</span>
              </p>
            </ContentTag>
          </Flex>
        </Col>
        <br />
      </CustomRow>
      <CustomRow space={[24, 24]} style={{marginTop:'20px'}}>
        <Col span={24} md={12}>
          <MainContent>
            <img src={SvgIcons.badge} alt="loading" />
            <br />
            <p>We are Exclusive</p>
            <br />
            <h4>
              MyShopPrime is an exclusive shopping experience. You get access to
              our store only from a friend. The store has selected products that
              match your taste!.
            </h4>
          </MainContent>
        </Col><br/>
        <Col span={24} md={12}>
          <MainContent>
            <img src={SvgIcons.price_tag} alt="loading" />
            <br />
            <p>We are Cheap :)</p>
            <br />
            <h4>
              Most products on Justclickin  are Sourced direct from and wholesalers.
              We are without cheapest online store you will find.
            </h4>
          </MainContent>
        </Col>
        <Col span={24} md={12}>
          <MainContent>
            <img src={SvgIcons.shield} alt="loading" />
            <br />
            <p>We Protect Buyers</p>
            <br />
            <h4>
              Online payments made on MyShopPrime are absolutely safe and
              secure. We offer free and easy returns if you don't like a
              product.
            </h4>
          </MainContent>
        </Col>
        <Col span={24} md={12}>
          <MainContent>
            <img src={SvgIcons.shield_profile} alt="loading" />
            <br />
            <p>We are Personalized</p>
            <br />
            <h4>
            If you are looking for something specific,
like a Mobiles, ask the friend who shared
Justclickin  link with you. We are
sure you will get what you want. We are that Personalized and that much fun!
            </h4>
          </MainContent>
        </Col>
      </CustomRow>
    </>
  );
};

export default AboutUS;
