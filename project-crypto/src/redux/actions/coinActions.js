import axios from "axios"

export const COINS = 'COINS'
export const COIN = 'COIN'

const actionGetCoins = (data)=>{
    return async (dispatch)=>{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${data}&per_page=100&page=1&sparkline=false`)
        dispatch({
            type:COINS,
            payload:response.data
        })
    }
}

const actionGetCoin = (id)=>{
    return async (dispatch)=>{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        dispatch({
            type:COIN,
            payload:response.data
        })
    }    
}
export { actionGetCoins, actionGetCoin }