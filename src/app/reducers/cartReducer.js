const initialState = {
    id: 0,
    title: "",
    price: 0,
    image: '',
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ID":
        return {
            ...state,
            name: action.payload.id,
        };
        case "SET_TITLE":
        return {
            ...state,
            age: action.payload.title,
        };
        case "SET_PRICE":
            return {
            ...state,
            age: action.payload.price,
        };
        case "SET_IMAGE":
            return {
                ...state,
                age: action.payload.image,
        };
        default:
        return state;
    }
};

export default userReducer;