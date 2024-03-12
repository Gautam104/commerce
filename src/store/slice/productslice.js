import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const STATUS = Object.freeze({
    IDEL:'idel',
    LOADING:'loading',
    EREOR:'error'
})

export const ProductSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDEL
    },
    reducers:{
        setProducts(state,action)
        {
         state.data = action.payload 
        },
        setStatus(state,action)
        {
         state.status = action.payload
        }
    }
})

export const { setProducts,setStatus } = ProductSlice.actions

export default ProductSlice.reducer;


export function FetchProducts()
{
   
    return async function FetchProductsWithThunks(dispatch,getstate)
    {
      dispatch(setStatus(STATUS.LOADING))  
      try {

        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data

        dispatch(setProducts(data))
        dispatch(setStatus(STATUS.IDEL))  

      } catch (error) {
        console.log(error);
        dispatch(setStatus(STATUS.EREOR))  
      }
    }
}



