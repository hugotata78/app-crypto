import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableCoins from '../components/TableCoins';
import { actionGetCoins } from '../redux/actions/coinActions';


function ContainerListCoins() {

  const dispatch = useDispatch()
  const coins = useSelector(state => state.coinReducer.listCoins)
  const [search, setSearch] = useState('')
  const [data, setData] = useState('market_cap_desc')

  const handleOnClick = (e) => {
    e.preventDefault()
    setData(e.target.value)

  }
  useEffect(() => {
    dispatch(actionGetCoins(data))
  }, [dispatch, data])


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
        <select class="form-select mt-4" aria-label="Default select example" onClick={e => handleOnClick(e)}>
          <option value="market_cap_asc">Ascending Capital Market</option>
          <option value="market_cap_desc" selected>Descending Capital Market</option>
          <option value="volume_asc">Volume Ascending</option>
          <option value="volume_desc">Volume Down</option>
        </select>

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default ContainerListCoins;
