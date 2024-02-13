
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ReduxDeneme(){

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return(
    <>
    <div className='flex gap-1 justify-center items-center'>
        <button className='border-2 px-2 bg-gray-200 rounded' onClick={decrement}>-</button>
        <input type='text' value={count} pattern='0-9' className='w-11 py-2 text-center border-2 rounded'/>
        <button className='border-2 px-2 bg-gray-200 rounded' onClick={increment}>+</button>
    </div>
    </>
    )
}