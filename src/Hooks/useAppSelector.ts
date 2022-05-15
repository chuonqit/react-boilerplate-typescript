import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/configureStore";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
