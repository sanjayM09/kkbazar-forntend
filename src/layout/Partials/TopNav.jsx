import React from 'react'
import { StyledTopNav } from './Style'
import { SvgIcons } from '@assets/images'

export const TopNav = () => {
  return (
    <StyledTopNav>
        <h3>Order Tracking <span>: Take advantage of our time to save event  | Satisfaction guaranteed *</span></h3>
        <img src={SvgIcons.Location} alt="location" />
    </StyledTopNav>
  )
}
