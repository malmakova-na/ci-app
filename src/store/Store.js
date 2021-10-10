import {createStore} from "redux";
import reducer from "./reducer";
import initialStore from "./initialStore";

export const store = createStore(reducer, initialStore);
