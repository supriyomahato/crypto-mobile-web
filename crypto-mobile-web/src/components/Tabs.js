import React, { useState } from 'react';
import './Tabs.css';
import { ResponsiveContainer } from 'recharts';
import BTCChart from './BTCChart'

function Tabs() {
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <ResponsiveContainer width="100%" aspect={1}>
<div className="container">
      <div className="tab-container">
        <p
          className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleTab(1)}
        >
          Day
        </p>
        <p
          className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleTab(2)}
        >
          Week
        </p>
        <p
          className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleTab(3)}
        >
          Month
        </p>
        <p
          className={toggleTab === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleTab(4)}
        >
          Year
        </p>
      </div>
      <div className="content-tabs">
        <div className={toggleTab === 1 ? "content active-content" : "content"}>
          <BTCChart/>
        </div>
        <div className={toggleTab === 2 ? "content active-content" : "content"}>
        <BTCChart/>
        </div>
        <div className={toggleTab === 3 ? "content active-content" : "content"}>
        <BTCChart/>
        </div>
        <div className={toggleTab === 4 ? "content active-content" : "content"}>
        <BTCChart/>
        </div>
      </div>
    </div>
    </ResponsiveContainer>
    
  );
}

export default Tabs;