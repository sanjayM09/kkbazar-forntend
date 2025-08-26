import { Rate } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Rating = (onChange, onClick) => {


    return (
        <StartRating>
            <Rate onChange={onChange} />
        </StartRating>
    )
}

export default Rating

export const StartRating = styled.div`
    padding: 15px;
    background: rgba(239, 143, 33, 0.32);
    font-family: "Red Rose", serif;
    font-size: 18px;
    font-weight: 500;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 30px;
  
        /* .ant - rate {
        color: #000;
    } */
`