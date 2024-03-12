// import React,{useEffect} from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { AddItem } from '../store/slice/cartSlice' // slice ni file ne import karvani.
// import {FetchProducts,STATUS} from '../store/slice/productslice'




// function Product() {
 
//     const dispatch = useDispatch()
//     const { data: Products, status } = useSelector((state) => state.product || {});
//     console.log("🚀 ~ Product ~ Products:", Products)


//     // const [Product,SetProduct] = useState([])

//     // useEffect(() => {
//     // axios.get('https://fakestoreapi.com/products')
//     // .then((response) => SetProduct(response.data)
//     // )
//     // .catch((error) => console.error('Error fetching products:', error))
//     // },[]) // any changes thase state ma atle data re MEANS useEfftect re-render thase.

//     useEffect(() => {
//         dispatch(FetchProducts())
//     },[])

//     if (!Products) {
//         return <h2>Loading Data...</h2>;
//     }

//     return (
//     <div className='productWrapper'>
//         {
//              Products.map(product => (
//                 <div className='card'  key={product.id}>
//                      <img src={product.image} alt=""></img>
//                      <h4>{product.title}</h4>
//                      <h4>{product.price}</h4>
//                      {/* <button className='btn fm1' onClick={() => dispatch(AddItem({id:product.id,title:product.title,price:product.price,image:product.image}))} >Add to cart</button>   apde aa dispatch ma AddItem ma data ne send karvana teni ander and tya slice ma te data recevie kar se and teni cureent state ma push kari apse */}
//                      <button className='btn fm1' onClick={() => dispatch(AddItem(product))} ></button>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }



// export default Product



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem } from '../store/slice/cartSlice';
import { FetchProducts, STATUS } from '../store/slice/productslice';

function Product() {
    const dispatch = useDispatch();
    const { data: Products, status } = useSelector((state) => { return state.Product || {} })

    useEffect(() => {
        dispatch(FetchProducts());
    },[]);


    if (status === STATUS.LOADING) {
        return <h2>Loading Data...</h2>;
    }

    return (
        <div className='productWrapper'>
            {Products.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn fm1' onClick={() => dispatch(AddItem(product))}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Product;


