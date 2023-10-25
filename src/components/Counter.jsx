import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice';

function Counter() {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
  return (
    <div>
        <div onClick={()=>dispatch(decrement())}>
            -
        </div>
        <div>
            {count}
        </div>
        <div onClick={()=>dispatch(increment())}>
            +
        </div>
    </div>
  )
}

export default Counter