import { Breadcrumb, Collapse } from "antd"
import styled from "styled-components"

export const BreadcrumbTag = styled(Breadcrumb)`
color: black;
padding: 20px 20px;
font-weight: 400;
font-size: 20px;

a{
    color: black;

    :hover{
        background: white;
    }
   
   
}


p{
    color: black;
    font-weight: 400;
    font-size: 20px;
}


    
`

export const Faqcontainer = styled(Collapse)`
background: #FAF4F3;
width: 80%;
padding: 20px;

@media screen and (max-width: 768px) {
        padding: 0px;

  }

p{
    font-weight: 600;
    font-size: 16px;
   
}

:where(.css-dev-only-do-not-override-mzwlov).ant-collapse>.ant-collapse-item >.ant-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 0px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 1.5714285714285714;
    cursor: pointer;
    transition: all 0.3s, visibility 0s;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-collapse>.ant-collapse-item >.ant-collapse-header .ant-collapse-expand-icon {
    position: absolute;
    right: 0px;
    padding: 12px;
    color: #EF8F21;
    transform: rotate(90deg);
    size: 18px;

    @media screen and (max-width: 768px) {
        display: none;

  }
    
}

:where(.css-dev-only-do-not-override-mzwlov).ant-collapse-borderless >.ant-collapse-item {
margin: 10px 40px;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-collapse .ant-collapse-content {
    color: rgba(0, 0, 0, 0.88);
    background-color: #FAF4F3;
    /* border-top: 1px solid #d9d9d9; */
}

:where(.css-dev-only-do-not-override-mzwlov).ant-collapse>.ant-collapse-item >.ant-collapse-header .ant-collapse-arrow {
    font-size: 20px;
}

`

export const ImgTag = styled.div`

img {
    width: 100%;
}

`