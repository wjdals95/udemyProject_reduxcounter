import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  //useSelector 훅을 사용하면 react-redux는 이 컴포넌트를 위해
  //리덕스 저장소에 자동으로 구독을 설정한다.
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'}) 
    // type은 Redux store reducer에서 사용하는 identifiers 중 하나이어야 한다.
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <dir>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </dir>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
