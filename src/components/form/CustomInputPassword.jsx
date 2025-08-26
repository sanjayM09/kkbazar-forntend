/* eslint-disable */
import React, { Fragment } from 'react'
import { Input as AntdInput, Form } from 'antd'
import styled from 'styled-components'
import Label from '@components/form/Label'
import { Styles } from '@components/form/CommonProperties'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }
  border-radius: 0.4rem;
  margin-bottom: 5px !important;
`
const AntdInputStyle = styled(AntdInput.Password)`
 width: 100%;
  height: ${props => (props.height ? props.height : Styles.Height)};
  border-radius: 0.4rem;
  box-shadow: none;
  border-color: ${props => (props.error ? 'red' : '#ced4da')};
  background: #fdecda !important;


  input::placeholder {
    font-size:${Styles.InputPlaceholderSize};
    font-weight:${Styles.InputPlaceholderWeight};
    color:${Styles.InputPlaceholderColor};
  }
  
  :focus {
    border-color: #57a8e9;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(87,168,233, .2);
    box-shadow: 0 0 0 2px rgba(87,168,233, .2);
  }

  .ant-input-suffix{
    padding:2px;
  }

  .ant-input-suffix span{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .ant-input-suffix:hover, 
  .ant-input-suffix .anticon.ant-input-password-icon,
  .ant-input-suffix .anticon.ant-input-password-icon:hover
  {
    border:none !important;
  }
  :hover {
    border:1px solid #b3d8ff;
  }

  :not(.ant-input-affix-wrapper-disabled):hover {
    border:1px solid #b3d8ff !important;
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }
  &.ant-input-affix-wrapper >input.ant-input{
    font-size:${Styles.InputSize};
    font-weight:${Styles.InputWeight};
    color:${Styles.InputColor};
    /* padding: 8px 11px !important; */
  }

  &.ant-input[disabled] {
    /* color: #0000 !important; */
    font-size:${Styles.InputSize};
    font-weight:${Styles.InputWeight};
    color:${Styles.InputColor};
    text-align: left;
    border: 1px solid #d9d9d9;
  }
`
const CustomInputPassword = ({
  label,
  type,
  name,
  rules,
  step,
  onChange,
  placeholder,
  display,
  required,
  autoFocus,
  disabled,
  readOnly,
  width,
  height,
  marginRight,
  labelStyle,
  defaultValue,
  minWidth,
  value,
  optional,
  noStyle = undefined,
  ...rest
}) => {

  return (
    <StyledItem
      style={{
        width: width,
        marginRight: marginRight,
        minWidth: minWidth,
        display: display,
      }}
      rules={rules}
      noStyle={noStyle}
      name={name}
      colon={false}
      required={false}
      label={
        label && (
          <Fragment>
            <Label required={required} labelStyle={labelStyle}>
              {label} <span>{optional}</span>
            </Label>
          </Fragment>
        )
      }
    >
      <AntdInputStyle
        {...rest}
        defaultValue={defaultValue}
        type={type}
        autoFocus={autoFocus}
        readOnly={readOnly}
        onChange={onChange}
        autoComplete='off'
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
        step={step}
      />
    </StyledItem>
  )
}

export default CustomInputPassword