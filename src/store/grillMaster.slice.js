import { createSlice } from '@reduxjs/toolkit';

function getMin(array, field) {
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;
    for (let i = array.length - 1; i >= 0; i--) {
        tmp = array[i][field];
        if (tmp < lowest) lowest = tmp;
    }
    return Number(lowest);
}
const initialState = {
    grill: {
        width: 0,
        height: 0,
        grillItems: [],
        minHeight: 0
    },
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
            grill.grillItems = grill.grillItems.sort((a, b) => ((a.height * a.width) > (b.height * b.width)) ? -1 : ((((b.height * b.width)) > (a.height * a.width)) ? 1 : 0))
            grill["minHeight"] = getMin(grill?.grillItems, 'height')
            return {
                ...state, grill,
            }
        },
        setItemsOutOfGrill(state, { payload }) {
            return { ...state, itemsOutOfGrill: payload.itemsOutOfGrill }
        }
    },
});

export const { setGrillDimension, setGrillItem, setItemsOutOfGrill } = grillMasterSlice.actions;

export default grillMasterSlice.reducer;
