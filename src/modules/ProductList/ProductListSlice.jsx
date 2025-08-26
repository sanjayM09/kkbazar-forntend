import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";


const initialState = {
    Category: [],
    Singleproduct: [],
    ProductData: [],
    recentProducts: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

// == Category ==============

export const GetCategory = createAsyncThunk("Category/get",
    async (id) => {
        try {
            const category = "categoryDetails";
            const userId = id;

            const response = await baseRequest.get(`${APIURLS.CATEGORY_LIST}`, {
                params: { category, userId },
            });
            console.log(response, 'CategoryCategory');
            return [...response.data];
        } catch (error) {
            console.log(error, "Category");
        }
    });


export const GetSingleproduct = createAsyncThunk("Singleproductapi/get",
    async (FullData) => {
        try {
            console.log(FullData, 'idid12');
            const userId = FullData?.userId;
            const response = await baseRequest.get(`${APIURLS.SINGLE_PRODUCT}${FullData?.id}`, {
                params: { userId }
            });
            console.log(response, 'CategoryCategory');
            return response.data;
        } catch (error) {
            console.log(error, "Category");
        }
    });


export const GetProductdata = createAsyncThunk("Productdataapi/get",
    async (FullData) => {
        try {
            console.log(FullData, 'idid12');
            const userId = FullData?.userId;
            const response = await baseRequest.get(`${APIURLS.ALL_PRODUCT_LIST}${FullData?.id}`, {
                params: { userId }
            });
            console.log(response, 'prodd');
            return response.data;
        } catch (error) {
            console.log(error, "prodd");
        }
    });


export const GetRecentProductcarousel = createAsyncThunk("recentProductsListapi/get",
    async (RecentId) => {
        try {
            console.log(RecentId, 'idid1352');
            const categoryId = RecentId?.categoryId;
            const productListId = RecentId?.productListId;
            const response = await baseRequest.get(`${APIURLS.PRODUCT_RECENTFILTER}/${categoryId}/${productListId}`, {
                // params: { userId }
            });
            console.log(response, 'productListId');
            return response.data;
        } catch (error) {
            console.log(error, "productListId err");
        }
    });


const Productslice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        StoreRedux: (state, action) => {
            state.Singleproduct = action.payload;
            console.log(action.payload, 'action.payload;');
        },
        ProductRedux: (state, action) => {
            state.ProductData = action.payload;
            console.log(action.payload, 'actionpayload;');
        },
    },

    extraReducers: (builder) => {
        builder

            // GetCategory  Get
            .addCase(GetCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.Category = action.payload;
            })
            .addCase(GetCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // Get Single product ============

            .addCase(GetSingleproduct.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetSingleproduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.Singleproduct = action.payload;
            })
            .addCase(GetSingleproduct.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // Get Product Data ============

            .addCase(GetProductdata.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetProductdata.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.ProductData = action.payload;
            })
            .addCase(GetProductdata.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })


            // Get recent  Product Data ============

            .addCase(GetRecentProductcarousel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetRecentProductcarousel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.recentProducts = action.payload;
            })
            .addCase(GetRecentProductcarousel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })


    }
})

// GetCategory Get
export const AllProduct = (state) => state.Products.Category
export const Productstatus = (state) => state.Products.status
export const ProductError = (state) => state.Products.error

export const AllSingleproduct = (state) => state.Products.Singleproduct

export const AllProductDatad = (state) => state.Products.ProductData

export const AllrecentProductsData = (state) => state.Products.recentProducts

export const { StoreRedux } = Productslice.actions;
export const { ProductRedux } = Productslice.actions;

export const { reducer } = Productslice;

export default Productslice.reducer
