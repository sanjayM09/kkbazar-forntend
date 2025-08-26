import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";



const initialState = {
    cartcarousel: [],
    allCart: [],
    totalData: null,
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

export const GetCArtCarouselDATA = createAsyncThunk("CArtCarouseapi/get", async () => {
    try {
        const carousel = "carouselDetails";
        const response = await baseRequest.get(`${APIURLS.CART_CAROUSELPAGE_GET}`, {
            params: { carousel },

        });
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

export const GetAllCart = createAsyncThunk("GetAllCart/get",
    async (id) => {
        try {
            const response = await baseRequest.get(`${APIURLS.ALL_CART_LIST}${id}`)
            return [...response.data];
        } catch (error) {
            console.log(error, 'valuesss error');
        }
    });

const CartPageSection = createSlice({
    name: 'CArtCarouseld',
    initialState,
    reducers: {
        setData : (state, action) => {
            const data = action.payload
            console.log(data,'jhgffdbcgn');
        },
        setTotalData: (state, action) => {
            state.totalData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(GetCArtCarouselDATA.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetCArtCarouselDATA.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cartcarousel = action.payload;
            })
            .addCase(GetCArtCarouselDATA.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(GetAllCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetAllCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.allCart = action.payload;
            })
            .addCase(GetAllCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }

})

export const {setdata,setTotalData } = CartPageSection.actions
export const AllCarouselDetail = (state) => state.cartpage.cartcarousel
export const GetCarouselDetailStatus = (state) => state.cartpage.status
export const GetCarouselDetailError = (state) => state.cartpage.error

export const AllCartDetails = (state) => state.cartpage.allCart
export const GetCartDetailsStatus = (state) => state.cartpage.status
export const GetCartDetailsError = (state) => state.cartpage.error

export const { reducer } = CartPageSection;

export default CartPageSection.reducer
