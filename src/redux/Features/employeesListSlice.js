import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading:false,
    employees:[],
    error:'',
}

export const fetchEmployees=createAsyncThunk('employees/fetchEmployees', ()=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/employeelist',
        headers: { 
          'x-api-key': 'Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr'
        },
        data : {
          method: "employeelist",   
          company_id : 1,
          page_number:1
        }
      };
    return axios(config).then((response=>response.data))
})

const employeesListSlice=createSlice({
    name:'employees',
    initialState,
    reducers:{
      search: (state,action) => {
        state.employees=action.payload        
      },
      deleteEmployee:(state,action) =>{
        state.employees=action.payload
      }
    },
    extraReducers:builder=>{
        builder.addCase(fetchEmployees.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchEmployees.fulfilled,(state,action)=>{
            state.loading=false
            state.employees=action.payload
            state.error=''
          })
        builder.addCase(fetchEmployees.rejected,(state,action)=>{
            state.loading=false
            state.employees=[]
            state.error=action.error.message
        })
    }
})
export const { search ,deleteEmployee } = employeesListSlice.actions
export default employeesListSlice.reducer;
