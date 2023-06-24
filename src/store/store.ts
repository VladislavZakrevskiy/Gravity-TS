import { configureStore, combineReducers } from "@reduxjs/toolkit";
import canvasSlice from './reducers/canvasSlice';
import constSlice from './reducers/constsSlice';

const reducer = combineReducers({
    canvasSlice,
    constSlice
})

export const store = configureStore({
    reducer,

})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch