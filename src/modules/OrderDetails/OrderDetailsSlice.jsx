import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";

const initialState = {
    orderviewproduct: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

export const GetOrderViewProductSectn = createAsyncThunk("orderProductViewApi/get",
    async (id) => {
        try {
            const orderItem = "orderItemDetails";
            const response = await baseRequest.get(`${APIURLS.ORDER_PRODUCT_VIEW}/${id}`, {
                params: { orderItem },
            });
            console.log(response, 'valuesss');
            return [...response.data];
        } catch (error) {
            console.log(error, 'valuesss error');
        }
    });

const OrdreProductsSlice = createSlice({
    name: 'orderproducts',
    initialState,
    reducers: {
        SetOrdersData: (state, action) => {
            state.orderviewproduct = action.payload;
            console.log(action.payload, 'fdgdgfdgdgfdg');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetOrderViewProductSectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetOrderViewProductSectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orderviewproduct = action.payload;
            })
            .addCase(GetOrderViewProductSectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})


export const AllOrderviewproduct = (state) => state.orderdetails.orderviewproduct
export const GetOrderviewproducttatus = (state) => state.orderdetails.status
export const GetOrderviewproductError = (state) => state.orderdetails.error

export const { SetOrdersData } = OrdreProductsSlice.actions;

export const { reducer } = OrdreProductsSlice;

export default OrdreProductsSlice.reducer