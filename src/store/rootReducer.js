import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@modules/Auth/authSlice";
import ProductsReducers from '@modules/ProductList/ProductListSlice'
import homepageMainReducer from '@modules/Home/HomeSlice'
import UserReducer from '@modules/Auth/Partials/UsersSlice'
import NavbarReducers from '@layout/Partials/NavbarSlice'
import wishlistReducers from '@modules/WishList/WhishListSlice'
import orderdetailsReducers from '@modules/OrderDetails/OrderDetailsSlice'
import cartPagesReducers from '@modules/AddCart/CartSlice'
import homePagefilterReducers from '@modules/FilterData/HomeFilterSlice'
// Combine all reducers.

// Define your initial state
const initialState = {
  auth: {}, // Add other reducers and their initial state here
  // Add other states here
};

const appReducer = combineReducers({
  auth: authReducer,
  Products: ProductsReducers,
  homepage: homepageMainReducer,
  user: UserReducer,
  Navbar: NavbarReducers,
  wishlist: wishlistReducers,
  orderdetails: orderdetailsReducers,
  cartpage: cartPagesReducers,
  homepagefilter: homePagefilterReducers,

});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logOut') {
    state = initialState;
  }
  return appReducer(state, action);
};

export default rootReducer;