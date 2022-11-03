import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userData:{},
    token:null,
    isLogin:false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
        afterLogin(state, action) {
            state.userData = action.payload.userData
            state.token = action.payload.token
            localStorage.setItem("userData", JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.token);
            state.isLogin = state.token != null
            console.log(state.isLogin)
         },

        logout(state,action) {
            localStorage.removeItem("userData")
            localStorage.removeItem("token")
            state.isLogin = false
     
        }
}})

export const { afterLogin , logout} = userSlice.actions

export default userSlice.reducer