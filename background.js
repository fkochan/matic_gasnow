let onceFlag = true

if (onceFlag == true) {
  onceFlag = false
  GetGas()
} 

async function GetGas() {
  let response = await fetch('https://gasstation-mainnet.matic.network');
  let json = await response.json()
  let standard = Math.round(json['standard'])
  chrome.browserAction.setBadgeText({text: standard.toString()})
}


setInterval(GetGas, 10000)