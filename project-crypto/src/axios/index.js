import axios from "axios"

const getCoins = async (data) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${data}&per_page=100&page=1&sparkline=false`)
  }

export { getCoins }
