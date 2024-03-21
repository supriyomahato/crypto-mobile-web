import React, { useState } from 'react';
import './Tabs.css';
import { ResponsiveContainer } from 'recharts';
import BTCChart from './BTCChart';

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
          {/* Conditional rendering of charts */}
          {toggleTab === 1 && <BTCChart days={1} />}
          {toggleTab === 2 && <BTCChart days={7} />}
          {toggleTab === 3 && <BTCChart days={30} />}
          {toggleTab === 4 && <BTCChart days={365} />}
        </div>
      </div>
    </ResponsiveContainer>
  );
}

export default Tabs;
