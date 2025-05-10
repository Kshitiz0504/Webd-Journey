import React from 'react'
import './Coin.css'
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/Linechart'

const Coin = () => {

    const {coinId} = useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const {currency} = useContext(CoinContext);

    const fetchCoinData = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-api-key': 'CG-aW1eawdinNohwYMA2VT7y74M'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));

    }

    const fetchHistoricalData = async() => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-api-key': 'CG-aW1eawdinNohwYMA2VT7y74M'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCoinData();
    }, [currency])

    if(coinData, historicalData) {
        return (
            <div className='coin'>
                <div className="coin-name">
                <img src={coinData?.image?.large} alt="" />
                <p><b>{coinData?.name} ({coinData?.symbol?.toUpperCase()})</b></p>
            
                </div>
                <div className="coin-chart">
                    <LineChart/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="spinner">
                <div className="spin"></div>
            </div>
        )
    }

}

export default Coin