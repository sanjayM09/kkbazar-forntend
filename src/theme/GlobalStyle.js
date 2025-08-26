import { Styles } from "@components/form/CommonProperties";
import styled, { createGlobalStyle } from "styled-components";
import { THEME } from ".";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Nunito Sans', sans-serif; 
    } 
   
  & .ant-menu-item-icon {
    font-size: 23px !important;
   }

   .ant-form-item .ant-form-item-explain-error {
    color: ${Styles.errorColor};
    font-weight: ${Styles.errorFontWeight};
    font-size: ${Styles.errorFontSize};
    }
   .ant-drawer .ant-drawer-body {
    padding: 0% !important;
    overflow: hidden !important;
   }

   .scroll {
    overflow-y: scroll;
   }

    ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #1677ff; 
        cursor: pointer;
        border-radius: 10px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(3 108 255 / 43%);
        border-radius: 10px;
    }
    
    /* Handle on hover */
    /* ::-webkit-scrollbar-thumb:hover {
        background: rgb(3 108 255 / 43%);
        visibility: visible;
    } */

    /* Antd Form  */
    .ant-form-item {
        margin-bottom: 6px !important;
    }

    &.ant-drawer-right>.ant-drawer-content-wrapper{
        top:50px;
        right:0;
        bottom:50px;
        transition:0.5s;

        @media ${THEME.MOBILEL} {
            right:50px;
        }
    }

    &.ant-drawer .ant-drawer-panel-motion-right-leave-active{
        transform:translateX(150%)
    }

   &.ant-drawer .ant-drawer-body{
        padding:20px !important;
        overflow-y:scroll !important;
    }

    .ant-select-show-search:where(.css-dev-only-do-not-override-mzwlov).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: #fdecda !important;

  }


  :where(.css-dev-only-do-not-override-mzwlov).ant-radio-wrapper span.ant-radio+* {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
    top: 10px;
    margin-top: 10px;
}


:where(.css-dev-only-do-not-override-mzwlov).ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: #EF8F21;
    background: #EF8F21 !important;
}
  


  .ant-dropdown .ant-dropdown-menu{
    width: 250px !important;
    background: #EF8F21 !important;
    border-radius: 0;
    margin-left: 50px;
    padding: 5px 0px;
  }

  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item{
    color: #fff;
    font-family: "Red Rose", serif;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 20px;
  }

  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover{
    background: #D27E1D;
  }

  @media screen and (max-width: 667px) {
    .ant-dropdown .ant-dropdown-menu{
    width: 150px !important;
  }

  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item{
    font-weight: 400;
    font-size: 16px;
    padding: 5px 15px;
  }
  }

  /* .hiMMoF .steps_main:where(.css-dev-only-do-not-override-mzwlov).ant-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
    background-color: white;
    border: dashed;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-steps .ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon {
    color: white;
}

:where(.css-dev-only-do-not-override-mzwlov).ant-steps .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #ef8f21;
    border-color: #ef8f21;
} */

  /* @media screen and (max-width: 600px) {
    
    .ant-steps {
        padding: 0;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 5px ;
        background-color: #fbe4ca;
        flex-direction: column;
        text-align: center;
        padding-bottom: 20px;
    }  
    .ant-steps.ant-steps-dot .ant-steps-item-tail, .hCCYEU .steps_main:where(.css-dev-only-do-not-override-mzwlov).ant-steps.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
        width: 55%;
        margin-top: 29px;
        margin-bottom: 0px;
        padding: 0px;
        margin-left: 12px;
    }
    .ant-steps.ant-steps-dot .ant-steps-item-tail {
      top: 82.5%;
      display: flex;
    }
    .ant-steps .ant-steps-item {
      margin-top: 20px !important;
    }
} */

.onlinepayresponse {
  .ant-radio-wrapper span.ant-radio+* {
    margin-top: 0px !important;
}
}

.Deliverytype {
  .ant-radio-button-wrapper:not(:first-child)::before {
  width: 0px  !important;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    width: 0;
  }
}


`;

export default GlobalStyle;

// export const ProductReturnModal = styled.div`
//   .ant-modal .ant-modal-content {
//     padding: 0px 0px !important;
//   }
// `
