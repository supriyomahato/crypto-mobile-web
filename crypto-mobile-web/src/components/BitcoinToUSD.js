import React from "react";
import logo from "./logo.png";
function BitcoinToUSD({bitcoin, usd,rate})
{
    bitcoin=3.529020;
    usd=19.153;
    rate=-2.32;
    return(
    <div className="bitcoin-usd">
        <div className="heading">
        <img className="my-logo" src={logo} alt="Logo" />
        <div className="title">
        <h4>Bitcoin</h4>
        </div>
        </div>
        <div>
        <h1 className="btcValue">{bitcoin} BTC</h1>
            <div className="usdRate">
            <h2 className="usdValue">${usd} USD</h2>
            <h3 className="rate">{rate}%</h3>
            </div>
        
        </div>
    </div>
    
    );
}

export default BitcoinToUSD