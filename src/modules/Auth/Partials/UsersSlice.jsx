import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "@request/apiUrls/urls";
import baseRequest from "@request/request";

const initialState = {
  users: [],
  personalInfo: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// == Get Users==============

export const GetUsers = createAsyncThunk("users/get", async () => {
  try {
    const user = "userDetails";
    const response = await baseRequest.get(`${APIURLS.USERS_GET}`, {
      params: { user },
    });
    console.log(response, "valuesss");
    return [...response.data];
  } catch (error) {
    console.log(error, "valuesss error");
  }
});

// Get Personal Information

export const getPersonalInformation = createAsyncThunk(
  "personalInformation/get",
  async () => {
    try {
      const company = "companyDetails";
      const response = await baseRequest.get(`${APIURLS.GETPERSONALDETAILS}`, {
        params: { company },
      });
      return response.data;
    } catch (error) {
      // throw error;
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // home banner  Get
      .addCase(GetUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Personal Info

      .addCase(getPersonalInformation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPersonalInformation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.personalInfo = action.payload;
      })
      .addCase(getPersonalInformation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


// All Users 

export const AllUsers = (state) => state.user.users;
export const AllUsersStatus = (state) => state.user.status;
export const AllUsersError = (state) => state.user.error;

// Personal Details

export const selectAllPersonalInformations = (state) => state.user.personalInfo;
export const getPersonalInfoStatus = (state) => state.user.status;
export const getPersonalInfoError = (state) => state.user.error;

export const { reducer } = UsersSlice;

export default UsersSlice.reducer;
