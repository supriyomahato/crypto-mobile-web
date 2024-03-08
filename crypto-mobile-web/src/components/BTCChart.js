import React, { useEffect, useState } from 'react';
import {XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer} from 'recharts';
import './BTCChart.css';

const API_URL ='https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30';


const MyAreaChart = () => {

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
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error!</p>
    }

    return(
<ResponsiveContainer className="chart-container" width="100%" aspect={1.7}>
    <div className='lower-value'>
    <div className='dot-one'><h2>.</h2></div>
    <p>Lower: $4.895</p>
    </div>
    <div className='higher-value'>
    <p>Lower: $6.897</p>
    </div>

<AreaChart

  data={data}
margin={{ right: 40, left: -40}}
>

  <XAxis dataKey="name" axisLine={false} tick={false}/>
  <YAxis axisLine={false} tick={false}/>
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#FFA590" fill="#FFF6ED" strokeWidth={3} strokeLinecap="round"  />
</AreaChart>
</ResponsiveContainer>

    );
};

export default MyAreaChart;