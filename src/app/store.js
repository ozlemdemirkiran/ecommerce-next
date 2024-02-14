// 'use client'

// import { createStore, combineReducers } from 'redux';
// import { ADD } from './action';

// const initialState = {
//   count: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

// const cart = {
//   items: []
// }

// const reducer2 = (state = cart, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     // case 'DELETE':
//     //   return {
//     //     ...state,
//     //     // count: state.count - 1,
//     //   };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   reducer,
//   reducer2
// });
// const store = createStore(rootReducer);

// export default store;

