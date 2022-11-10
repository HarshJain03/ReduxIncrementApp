import { createStore } from "redux";
import rootReducer from "./Components/Reducers/Index";

const store = createStore(rootReducer);

export default store;
