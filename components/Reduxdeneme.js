'use client'

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ReduxDeneme(){

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return(
    <>
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
    </>
    )
}