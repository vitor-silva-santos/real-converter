const button = document.getElementById("btn-convert")
const imputReal = document.getElementById("imput-real")
const select = document.getElementById("currency-select")
// Currency Value
const dolar = 5.2
const euro = 6.2
const bitcoin = 0.000011

const convertValue = () => {
    const imputReal = document.getElementById("imput-real").value
    const showConvertValue = document.getElementById("convert-value")

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
        showConvertValue.innerText = (imputReal * bitcoin).toFixed(6)
    }


}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyCountry = document.getElementById("currency-country")


    if (select.value === "euro") {
        currencyCountry.src = "./assets/country/europe.png"
        currencyName.innerText = "Euro"
        console.log("Euro: ", euro)
    }
    if (select.value === "dolar-americano") {
        currencyCountry.src = "./assets/country/unitedStates.png"
        currencyName.innerText = "Dólar americano"
        console.log("Dólar: ", dolar)
    }

    if (select.value === "bitcoin") {
        currencyCountry.src = "./assets/country/bitcoin.png"
        currencyName.innerText = "Bitcoin"
        console.log("Bitcoin: ", bitcoin)
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





