import { combineReducers } from "redux"

//import reducers

import { userLoginReducer } from "./userReducers"

import {
    blogListReducer, blogCreateReducer, blogDeleteReducer, blogDetailsReducer, blogUpdateReducer,
} from "./blogReducers"

export default combineReducers({
    userLogin: userLoginReducer,
    blogList: blogListReducer,
    blogCreate: blogCreateReducer,
    blogDelete: blogDeleteReducer,
    blogDetails: blogDetailsReducer,
    blogUpdate: blogUpdateReducer,
})