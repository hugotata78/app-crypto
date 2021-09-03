import React from 'react'

const Coin = ({ coin }) => {
    return (
        <div class="card mt-4" style={{width: "18rem;"}}>
            <img src={coin.image && coin.image.large} className="w-50 m-auto img-fluid" alt={coin.name} />
            <div className="card-body">
                <p className="card-text text-dark">{coin.name}</p>
            </div>
        </div>
    )
}

export default Coin