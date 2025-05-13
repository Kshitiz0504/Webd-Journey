import { createContext } from "react";
import { useState, useEffect } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-aW1eawdinNohwYMA2VT7y74M'
            }
        };

        try {
            const response = await fetch('/api/coingecko', options);
            const data = await response.json();
            setAllCoin(data);
        } catch (error) {
            console.error("Failed to fetch coins:", error);
        }
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin,
        currency,
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
