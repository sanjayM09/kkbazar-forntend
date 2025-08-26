import React, { useState } from 'react';
import { Space, Select, Input, Button } from 'antd';
import styled from 'styled-components';
import { Styles } from './CommonProperties';
import { IoSearch } from 'react-icons/io5';

const CustomSearchInput = ({ selectName, inputName, selectPlaceholder,
    inputPlaceholder, onSubmit, options, defaultValueInput, defaultValueSelect, style }) => {

    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSelectChange = (value) => {
        setSelectValue(value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit({ [selectName]: selectValue, [inputName]: inputValue });
    };

    return (
        <SeacrchInputStyle style={style}>
            <Space direction="vertical" size="middle">
                <Space.Compact>
                    <Select defaultValue={defaultValueSelect} options={options}
                     value={selectValue} onChange={handleSelectChange}
                      placeholder={selectPlaceholder} />
                    <Input defaultValue={defaultValueInput} onChange={handleInputChange} name={inputName} placeholder={inputPlaceholder} />
                    <Button onClick={handleSubmit}><IoSearch /></Button>
                </Space.Compact>
            </Space>
        </SeacrchInputStyle>
    );
};

export default CustomSearchInput;


{/*       ============    Exmple code ==========

const handleSubmit = (values) => {
        console.log('Submitted values:', values);
        // Perform further actions with the submitted values
    };

<CustomSearchInput
    selectName={'selectField'}
    inputName={'inputField'}
    selectPlaceholder={'Select a value'}
    inputPlaceholder={'Enter a value'}
    options={options}
    defaultValueInput={'saras'}
    defaultValueSelect={'AllCategories'}
    onSubmit={handleSubmit}
/> 

 ============    Exmple code End ==========
*/}

const SeacrchInputStyle = styled.div`
   padding: 20px;
  .ant-select-single .ant-select-selector {
    border-radius: 20px;
    background-color: #9C271B0D;
    border: 1px solid #D2D2D2;
  }
  .ant-select-single {
    height: 45px;
    font-size:${Styles.InputSize};
    font-weight:${Styles.InputWeight};
    color:${Styles.InputColor};
  }
  .ant-btn {
    font-size: 20px;
    height: 45px;
    padding: 7px 15px 8px 10px;
    border-radius: 20px;
  }
  .ant-btn-default {
    background-color: #EF8F21;
    border-color: #d9d9d9;
    color: #fff;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    border: 1px solid #EF8F21;
  }
  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #ffffff;
    border-color: #ef8f21;
  }
  .ant-input:hover {
    border-color: #d2d2d2;
  }
  .ant-input:focus, :where(.css-dev-only-do-not-override-2i2tap).ant-input:focus-within {
    border-color: #d2d2d2 !important;
    box-shadow: 0 0 0 2px rgba(220, 222, 223, 0.1);
  }
    .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
        border-color: #d2d2d2;
    }
    .ant-select .ant-select-arrow {
        color: black;
    }
`