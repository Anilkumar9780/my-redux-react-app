// import { legacy_createStore } from "redux";
// import rootReducers from "./reducer/reducer";
// const store = legacy_createStore(rootReducers);
// export default store;
import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducer/reducer";
const middleware = [thunk];

const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;