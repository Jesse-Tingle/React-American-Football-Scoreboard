import React, { useState } from "react";
import "./App.css";




const BottomRow = () => {

  const [downCount, setDownCount] = useState(0);
  const [toGoCount, setToGoCount] = useState(0);
  const [ballOnCount, setBallOnCount] = useState(0);
  const [quarterCount, setQuarterCount] = useState(0);
  
  
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value"> { downCount } </div>

        <div>
          <button onClick = {() => setDownCount(downCount + 1)}>↑</button>
          <button onClick = {() => setDownCount(downCount - 1)}>↓</button>
        </div>

      </div>

      

      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value"> { toGoCount } </div>

        <div>
          <button onClick = {() => setToGoCount(toGoCount + 1)}>↑</button>
          <button onClick = {() => setToGoCount(toGoCount - 1)}>↓</button>
        </div>

      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value"> { ballOnCount } </div>

        <div>
          <button onClick = {() => setBallOnCount(ballOnCount + 1)}>↑</button>
          <button onClick = {() => setBallOnCount(ballOnCount - 1)}>↓</button>
        </div>

      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value"> { quarterCount } </div>

        <div>
          <button onClick = {() => setQuarterCount(quarterCount + 1)}>↑</button>
          <button onClick = {() => setQuarterCount(quarterCount - 1)}>↓</button>
        </div>

      </div>


    </div>

    
  );
};

export default BottomRow;
