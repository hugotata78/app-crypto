import { COIN, COINS } from "../actions/coinActions"

const initialState ={
    listCoins:[],
    coin:{}
}

const coinReducer = (state=initialState,action)=>{
    switch(action.type){
        case COINS:
            return{
                ...state,
                listCoins:action.payload
            }
        case COIN:
            return{
                ...state,
                coin:action.payload
            }
        default:
            return state
    }
}

export { coinReducer }