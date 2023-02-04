// 스토어에 여러개의 slice를 사용해야 할 때 createStore를 사용하는 대신
//redux toolkit에서 configureStore를 사용한다.
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
//createReducer도 있지만 createSlice가 더 강력하다.
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      //redux에서는 기존의 값을 변경하면 안되므로 위의 식처럼 사용하면 안되지만
      //reuxtoolkit과 createSlice를 사용하면 기존의 값은 절대 변경이 안되므로 사용 가능하다.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      //페이로드 매소드의 이름은 리덕스툴킷에서 따로 생성하므로 따로 지정할 수 없다.
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// createSlice를 사용했으므로 필요없다.
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     //action type에 오타가 있으면 안된다.
//     //redux toolkit사용
//     return {
//       counter: state.counter + 1,
//       //리덕스에서는 기존의 상태값을 절대 변경해서는 안된다.
//       //그러므로 기존의 값을 복사한 새로운 객체나 배열을 생성하여 사용한다.
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
export const counterActions = counterSlice.actions;
//createSlice를 사용하면 action객체를 생성하는 작업과
//고유한 식별자를 생각해내는 작업과 오타에 대해 걱정할 필요없다.

export default counterSlice.reducer