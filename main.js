// MDN LINKS:
// Connection Property: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection
// Network Information: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
// Change Event: https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/change_event

let div = document.getElementById('info')
let h2 = document.getElementById('on-off-line')

const conn = navigator.connection

function updateUI(evt){
    console.log('change', evt)

    h2.innerText = navigator.onLine
    
    const downlink = conn.downlink
    const downlinkMax = conn.downlinkMax
    const effectiveType = conn.effectiveType
    const rtt = conn.rtt
    const saveData = conn.saveData
    const type = conn.type
    
    const text = `
    downlink: ${downlink}Mbps
    downlinkMax: ${downlinkMax}Mbps 🧪
    effectiveType: ${effectiveType}
    rtt: ${rtt}ms
    saveData: ${saveData}
    type: ${type} 🧪
    `
    
    div.innerText = text
}

conn.addEventListener('change', evt => {
    updateUI(evt)
})

updateUI(null)