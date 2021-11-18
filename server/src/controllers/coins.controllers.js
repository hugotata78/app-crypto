const axios = require('axios')

const getListCoins = async (req,res)=>{
    try {
        const { order, page } = req.query
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=20&page=${page}&sparkline=false`)
        res.json(response.data)
    } catch (error) {
        res.json('error')
    }
}

const getCoin = async (req,res)=>{
    try {
        const { id } = req.params
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        res.json(response.data)
    } catch (error) {
        res.json('error')
    }
}
module.exports = {
    getListCoins,
    getCoin
}