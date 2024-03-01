import React, { useEffect, useState } from 'react';
import {XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer} from 'recharts';

const API_URL ='https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30';


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
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error!</p>
    }

    return(
<ResponsiveContainer width="100%" aspect={1}>
<AreaChart
width={500}
height={300}
  data={data}
margin={{ top: 5, right: 40, left: -40, bottom: 5 }}
>
  <XAxis dataKey="name" axisLine={false} tick={false}/>
  <YAxis axisLine={false} tick={false}/>
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#FFA590" fill="white" strokeWidth={3} strokeLinecap="round"  />
</AreaChart>
</ResponsiveContainer>
        

        // <LineChart width={600} height={300} data={data}>
        //     <XAxis dataKey="date"/>
        //     <YAxis/>
        //     <Line dataKey="value" type="monotone" stroke="orange"/>
        //     <Tooltip/>
        // </LineChart>
    );
};

export default MyLineChart;