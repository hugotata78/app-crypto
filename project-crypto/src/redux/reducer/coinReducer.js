import { COIN, COINS, RESET_STATE } from "../actions/coinActions"

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
        case RESET_STATE:
            return{
                ...state,
                coin:null
            }
        default:
            return state
    }
}

export { coinReducer }