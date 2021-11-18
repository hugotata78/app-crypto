import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducer/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { actionsGetListCoins } from "./actions/coinActions";





const store = createStore(rootReducers,

    composeWithDevTools(
        applyMiddleware(thunk)
    ))

store.dispatch(actionsGetListCoins(1))

export { store }