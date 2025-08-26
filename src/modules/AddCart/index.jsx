import React from 'react'
import { ProductsView } from './Partials/ProductsView'
import { Steps } from 'antd'
import { RelatedProduct } from './Partials/RelatedProduct'
import { CartOrderDetails } from './Partials/OrderDetails'

export const AddCart = ({setCurrentStep}) => {
  return (
    <div>
      <ProductsView setCurrentStep={setCurrentStep} />
      <RelatedProduct />
    </div>
  )
}
