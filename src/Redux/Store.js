import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from './User/UserSlice'
import storage from 'redux-persist/lib/storage'
//-------------------------------------------------------------

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const Store = configureStore({
    reducer: {
        user: persistedReducer
    }
})

export const persistor = persistStore(Store);