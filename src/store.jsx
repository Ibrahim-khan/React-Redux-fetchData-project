import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from  "../src/services/reducers/todosReducers"


const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;