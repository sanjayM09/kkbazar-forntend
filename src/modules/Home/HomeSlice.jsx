import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";



const initialState = {
    homebanner: [],
    homecategorie: [],
    newproduct: [],
    productwithdetail: [],
    recommendBanner: [],
    allproductscarousel: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

// == home banner Option ==============

export const Gethomebannersectn = createAsyncThunk("homebannerapi/get", async () => {
    try {
        const carousel = "carouselDetails";
        const response = await baseRequest.get(`${APIURLS.HOMEBANNER_GET_DATA}`, {
            params: { carousel },

        });
        console.log(response, 'valuesss');
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

export const GetCategoriesectn = createAsyncThunk("homecategorieapi/get", async () => {
    try {
        const CategoryImage = "CategoryDetail";
        const response = await baseRequest.get(`${APIURLS.HOME_CATEGORIE_GET_ATA}`, {
            params: { CategoryImage },

        });
        console.log(response, 'valuesss');
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

export const GetNewproductsectn = createAsyncThunk("homenewproductapi/get", async () => {
    try {
        const dashboard = "dashboardDetails";
        const response = await baseRequest.get(`${APIURLS.HOME_NEWPRODUCT_GET_DATA}`, {
            params: { dashboard },

        });
        console.log(response, 'valuesss');
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

export const GetProductwithDetailssectn = createAsyncThunk("homeproductdetailsapi/get",
    async (id) => {
        try {
            const dashboard = "dashboardDetails";
            const userId = id;
            const response = await baseRequest.get(`${APIURLS.HOME_PRODUCT_WITHDEAILS_GET_DATA}`, {
                params: { dashboard, userId },

            });
            console.log(response, 'v2423aluesss');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    });

export const GetRecommendBannerDetails = createAsyncThunk("homeRecommendbannerdetailsapi/get", async () => {
    try {
        const carousel = "carouselDetails";
        const response = await baseRequest.get(`${APIURLS.HOME_RECOMMEMND_BANNER_GET_DATA}`, {
            params: { carousel },
        });
        console.log(response, 'valuesss');
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

export const GetAllProductDetails = createAsyncThunk("homeallproductapi/get", async () => {
    try {
        const carousel = "carouselDetails";
        const response = await baseRequest.get(`${APIURLS.HOME_RECOMMEMND_BANNER_GET_DATA}`, {
            params: { carousel },
        });
        console.log(response, 'valuesss');
        return [...response.data];
    } catch (error) {
        console.log(error, 'valuesss error');
    }
});

const HomeSectionSlice = createSlice({
    name: 'homebannerpage',
    initialState,
    reducers: {
        SetHomeData: (state, action) => {
            state.homebanner = action.payload;
            console.log(action.payload, 'fdgdgfdgdgfdg');
        }
    },
    extraReducers: (builder) => {
        builder

            // home banner  Get
            .addCase(Gethomebannersectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(Gethomebannersectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.homebanner = action.payload;
            })
            .addCase(Gethomebannersectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // home categorie ------------

            .addCase(GetCategoriesectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetCategoriesectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.homecategorie = action.payload;
            })
            .addCase(GetCategoriesectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // home new products ------------

            .addCase(GetNewproductsectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetNewproductsectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.newproduct = action.payload;
            })
            .addCase(GetNewproductsectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // home products with etails ------------

            .addCase(GetProductwithDetailssectn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetProductwithDetailssectn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.productwithdetail = action.payload;
            })
            .addCase(GetProductwithDetailssectn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // home reconnent banner with etails ------------

            .addCase(GetRecommendBannerDetails.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(GetRecommendBannerDetails.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.recommendBanner = action.payload;
            })
            .addCase(GetRecommendBannerDetails.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }



})


export const AllhomeDataImg = (state) => state.homepage.homebanner
export const GethomeDataImgStatus = (state) => state.homepage.status
export const GethomeDataImgError = (state) => state.homepage.error

export const AllhomeCategoriData = (state) => state.homepage.homecategorie

export const AllhomenewproductData = (state) => state.homepage.newproduct

export const AllhomeproductwithdetailData = (state) => state.homepage.productwithdetail

export const AllhomeRecommendBannerdetailData = (state) => state.homepage.recommendBanner


export const { SetHomeData } = HomeSectionSlice.actions;
export const { reducer } = HomeSectionSlice;

export default HomeSectionSlice.reducer


