import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const CoinsRow = ({ coin, index }) => {

    const history = useHistory()

    const handleClick = (e,id)=>{
        e.preventDefault()
        history.push(`/coins/${id}`)
    }
    return (
        <tr>
            <td>
                {index}
            </td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: '5%' }} className='img-fluid me-4' />
                <span>{coin.name}</span>
                <span className='ms-4 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>
                {coin.current_price}
            </td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
            </td>
            <td>
                {coin.total_volume}
            </td>
            <td>
                <button
                 className='btn btn-success'
                 onClick={e=>handleClick(e,coin.id)}
                >
                    details
                </button>
            </td>
        </tr>
    )
}

export default CoinsRow