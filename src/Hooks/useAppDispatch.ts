import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/configureStore";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
