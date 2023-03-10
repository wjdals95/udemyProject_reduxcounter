import { useSelector, useDispatch } from "react-redux";

//class컴포넌트에서 리덕스를 쓸 때 사용하는 훅
// import{connect} from 'react-redux'
//import { Component } from "react";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  //useSelector 훅을 사용하면 react-redux는 이 컴포넌트를 위해
  //리덕스 저장소에 자동으로 구독을 설정한다.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment())

    //dispatch({ type: "increment" });
    // type은 Redux store reducer에서 사용하는 identifiers 중 하나이어야 한다.
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) // {type: SOME_UNIQUE_INENTIFIER, payload: 5}

    //dispatch({ type: "increase", amount: 5 }); // amount 페이로드 추가
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
    
    //dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())

    //dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <dir>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </dir>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// //class컴포넌트에서 리덕스 사용하기
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <dir>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </dir>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
