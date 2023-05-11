import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'







// Save the authentication state and token in local storage
const saveAuthData = (isLoggedIn, token) => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
    localStorage.setItem('token', JSON.stringify(token))
  }
  
  // Load the authentication state and token from local storage
  const loadAuthData = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const token = JSON.parse(localStorage.getItem('token')) || {}
    return { isLoggedIn, token }
  }
  
  // Clear the authentication state and token from local storage
  const clearAuthData = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('token')
  }



const initialState={
    loading:false,
    isLoggedIn:false,
    error:'',
    token:{},
    ...loadAuthData(), // Load the authentication state and token from local storage
}

export  const fetchLogin=createAsyncThunk('login/fetchLogin', ({email,password})=>{
    console.log('red',email)
    console.log('red',password)
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: "https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/login",
        headers: {
          "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
        },
        data : {
            method: "login",
            email,
            password,
        }
      };
    return axios(config).then((response=>response.data))
})

const loginSlice=createSlice({
    
    name:'login',
    initialState,
    reducers: {
        logout: (state) => {
          state.isLoggedIn = false
          state.token = {}
          state.error = ''
          clearAuthData()
        }
    },
    
    extraReducers:builder=>{
        builder.addCase(fetchLogin.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.token = action.payload            
            if (action.payload.error) {
              state.isLoggedIn = false
              alert(state.token.error);
            }
            else{
                state.isLoggedIn=true
            }
            saveAuthData(state.isLoggedIn, state.token)
          })
        builder.addCase(fetchLogin.rejected,(state,action)=>{
            const navigate = useNavigate()
            state.loading=false
            state.isLoggedIn=false
            state.error=action.error.message
            state.token={}
            clearAuthData()
            navigate('/')
            
        })
    }
})
export const { logout } = loginSlice.actions
export default loginSlice.reducer;
