export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const SET_ID = 'SET_ID'
export const SET_TITLE = 'SET_TITLE'
export const SET_PRICE = 'SET_PRICE'
export const SET_IMAGE = 'SET_IMAGE'

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});


export const setId = (id) => ({
    type: SET_ID,
    payload: id
  });

  export const setTitle = (title) => ({
    type: SET_TITLE,
    payload: title
  });

  export const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price
  });

  export const setImage = (image) => ({
    type: SET_IMAGE,
    payload: image
  });