import React from 'react'
import { Button as AntdButton } from 'antd'
import styled, { css } from 'styled-components'
import { THEME } from '@theme/index'
import Flex from '@components/others/Flex'

const BorderStyle = css`
  &:hover {
    border-color: ${THEME.GREY_T_85};
  }
  &:focus {
    border-color: ${THEME.GREY_T_85};
  }
`
const TextContainer = styled.div`
    /* margin-left: ${props => (props.icon ? '7px' : '')}; */
    display: flex;
  color: white;

`

const GoogleButtonStyles = css`
  color:${THEME.black};
  background-color:#4285F4 !important;
  font-size: 16px;
  font-weight:500;
  border-radius: 10px;
  transition:.4s;

  /* &:hover {
  background-color:${THEME.BTN_PRIMART_HOVER};
  } */
  &:focus {
    /* box-shadow:0 0 0 .2rem (255, 179, 2,.5) */
  }
  &.svg {
    font-size: 20px !important;
  }
`


const FaceBookButtonStyles = css`
  color:${THEME.white};
  background-color:#3B5998 !important;
  font-size: 16px;
  font-weight:500;
  border-radius: 10px;
  transition:.4s;

  /* &:hover {
  background-color:${THEME.BTN_PRIMART_HOVER};
  } */
  &:focus {
    /* box-shadow:0 0 0 .2rem (255, 179, 2,.5) */
  }
  &.svg {
    font-size: 20px !important;
  }
`


const defaultButtonStyles = css`
  color: #30475e;
`

const PlainButton = styled(AntdButton)`
  /* color: ${props => (props.type === 'secondary' ? THEME.PRIMARY : '#FFFFFF')}; */
  border-width:1px;
  display: flex;
  height: 60px;
  /* align-items: center; */
  justify-content: space-between;
  /* border-radius: 8px; */
  width: 300px;
  border-radius: 4px;
  font-size:14px;
  letter-spacing:1px;
  justify-content: center;
  text-transform:capitalize;
  /* font-weight:600; */
  padding: 0px 15px !important;
  /* margin: 0px 15px 0px 15px !important; */
  font-weight:400;
  cursor: ${props => props?.disableCursor && 'not-allowed'};
  pointer-events: ${props => (props?.disable ? 'none' : 'auto')};
  ${props => props.type === 'default' && defaultButtonStyles};
  ${props => props.type === 'google' && GoogleButtonStyles};
  ${props => props.type === 'Facebook' && FaceBookButtonStyles};


  transition: 0.5s;
`


const SocialButton = props => <AntdButton {...props} />



const Google = ({ text, icon, ...props }) => (
    <PlainButton {...props} type="google">
      <Flex style={{alignItems:"center",justifyContent:'space-between',width:'100%'}}>
        {icon}
        <TextContainer icon={icon ? "true" : "false"}>{text}</TextContainer>
      </Flex>
    </PlainButton>
  )

  
const FaceBook = ({ text, icon, ...props }) => (
    <PlainButton {...props} type="Facebook">
      <Flex style={{alignItems:"center",justifyContent:'space-between',width:'100%'}}>
        {icon}
        <TextContainer icon={icon ? "true" : "false"}>{text}</TextContainer>
      </Flex>
    </PlainButton>
  )

const Default = ({ icon, text, onClick, ...rest }) => {
    return (
        <PlainButton onClick={onClick} {...rest} type="default">
            {icon}
            <TextContainer icon={icon ? "true" : "false"}>{text}</TextContainer>
        </PlainButton>
    )
}



SocialButton.Default = Default
SocialButton.Google = Google
SocialButton.FaceBook = FaceBook

export default SocialButton
