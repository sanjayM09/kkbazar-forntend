import { THEME } from '@theme/index'
import React from 'react'
import { Triangle } from 'react-loader-spinner'
import styled from 'styled-components'

const CommonLoading = () => {
  return (
    <Container>
      <Triangle
        visible={true}
        height="100"
        width="100"
        color='rgb(239, 143, 33)'
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h1 style={{color:'rgb(239, 143, 33)',fontFamily:'cursive'}}>Loading</h1>
    </Container>
  )
}

export default CommonLoading

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    flex-direction:column;
    gap:20px;
`
