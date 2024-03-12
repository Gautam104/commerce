import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        AddItem:(state,action) => {
          state.push(action.payload)
        // state = action.payload
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload.id); // filter method new array return kare che.jyare aa match thase id atle flase thase and filter method ek new single recored(je id match thy te recored) return kar che.
        }
    }
})

export const { AddItem,remove } = CartSlice.actions // actions MEANS apde state ma je changes karya che te aama save thse.

export default CartSlice.reducer // aa ne apde store ma use kariye chiye reducer tarike.

// 2 data lay javana.

// 1.CartSlice.actions
// 2.CartSlice.reducer