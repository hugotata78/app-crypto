import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from '../components/TableCoins';


function ContainerListCoins() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [data,setData] = useState(null)
  const order = data || 'market_cap_desc'
  const getCoins = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=100&page=1&sparkline=false`)
    setCoins(response.data)
  }

  useEffect(() => {
    getCoins()
  }, [])
  return (
    <div className="container">
      <div className='row'>
        <h1 className='mt-4 text-center'>Crypto Currency</h1>
        <input
          type='text'
          placeholder='Search ...'
          className='form-control bg-dark text-light border-0 mt-4 m-auto text-center'
          autoFocus
          onChange={e => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default ContainerListCoins;
