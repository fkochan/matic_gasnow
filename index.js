let onceFlag = true

if (onceFlag == true) {
  onceFlag = false
  GetGas()
  GetPrice()
} 

async function GetGas() {
  let response = await fetch('https://gasstation-mainnet.matic.network');
  let json = await response.json()
  let fastest = Math.round(json['fastest'])
  let standard = Math.round(json['standard'])
  let slow = Math.round(json['safeLow'])
  document.getElementById('fastest').innerHTML = fastest
  document.getElementById('standard').innerHTML = standard
  document.getElementById('slow').innerHTML = slow
  chrome.browserAction.setBadgeText({text: standard.toString()});
}

async function GetPrice() {
  let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=wmatic&vs_currencies=usd');
  let json = await response.json()
  let price = json['wmatic']['usd'].toFixed(2)
  document.getElementById('price').innerHTML = " MATIC Price: $" + price
}


setInterval(GetGas, 50000)
setInterval(GetPrice, 5000)



