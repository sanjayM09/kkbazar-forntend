import { THEME } from "@theme/index";
import styled from "styled-components";


export const HeaderTitle = styled.div`
text-align: end;
  & h1{
      font-family:'Red Rose', serif !important;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
  }
  & h2{
      font-family:'Red Rose', serif !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
  }
  & h4{
     font-family:'Red Rose', serif !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 13.52px;
  }

`;


export const TopHeadTitle = styled.div`
  & h2{
     font-family:'Red Rose', serif !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;

      & span{
      font-family:'Red Rose', serif !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin: 0px 5px;
      }
  }
  

`;
export const DotedLine = styled.div`
   & h1 {
      border: 2px dashed #000;
      border-radius: 22px;   
      background: #F3F3F3;
      padding: 10px;   
      font-size: 18px;      
      display: inline-block; 
      font-weight: 400;
      line-height: 18.74px;
    }

`;

export const VariantBox = styled.div`


& h1{
  font-size:14px;
  font-weight:600;
  text-transform:capitalize;
   
}
&:hover h1{
  color:${THEME.primary}
}
& p{
  color:rgb(103, 119, 136);
  font-weight:400;
}
& span{
  color:#53687e;
}

`;
export const VarImg = styled.div`

& img {
  /* display: flex; */
 max-Width: 90px;
 height: 90px;
}
`;

export const VariantTotal = styled.div`

& p{
  padding:7px 0px;
  /* align-items:end; */
  display: flex;
    justify-content: end;
}

`

export const BillTable = styled.div`
padding: 0px 20px;
 font-family:'Red Rose', serif !important;
overflow-x:auto !important;
& table thead tr th{
    font-size:12px !important;
    padding: 10px;
    font-family: "Red Rose", serif !important;
    font-weight:600;
    
}

& table tbody tr td{
    font-size:12px !important;
    padding:5px
}

@media print {
    
}
table {
  width: 100%;
  height: 200px;
  border-collapse: collapse;
  /* padding: 2px; */
  margin-bottom:20px !important;
  border:2px solid #656565;

}

th {
  border-bottom: 1px solid black;
  border: 2px solid #656565;
  color:#000;
}

td {
  text-align: center;
  border: 2px solid #656565;
}

td h3 {
  text-align: start;
  padding: 11px;
  font-size: 15px;

}
`;

export const Maindesign = styled.div`
background-color: var(--light-color);
width: 100%;
margin: 0 auto !important;
padding: -1 30px;
& h4 {
    margin: 5px 0;
}
& h3 {
    margin: 5px 0;
    color: ${THEME.primary_color};
    font-size: 26px;
    font-weight: 600;
}

.page-header,
.page-header-space {
  height: 100px;
}

.page-footer-space {
  height: 50px;
}

.footer_sign{
    border:1px solid black;
    padding:2px 5px;
    height:70px;    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}



@media print {
    .page-footer {
font-family:'Times New Roman', Times, serif !important;

  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  padding: 0 30px;
}
}

.page-header {
  position: fixed;
  top: 0mm;
  width: 100%;
}
.page {
  page-break-after: always !important;
  height: 20vh;
  margin-top: 52%;
}

@media print {
  thead {
    display: table-header-group;
  }
  tfoot {
    display: table-footer-group;
  }
}
`;


export const PrintHolder = styled.div`
    /* border: 1px solid; */
    padding: 10px 10px;
    @media print{     
        width:100%;
        margin:auto;
        .printhide {
          display: none;
        }
        .printicon {
          display: none;
        }
    }

    .printicon {
      display: flex;
      align-items: center;
      justify-content: end;
      @media screen and (max-width: 400px) {
        flex-direction: column;
      }
    }
`

export const PrintSubTitle = styled.span`
font-size:${props => props.Size || '12px'};
font-family:'Red Rose', serif !important;
text-transform:${props => props.UPPER ? 'uppercase' : 'none'};
font-weight:${props => props.Weight || '500'};
text-align:${props => props.TextAlign};
letter-spacing:.5px;
text-decoration:${props => props.Under};
margin-top:${props => props.MT};
`;

export const PrintTableFooterHolders = styled.div`
padding: 0px 20px;
    @media print {
        page-break-inside:auto;
        // background:red;
    }
    `;



export const PrintViewValue = styled.p`
    font-family:'Red Rose', serif !important;
 font-size: 14px;
font-style: normal;
font-weight: 400;
/* line-height: 15px; */
margin: 0px 5px;
 /* white-space: break-spaces !important; */

 & pre{
    font-size:12px;
     white-space: break-spaces !important;
     overflow:hidden;
  @media (max-width:1100px){
        /* white-space: break-spaces !important; */
        
      }
 } 
 /* & h4{
        text-transform: capitalize;
 } */    
`

export const PrintWrapper = styled.div`
    width:100%;
    padding: 20px;

    .billingaddres {
      text-align: end;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      color: black;
      & span {
        font-weight: 500;
      }
    }

    .orderdetail {
      text-align: end;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      color: black;
      & span {
        font-weight: 500;
      }
    }

    @media screen and (max-width: 500px) {
      padding: 0;
    }
`;

export const PrintTitle = styled.h5`
font-size:${props => props.Size || '12px'};
text-transform:${props => props.UPPER ? 'uppercase' : 'none'};
font-weight:${props => props.Weight || '500'};
text-align:${props => props.TextAlign};
margin-top:${props => props.MT};
margin-bottom:${props => props.BTM}
`;





