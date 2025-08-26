import React from 'react'
import { EmptyAddressHead } from './Style'
import { TbAddressBookOff } from 'react-icons/tb'

const EmptyAddressPage = () => {
  return (
    <EmptyAddressHead>
         <div className='iconss'>
                <div className='iconclr'>
                    <TbAddressBookOff  />
                </div>
            </div>
                <h4>Please add Address</h4>
    </EmptyAddressHead>
  )
}

export default EmptyAddressPage