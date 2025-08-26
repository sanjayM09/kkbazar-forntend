import React, { Fragment } from 'react'
import { HomeCarousel } from './Carousel'
import { Categorie } from './Categories'
import { HomeNewProduct } from './NewProducts'
import { ProductWithDetails } from './ProductWithDetails'
import { RecommendBrand } from './Recommended'
import { MeatProduct } from './MeatProduct'

export const HomeMain = () => {
    return (
        <Fragment>
            <HomeCarousel />
            <Categorie />
            <HomeNewProduct />
            <ProductWithDetails />
            <RecommendBrand />
            <MeatProduct />
        </Fragment>
    )
}
