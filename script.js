const button = document.getElementById("btn-convert")
const imputReal = document.getElementById("imput-real")
const select = document.getElementById("currency-select")

const convertValue = async () => {
    const imputReal = document.getElementById("imput-real").value
    const showConvertValue = document.getElementById("convert-value")

    const data = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
   
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high 
    const bitcoin = data.BTCBRL.high * 1000

    if (select.value === "euro") {
        showConvertValue.innerText = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(imputReal / euro)
    }
    if (select.value === "dolar-americano") {
        showConvertValue.innerText = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(imputReal / dolar)
    }
    if (select.value === "bitcoin") {
        showConvertValue.innerText = (imputReal / bitcoin).toFixed(6)
    }


}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyCountry = document.getElementById("currency-country")


    if (select.value === "euro") {
        currencyCountry.src = "./assets/country/europe.png"
        currencyName.innerText = "Euro"
    }
    if (select.value === "dolar-americano") {
        currencyCountry.src = "./assets/country/unitedStates.png"
        currencyName.innerText = "Dólar americano"
    }

    if (select.value === "bitcoin") {
        currencyCountry.src = "./assets/country/bitcoin.png"
        currencyName.innerText = "Bitcoin"
    }

    convertValue()
}

const chanceValueReal = () => {
    const imputReal = document.getElementById("imput-real").value
    const showRealValue = document.getElementById("value-real")

    showRealValue.innerText = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(imputReal)


}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)
imputReal.addEventListener("input", chanceValueReal)





