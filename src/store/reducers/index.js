import { combineReducers } from "redux"

//import reducers

import { userLoginReducer } from "./userReducers"

import {
    blogListReducer, blogCreateReducer, blogDeleteReducer, blogDetailsReducer, blogUpdateReducer,
} from "./blogReducers"

import {
    imageListReducer, imageCreateReducer, imageDeleteReducer, imageDetailsReducer, imageUpdateReducer,
} from "./imageReducers"

export default combineReducers({
    userLogin: userLoginReducer,
    blogList: blogListReducer,
    blogCreate: blogCreateReducer,
    blogDelete: blogDeleteReducer,
    blogDetails: blogDetailsReducer,
    blogUpdate: blogUpdateReducer,
    imageList: imageListReducer, 
    imageCreate: imageCreateReducer, 
    imageDelete: imageDeleteReducer, 
    imageDetails: imageDetailsReducer, 
    imageUpdate: imageUpdateReducer,
})