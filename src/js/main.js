var tokenSaleData = [
  {
    amount: 1000,
    timestamp: 1504973555020, // blocknumber possibly
    bidder: '0xc78310231aa53bd3d0fea2f8c705c67730929d8f'
  },
  {
    amount: 1021,
    timestamp: 1504973555099, // blocknumber possibly
    bidder: '0xc78310231aa53bd3d0fea2f8c705c67730929d8f'
  }, 
  {
    amount: 1000,
    timestamp: 1504973555021, // blocknumber possibly
    bidder: '0xc78310231aa53bd3d0fea2f8c705c67730929d8f'
  }, 
  {
    amount: 1020,
    timestamp: 1504973555090, // blocknumber possibly
    bidder: '0xc78310231aa53bd3d0fea2f8c705c67730929d8f'
  }, 
]

var wrapper = document.querySelector('#bid-gui')
var emptyTokens = Array(365 - tokenSaleData.length).fill({});

tokenSaleData.concat(emptyTokens).forEach(bid => {
  var elm = document.createElement('div')
  elm.className = 'token' + (bid.amount ? ' bid' : '')
  wrapper.appendChild(elm)
})