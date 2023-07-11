import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: { user: userReducer }
})

export type RootState = ReturnType<typeof store.getState>
//  ' ReturnType' is a standard TypeScript utility type that returns the return type of the function type passed into it
// 'getState' function returns the full state object

