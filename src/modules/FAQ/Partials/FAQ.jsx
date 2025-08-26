import { CustomRow, Flex } from "@components/others";
import { Col } from "antd";
import React, { useState } from "react";
import { SvgIcons } from "@assets/images";
import { BreadcrumbTag, Faqcontainer, ImgTag } from "./Style";
import { FaqData } from "./FaqData";

const FAQ = () => {

  return (
      <CustomRow space={[24, 24]}>
        <Col span={24} md={8} style={{ padding: "20px 20px" }}>
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
        <Col span={24} md={14}>
          <Flex start={true}>
            <ImgTag>
              <img src={SvgIcons.faq} alt="loading" />
            </ImgTag>
          </Flex>
        </Col>
        <Col span={24} md={24}>
          <Flex center={true}>
            <p style={{ fontWeight: "700", fontSize: "24px" }}>
              How can we help you ?
            </p>
          </Flex>
        </Col>
        <Col span={24} offset={3} md={20}>
            <Flex >
            <p style={{fontSize:'22px',fontWeight:'600'}}>Top FAQs</p>
            </Flex>
        </Col>
        <Col span={24} md={24}>
          <Flex center={true}>        
            <Faqcontainer accordion items={FaqData} bordered={false} />
          </Flex>
        </Col>
      </CustomRow>
  );
};

export default FAQ;
