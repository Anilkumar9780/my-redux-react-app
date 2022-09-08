import { legacy_createStore } from "redux";
import rootReducers from "./reducer/reducer";
const store = legacy_createStore(rootReducers);
export default store;
