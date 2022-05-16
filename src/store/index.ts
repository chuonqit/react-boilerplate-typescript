import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const middlewares: any[] = [];

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;