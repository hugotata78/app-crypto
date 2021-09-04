
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Coin from '../components/Coin'
import { actionGetCoin } from '../redux/actions/coinActions'

const ContainerCoin = ()=>{

    const { id } = useParams()
    const coin = useSelector(state=>state.coinReducer.coin)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actionGetCoin(id))
    },[dispatch,id])

    return(
        <div className='container'>
            <Coin coin={coin}/>
        </div>
    )
}

export default ContainerCoin