import axios from "axios"

export const COINS = 'COINS'
export const COIN = 'COIN'
export const RESET_STATE = 'RESET_STATE'
export const FETCH_COIN_REQUEST = 'FETCH_COIN_REQUEST'
export const FETCH_COINS_REQUEST = 'FETCH_COINS_REQUEST'
export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS'
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS'
export const FETCH_COIN_ERROR = 'FETCH_COIN_REQUEST'
export const FETCH_COINS_ERROR = 'FETCH_COINS_REQUEST'

const fetchCoinRequest = () => {
    return {
        type: FETCH_COIN_REQUEST
    }
}

const fetchCoinsRequest = () => {
    return {
        type: FETCH_COINS_REQUEST
    }
}

const fetchCoinSuccess = (data) => {
    return {
        type: FETCH_COIN_SUCCESS,
        payload: data
    }
}

const fetchCoinsSuccess = (data) => {
    return {
        type: FETCH_COINS_SUCCESS,
        payload: data
    }
}

const fetchCoinError = () => {
    return {
        type: FETCH_COIN_ERROR
    }
}

const fetchCoinsError = () => {
    return {
        type: FETCH_COINS_ERROR
    }
}


const actionGetCoins = (order, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCoinsRequest())
            const response = await axios.get(`http://localhost:4000/api/coins?order=${order}&page=${page}`)
            dispatch(fetchCoinsSuccess(response.data))
        } catch (error) {
            dispatch(fetchCoinsError())
        }
    }
}

const actionGetCoin = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCoinRequest())
            const response = await axios.get(`http://localhost:4000/api/coins/${id}`)
            dispatch(dispatch(fetchCoinSuccess(response.data)))
        } catch (error) {
            dispatch(fetchCoinError())
        }
    }
}

const actionsResetState = () => {
    return {
        type: RESET_STATE
    }
}
export { actionGetCoins, actionGetCoin, actionsResetState }