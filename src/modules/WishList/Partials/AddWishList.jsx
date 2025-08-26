import React from 'react'
import { EmptyPagestyle } from './Style'
import { TbShoppingBagSearch } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { selectCurrentId } from '@modules/Auth/authSlice'
import { Button } from '@components/form'
import { Flex } from '@components/others'
import { useNavigate } from 'react-router-dom'

export const EmptyWishlistPage = () => {

    const navigate = useNavigate();
    const CurrentUser = useSelector(selectCurrentId)
    console.log(CurrentUser, 'CurrentUserCurrentUser');

    const handlesignIn = () => {
        navigate('/signin')
    }

    return (
        <EmptyPagestyle>
            <div className='iconss'>
                <div className='iconclr'>
                    <TbShoppingBagSearch />
                </div>
            </div>
            {CurrentUser == null ?
                <div><h4>Please log in or sign in.</h4>
                    <Flex center={true} style={{ padding: '10px 20px' }}><Button.Success text={'Login'} onClick={() => handlesignIn()} /></Flex>
                </div>
                : <h4>Please add Wishlist</h4>}
        </EmptyPagestyle>
    )
}
