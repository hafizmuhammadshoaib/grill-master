// eslint-disable-next-line
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    grill: {
        width: 0,
        height: 0,
        grillItems: []
    },
    // "grill": {
    //     "width": 500,
    //     "height": 200,
    //     "grillItems": [
    //         {
    //             "width": 140,
    //             "height": 140,
    //             "count": 2,
    //             "title": "Sausage"
    //         },
    //         {
    //             "width": 130,
    //             "height": 60,
    //             "count": 4,
    //             "title": "Tomato"
    //         },
    //         {
    //             "width": 20,
    //             "height": 10,
    //             "count": 37,
    //             "title": "Veal"
    //         },
    //         {
    //             "width": 50,
    //             "height": 30,
    //             "count": 14,
    //             "title": "Steak"
    //         },         
    //     ]
    // },
    itemsOutOfGrill: []
};

const grillMasterSlice = createSlice({
    name: 'grillMaster',
    initialState,
    reducers: {
        setGrillDimension(state, { payload }) {
            const grill = { ...state.grill };
            grill.width = payload.width;
            grill.height = payload.height;
            return {
                ...state, grill,
            };
        },
        setGrillItem(state, { payload }) {
            const grill = { ...state.grill }
            grill.grillItems = [...payload.grillItems];
            return {
                ...state, grill
            }
        },
        setItemsOutOfGrill(state, { payload }) {
            return { ...state, itemsOutOfGrill: payload.itemsOutOfGrill }
        }
    },
});

export const { setGrillDimension, setGrillItem, setItemsOutOfGrill } = grillMasterSlice.actions;

export default grillMasterSlice.reducer;
