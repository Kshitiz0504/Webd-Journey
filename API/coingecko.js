export default async function handler(req, res) {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10&interval=daily');
      
      if (!response.ok) {
        return res.status(response.status).json({ error: "CoinGecko API error" });
      }
  
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*'); // Optional: if you want to test locally
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
  