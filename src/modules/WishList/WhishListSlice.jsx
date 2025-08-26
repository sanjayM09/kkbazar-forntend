import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";



const initialState = {
    wishlistproduct: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

export const GetWishProductSectn = createAsyncThunk("whishproductapi/get",
    async (id) => {
        console.log(id, 'getvaliuis');
        try {
            const dashboard = "dashboardDetails";
            const response = await baseRequest.get(`${APIURLS.WHISHLIST_PRODUCT_GET}/${id}`, {
                params: { dashboard },
            });
            console.log(response, 'valuesss');
            return [...response.data];
        } catch (error) {
            console.log(error, 'valuesss error');
        }
    });

const WishlistSectionSlice = createSlice({
    name: 'whishproduct',
    initialState,
    reducers: {
        StoreRedux: (state, action) => {
            state.wishlistproduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            // Wish product Get

            .addCase(GetWishProductSectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetWishProductSectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.wishlistproduct = action.payload;
            })
            .addCase(GetWishProductSectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})


export const Allwishlistproduct = (state) => state.wishlist.wishlistproduct
export const Getwishlistproducttatus = (state) => state.wishlist.status
export const GetwishlistproductError = (state) => state.wishlist.error

export const { StoreRedux } = WishlistSectionSlice.actions;
export const { reducer } = WishlistSectionSlice;

export default WishlistSectionSlice.reducer