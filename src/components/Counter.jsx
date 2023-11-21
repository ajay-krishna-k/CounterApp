import React, { useState } from 'react'
import { decrement, increment, reset } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  //state to hold the value from input
  const [range , setRange] = useState("")
//hook to dispatch a function in action
  const dispatch = useDispatch()
  //components can access the state by using useSelector hook
  const count = useSelector((state)=>state.counter.value)
  // console.log(range);


  return (
    <>
        <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'90px'}}>{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-warning p-3'>Increment</button>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-success p-3 ms-3'>Decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-3 p-3'>Reset</button>
          </div>
        </div>
        <div className='mt-3 w-100'>
          <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{borderColor:'blue'}} placeholder='Enter the range' />
        </div>
    </>
  )
}

export default Counter