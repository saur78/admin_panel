import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../redux/Features/employeesListSlice'
import loginReducer from '../redux/Features/loginSlice'

const store=configureStore({
    reducer:{
        employees:employeesReducer,
        login:loginReducer
    },
})

export default store