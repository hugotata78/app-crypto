import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Coin from '../components/Coin'

const ContainerCoin = ()=>{

    const { id } = useParams()
    const [coin,setCoin] = useState({})

    const getCoin = async ()=>{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        console.log(response.data)
        setCoin(response.data)
    }

    useEffect(()=>{
        getCoin()
    },[])

    return(
        <div className='container'>
            <Coin coin={coin}/>
        </div>
    )
}

export default ContainerCoin