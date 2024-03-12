import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/slice/cartSlice' 

function Cart() {

    const Items = useSelector((state) => state.Cart)

    const dispatch = useDispatch()

    const RemoveCart = (id) => {
        dispatch(remove(id));
        console.log("🚀 ~ RemoveCart ~ id:", id)
    }
    
    return (
        <div>
        <h3 className='productTitle'>cart</h3>      

        <div className='productWrapper'>
        {
            Items.map(product => (
                <div className='card'  key={product.id}>
                     <img src={product.image} alt=""></img>
                     <h4>{product.title}</h4>
                     <h4>{product.price}</h4>
                     <button className='btn fm1' onClick={() => RemoveCart({id:product.id})} >Remove</button>
                </div>
            ))
        }
    </div>
</div>
    )
}

export default Cart