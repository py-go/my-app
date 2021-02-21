import { rawBidResponses, winnerResponses } from './mock-data';


export function getBids() {
  let bids = { biddings: {} }
  var res = rawBidResponses //MOCK: pbjs.getBidResponses();
  Object.keys(res)
    .forEach(function (key) {
      res[key].bids.forEach(function (item) {
        var temp = {
          bidder: item.bidder,
          cpm: item.cpm,
          size: item.size,
          currency: item.currency,
          mediaType: item.mediaType,
          latency: item.timeToRespond,
          winner: null
        };
        bids.biddings[key] ? bids.biddings[key].push(temp) : bids.biddings[key] = [temp]
      })
    })
  return bids
  // bids['domain'] = domain;
  // postMessage(bids, "*")
}

export function getWinners(bidResponses) {

  var res = winnerResponses //MOCK: pbjs.getAllWinningBids();
  res.forEach(function (wobj) {
    bidResponses.biddings[wobj.adUnitCode].forEach(function (item) {

      item.winner = (item.bidder === wobj.bidder && item.cpm === wobj.cpm)
    })
  })
  return bidResponses
  // postMessage(bids,"*");
}

