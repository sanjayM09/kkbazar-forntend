import React from 'react'
import styled from 'styled-components'

export const SoldOut = () => {
    return (
        <Stockstyle>Sold out</Stockstyle>
    )
}

const Stockstyle = styled.div`
    position: absolute;
    top: 20px;
    left: 15px;
    background-color: rgb(255 186 188);
    color: rgb(255, 6, 6);
    border: 1px dotted rgb(255, 6, 6);
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 20px;
    `

const StockDesign = styled.div`
    & h2 {
        color: red !important;
        font-size: 15px !important;
    };
    & h3 {
        font-size: 15px !important;
        color: green !important;
    }
`

export const OutOFStock = () => {
    return (
        <StockDesign>
            <h2>Out of Stock</h2>
        </StockDesign>
    )
}

export const InStock = () => {
    return (
        <StockDesign>
            <h3>Stock</h3>
        </StockDesign>
    )
}

