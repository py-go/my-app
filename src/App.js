import React, { useState, useEffect } from "react";
import './App.css';
import { Home, RenderBid } from './components'
import { getBids, getWinners } from './services'

function App() {
  const [bids, setbids] = useState({});
  const [winnerBids, setwinnerBids] = useState([]);

  //a/ Captures auction information from prebid.js
  useEffect(() => {
    let res = getBids();
    setbids(res)
    setwinnerBids(getWinners(res))
  }, []);

  //b/ Adds auction data received from a javascript call to a persistent queue

  // pbjs.que.push(function() {
  //     pbjs.onEvent("auctionEnd",getBids);
  //     pbjs.onEvent("bidWon",getWinners);
  // });

  return (
    <div className="App">
      <Home />
      <RenderBid type="bid" bids={bids} />
    </div>
  );
}

export default App;
