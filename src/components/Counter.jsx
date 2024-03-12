import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue, decrementByValue } from "../redux/features/counter/counterSlice"

const Counter = () => {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>increment by 5</button>
            <br />
            <button onClick={() => dispatch(increment())}>increment</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrementByValue(5))}>decrement by 5</button>
            <br />
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;