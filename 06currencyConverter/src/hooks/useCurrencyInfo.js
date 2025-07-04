import { useState, useEffect } from 'react';

function UseCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                );
                const result = await response.json();

                // 🧠 Check what the response looks like:
                console.log("Currency API raw data:", result);

                if (result && result.data) {
                    const rates = {};

                    // Convert to lowercase: { usd: 1, inr: 83.2, eur: 0.9, ... }
                    for (let key in result.data) {
                        rates[key.toLowerCase()] = result.data[key].value;
                    }

                    setData(rates);
                } else {
                    console.error("API response does not have expected 'data' key");
                    setData({});
                }

            } catch (err) {
                console.error("Error fetching currency data:", err);
                setData({});
            }
        };

        fetchData();
    }, [baseCurrency]);

    return data;
}

export default UseCurrencyInfo;
