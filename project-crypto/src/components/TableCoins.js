import React from 'react'
import CoinsRow from './CoinsRow'

const TableCoins = ({ coins, search }) => {

    const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <table className='table table-dark mt-4 table-hover'>
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <td key={i}>{title}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredCoins.map((coin, index) => {
                            return (
                                <CoinsRow coin={coin} index={index + 1} key={index + 1} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCoins