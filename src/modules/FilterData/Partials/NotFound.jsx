import React from 'react'
import { NotFoundFilter } from './Style'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Button } from '@components/form'

export const NotFound = () => {
    return (
        <NotFoundFilter>
            <div>

                <MdOutlineProductionQuantityLimits />
            </div>
            <div className=''>

                <Button.Primary text={'Product Not Found'} />
            </div>
        </NotFoundFilter>
    )
}
