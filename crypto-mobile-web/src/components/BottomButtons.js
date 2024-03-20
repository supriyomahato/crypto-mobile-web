import React from 'react';

function BottomButtons(){
    const show = (a) => {
        alert(a);
      }

      return (
        <div>
            <div className='buyBtn'>
            <button onClick={() => show("Goal!")}>Buy BTC</button>
            </div>
            <div className='sellBtn'>
            <button onClick={() => show("Goal!")}>Sell BTC</button>
            </div>
        </div>
       
      );
}

export default BottomButtons;