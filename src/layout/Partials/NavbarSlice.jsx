import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";


const initialState = {
    Category: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

// == Category ==============

export const GetAllCategory = createAsyncThunk("AllCategory/get", async () => {
    try {
        const CategoryImage  = "CategoryDetail";
        const response = await baseRequest.get(`${APIURLS.ALL_CATEGORY_LIST}`, {
            params: { CategoryImage  },
        });
        return [...response.data];
    } catch (error) {
        console.log(error, "AllCategory");
    }
});

const NavbarSlice = createSlice({
    name: 'Navbar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // GetAllCategory
            .addCase(GetAllCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetAllCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.Category = action.payload;
            })
            .addCase(GetAllCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// GetAllCategory
export const AllCategory = (state) => state.Navbar.Category
export const Categorystatus = (state) => state.Navbar.status
export const CategoryError = (state) => state.Navbar.error

export const { reducer } = NavbarSlice;

export default NavbarSlice.reducer
