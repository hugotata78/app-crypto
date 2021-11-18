import { COIN, COINS, GET_LIST_COINS } from "../actions/coinActions"

const initialState = {
    coin: {},
    error: false,
    listCoins: [],
    loading: false,
    coins:[]
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {

        case COINS:
            return {
                ...state,
                listCoins: action.payload,
            }
        
        case COIN:
            return {
                ...state,
                coin: action.payload
            }
        case GET_LIST_COINS:
            return{
                ...state,
                coins:action.payload
            }
        default:
            return state
    }
}

export { coinReducer }