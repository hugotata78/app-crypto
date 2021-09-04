import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Coin = ({ coin }) => {
    return (
        <div className="card bg-dark mt-4 w-100 p-4 m-auto">
            <Link to='/'>
                <button className='btn btn-outline-primary btn-lg' title='Home'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
                </button>
            </Link>
            <img src={coin.image && coin.image.large} className="w-25 mt-4 m-auto img-fluid" alt={coin.name} />
            <div className="card-body mt-4">

                <h1 className="card-title text-center">{coin.name}</h1>
                <h3 className='mt-2'>Details</h3>
                <p style={{ fontSize: '20px', margin: '0' }}>Symbol: <span>{coin.symbol}</span></p>
                <p style={{ fontSize: '20px', margin: '0' }}>Rank: <span>{coin.market_data && coin.market_data.market_cap_rank}</span></p>
                <p style={{ fontSize: '20px', margin: '0' }}>Price U$D: {coin.market_data && coin.market_data.current_price.usd}</p>
                <p style={{ fontSize: '20px', margin: '0' }}>
                    Price Change U$D:{' '}
                    <span className={coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.usd > 0 ? 'text-success' : 'text-danger'}>
                        {coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.usd}
                    </span>
                </p>
                <p style={{ fontSize: '20px', margin: '0' }}>Volume: <span>{coin.market_data && coin.market_data.total_volume.usd}</span></p>
                <h3 className='mt-4'>Description: </h3>
                <p >{(coin.description && coin.description.es) || 'No description'}</p>

            </div>
        </div>
    )
}

export default Coin