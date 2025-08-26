import React from 'react'
import styled from 'styled-components'

export const Offers = ({ text }) => {
    return (
        <Offerstyle>{text}<span>% off</span></Offerstyle>
    )
}

const Offerstyle = styled.div`
    position: absolute;
    top: 20px;
    left: 15px;
    background-color: green;
    color: rgb(255, 255, 255);
    font-weight: 500;
    padding: 3px 5px;
    border-radius: 3px;
    & span {
        font-size: 10px
    }
    `