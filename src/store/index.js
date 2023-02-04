// 스토어에 여러개의 slice를 사용해야 할 때 createStore를 사용하는 대신
//redux toolkit에서 configureStore를 사용한다.
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer},
});



export default store;
 