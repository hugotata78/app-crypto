import axios from "axios"

export const COINS = 'COINS'
export const COIN = 'COIN'
export const GET_LIST_COINS = 'GET_LIST_COINS'
// export const FETCH_COIN_REQUEST = 'FETCH_COIN_REQUEST'
// export const FETCH_COINS_REQUEST = 'FETCH_COINS_REQUEST'
// export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS'
// export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS'
// export const FETCH_COIN_ERROR = 'FETCH_COIN_REQUEST'
// export const FETCH_COINS_ERROR = 'FETCH_COINS_REQUEST'

// const fetchCoinRequest = () => {
//     return {
//         type: FETCH_COIN_REQUEST
//     }
// }

// const fetchCoinsRequest = () => {
//     return {
//         type: FETCH_COINS_REQUEST
//     }
// }

// const fetchCoinSuccess = (data) => {
//     return {
//         type: FETCH_COIN_SUCCESS,
//         payload: data
//     }
// }

// const fetchCoinsSuccess = (data) => {
//     return {
//         type: FETCH_COINS_SUCCESS,
//         payload: data
//     }
// }

// const fetchCoinError = () => {
//     return {
//         type: FETCH_COIN_ERROR
//     }
// }

// const fetchCoinsError = () => {
//     return {
//         type: FETCH_COINS_ERROR
//     }
// }


const actionGetCoins = (order,page) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/coins?order=${order}&page=${page}`)
            dispatch({
                type: COINS,
                payload: response.data
            })
        } catch (error) {

        }
    }
}

const actionGetCoin = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/coins/${id}`)
            dispatch({
                type: COIN,
                payload: response.data
            })
        } catch (error) {

        }
    }
}

const actionsGetListCoins = (page)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`http://localhost:4000/api/coins?page=${page}`)
            dispatch({
                type: GET_LIST_COINS,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export { actionGetCoins, actionGetCoin, actionsGetListCoins }