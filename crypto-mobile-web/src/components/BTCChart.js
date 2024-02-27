import React, { useEffect, useState } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const API_URL ='https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7';


const MyLineChart = () => {

    const[data,setData] = useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            setIsLoading(true);
            setError(null);

            try{
                const response = await fetch(API_URL);
                const jsonData = await response.json();
                const formattedData = jsonData.prices.map(([timestamp,value])=>(
                {
                    date: new Date(timestamp*1000).toISOString().slice(0,10),
                    value
                }));
                setData(formattedData);
            }
            catch(error){setError(error);}
            finally{setIsLoading(false);}
        };
        fetchData();
       
    },[])

    if(isLoading)
    {
        return <p>Loading data</p>
    }
    if(error){
        return <p>Error</p>
    }

    return(
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Line  type="monotone" dataKey="value" stroke="#8884d8"/>
            <Tooltip/>
        </LineChart>
    );
};

export default MyLineChart;