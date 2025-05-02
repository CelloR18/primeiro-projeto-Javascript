const select = document.querySelector(".seletor2")
const input = document.querySelector("input")
const valor = document.querySelector("#valor-real")
const valor2 = document.querySelector("#valor-dolar")
const dolartoday = 5.2
const eurotoday = 6.2
const libratoday = 7.5
const ienetoday = 26.0
const bandeira = document.querySelector(".eua")
const dolaramericano = document.querySelector("#moeda")


function cliquei() {

    const valorConvertido = Number(input.value);

    if (isNaN(valorConvertido) || valorConvertido <= 0) {
        valor2.textContent = "Digite um valor válido";
        return;
    }

    console.log(select.value)

    // Digitar o valor no input e trocar embaixo da bandeira.
    valor.textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(input.value)

    if (select.value == "dolar") {
        valor2.textContent = new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(input.value / dolartoday)

    }
    if (select.value == "euro") {
        valor2.textContent = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(input.value / eurotoday)
    }

    if (select.value == "libra") {
        valor2.textContent = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(input.value / libratoday)
    }
    if (select.value == "iene") {
        valor2.textContent = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(valorConvertido / ienetoday)
    }
   


}

function trocademoeda() {
    const bandeira = document.querySelector(".eua")

    if (select.value == "dolar") {
        dolaramericano.innerHTML = "Dolar"
        bandeira.src = "./assets/estados-unidos (1) 1.png"

    }
    if (select.value == "euro") {
        dolaramericano.innerHTML = "Euro"
        bandeira.src = "./assets/bandeira.euro.png"

    }
    if (select.value == "libra") {
        dolaramericano.innerHTML = "Libra"
        bandeira.src = "./assets/bandeira.libra.png"
    }
    if (select.value == "iene") {
        dolaramericano.innerHTML = "Iene"
        bandeira.src = "./assets/bandeirajp.png"
    }
    cliquei()
}

select.addEventListener("change", trocademoeda) // Colocar sempre fora da função, no final