let currentURL = undefined

chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
    currentURL = tabs[0].url

    if (currentURL == undefined){
        document.querySelector("#error").innerHTML = "URL undefined error"
    } else{
        document.querySelector("#error").innerHTML = ""
        new QRCode(document.getElementById("qr-code"), currentURL)
    }
})
document.querySelector("#toogleCredits").addEventListener("click", () => {
    if (document.querySelector("#credits").style.display == "none"){
        document.querySelector("#credits").style.display = "block"
    } else{
        document.querySelector("#credits").style.display = "none"
    }
})