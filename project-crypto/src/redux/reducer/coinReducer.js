import { FETCH_COINS_ERROR, FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COIN_ERROR, FETCH_COIN_REQUEST, FETCH_COIN_SUCCESS, RESET_STATE } from "../actions/coinActions"

const initialState = {
    coin: {},
    coins: [],
    errorCoin: false,
    errorCoins: false,
    loadingCoin: false,
    loadingCoins: false,

}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_COIN_REQUEST:
            return {
                ...state,
                coin: {},
                errorCoin: false,
                loadingCoin: true
            }

        case FETCH_COIN_SUCCESS:
            return {
                ...state,
                coin: action.payload,
                errorCoin: false,
                loadingCoin: false
            }
        case FETCH_COIN_ERROR:
            return {
                ...state,
                coin: {},
                errorCoin: true,
                loadingCoin: false
            }
        case FETCH_COINS_REQUEST:
            return {
                ...state,
                coins: [],
                errorCoins: false,
                loadingCoins: true
            }

        case FETCH_COINS_SUCCESS:
            return {
                ...state,
                coins: action.payload,
                errorCoins: false,
                loadingCoins: false
            }
        case FETCH_COINS_ERROR:
            return {
                ...state,
                coins: [],
                errorCoins: true,
                loadingCoins: false
            }
        case RESET_STATE:
            return {
                ...state,
                coin: null
            }
        default:
            return state
    }
}

export { coinReducer }