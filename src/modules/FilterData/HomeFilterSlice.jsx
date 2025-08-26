import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";

const initialState = {
    homefilter: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

export const GetHomepagefilter = createAsyncThunk("homefilterviewapi/get",
    async (data) => {
        try {
            // const orderItem = "orderItemDetails";
            console.log(typeof data,'calldata');
            const response = await baseRequest.get(`${APIURLS.HOME_FILTER_DATA}/${data}`, {
                // params: { orderItem },
            });
            console.log(response, 'valuesss');
            return response.data;
        } catch (error) {
            console.log(error, 'valuesss error');
        }
    });

const Filterpageindex = createSlice({
    name: 'filterindexpage',
    initialState,
    reducers: {
        SetFilterProduct: (state, action) => {
            state.homefilter = action.payload;
            console.log(action.payload, 'fdgdgfdgdgfdg');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetHomepagefilter.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetHomepagefilter.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.homefilter = action.payload;
            })
            .addCase(GetHomepagefilter.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})


export const AllHomefilterData = (state) => state.homepagefilter.homefilter
export const GetHomefilterDatastatus = (state) => state.homepagefilter.status
export const GetHomefilterDataError = (state) => state.homepagefilter.error

export const { SetFilterProduct } = Filterpageindex.actions;

export const { reducer } = Filterpageindex;

export default Filterpageindex.reducer