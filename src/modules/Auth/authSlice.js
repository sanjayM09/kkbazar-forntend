import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    authUser: null,
    role:null,
    id:null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { name, jwt,roleName,id } = action.payload
            state.authUser = name
            state.token = jwt
            state.role = roleName
            state.id = id

        },
        logOut: (state, action) => {
            state.authUser = null 
            state.token = null
            state.role = null
            state.id = null

        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state) => state.auth.authUser
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUserRole = (state) => state.auth.role
export const selectCurrentId = (state) => state.auth.id


export default authSlice.reducer