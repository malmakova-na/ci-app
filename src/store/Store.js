import {createStore} from "redux";
import reducer from "./reducer";
import initialStore from "./initialStore";

const store = createStore(reducer, initialStore);
export default store;