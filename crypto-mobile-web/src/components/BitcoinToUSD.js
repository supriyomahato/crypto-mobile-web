import React from "react";
import logo from "./logo.png";
function BitcoinToUSD({bitcoin, usd})
{
    return(
    <div class="bitcoin-usd">
        <div class="logo-1">
        <img src={logo} alt="Logo" />
        </div>
        <div>
        <h4>Bitcoin</h4>
        </div>
    </div>
    );
}

export default BitcoinToUSD