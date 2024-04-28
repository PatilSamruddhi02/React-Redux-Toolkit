import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const existingProductIndex = state.findIndex(
                (product) => product.id === action.payload.id
            );
            if (existingProductIndex !== -1) {
                state[existingProductIndex].quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove: (state, action) => {
            const indexToRemove = state.findIndex(
                (product) => product.id === action.payload
            );
            if (indexToRemove !== -1) {
                if (state[indexToRemove].quantity > 1) {
                    state[indexToRemove].quantity--;
                } else {
                    state.splice(indexToRemove, 1);
                }
            }
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
