import React, { useEffect, useRef } from 'react'
import { Carouselslider, CategorieSection } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AllhomeCategoriData, GetCategoriesectn } from '@modules/Home/HomeSlice'
import { base } from '@request/request'
import { useNavigate } from 'react-router-dom'

export const CategorieCarosel = () => {

  const slider = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategoriesectn())
  }, [])

  const AllDetails = useSelector(AllhomeCategoriData)

  console.log(AllDetails, 'cateAllDetails');

  const handleCategoryFilter = (categoryId) => {
    console.log(categoryId, 'ProasdductIdProductId');
    navigate(`/productsPage/${categoryId}`)
  }

  return (
    <CategorieSection>
      {AllDetails && AllDetails.length > 0 ?
        <h2>Categories</h2> : null}

      <Carouselslider
        slidesPerRow={5}
        ref={slider}
        dots={false}
        draggable
        infinite={true}
        responsive={[
          { breakpoint: 1800, settings: { slidesPerRow: 5 } },
          { breakpoint: 1200, settings: { slidesPerRow: 4 } },
          { breakpoint: 920, settings: { rows: 1, slidesPerRow: 3 } },
          { breakpoint: 661, settings: { rows: 1, slidesPerRow: 2 } },
        ]}
      >
        {AllDetails?.map((item, id) => {
          return (
            <div key={id} className='categoryimgsectn33'>
              <div className='Responn33' onClick={() => handleCategoryFilter(item?.categoryId)} >
                <div className='imgonly33 '>
                  <img src={`${base}${item?.url}`} alt={item?.categoryName || 'categoryimg'} title={item?.categoryName || 'categoryimg'} />
                </div>
                <div className='productName' onClick={() => handleCategoryFilter(item?.categoryId)} >{item?.categoryName}</div>
              </div>
            </div>
          )
        })}

      </Carouselslider>


    </CategorieSection>
  )
}



{/* <Carouselslider
        slidesPerRow={1} ref={slider} dots={false} draggable
        slidesToScroll={1} infinite={true}
        responsive={[{ breakpoint: 1800, settings: { slidesPerRow: 5 } },
        { breakpoint: 1200, settings: { slidesPerRow: 4 } },
        { breakpoint: 920, settings: { rows: 1, slidesPerRow: 3 } },
        ]}>

        {Bannermap.map(({ CategoryImg, id }) => (
          <div key={id} className='categoryimgsectn' >
            <div className='Responn'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {CategoryImg}
              </div>
              <div className='productName'>{name}</div>
              <br />
            </div>

          </div>
        ))}

      </Carouselslider>
 */}