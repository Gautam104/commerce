    import { configureStore } from '@reduxjs/toolkit'
    import CartReducer from './slice/cartSlice' 
    import ProductReducer from '../store/slice/productslice'
    // import { persistStore,persistReducer } from 'redux-persist'
    // import storage from 'redux-persist/lib/storage'
    

    // const persistConfig = {  // persistConfig thi j apne apna normal reducer ne persistReducer ma convert kari chu.
    //     key:'root',
    //     storage,  // storge means aam data store karvana che.
    // }

    // const PersistreducerCart = persistReducer(persistConfig,CartReducer) //  first parmater persistConfig(1 parmater) and second parmater(reducer) ave.
    // const PersistreducerProduct = persistReducer(persistConfig,ProductReducer)

    export const Store = configureStore({
        reducer:{
        Cart:CartReducer,
        Product:ProductReducer
        }
    })


    //  const persiststore = persistStore(Store)

    // export { Store,persiststore }