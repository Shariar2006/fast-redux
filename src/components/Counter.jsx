import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterSlice"

const Counter = () => {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;