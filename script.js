const select= document.querySelector(".seletor2")
const input= document.querySelector("input")
const valor= document.querySelector("#valor-real")
const valor2= document.querySelector("#valor-dolar")
const dolartoday= 5.2
const eurotoday= 6.2
const bandeira= document.querySelector(".eua")
const dolaramericano= document.querySelector("#moeda")



function cliquei(){
 
console.log(select.value)

     // Digitar o valor no input e trocar embaixo da bandeira.
     valor.textContent= new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(input.value)

    if (select.value == "dolar") {
        valor2.textContent= new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format( input.value / dolartoday)
        
    }
    if(select.value == "euro") {
         valor2.textContent= new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format( input.value / eurotoday)
        }

}

function trocademoeda (){
    const bandeira= document.querySelector(".eua")
    
    if (select.value == "dolar") {
        dolaramericano.innerHTML="Dolar"
        bandeira.src="./assets/estados-unidos (1) 1.png"
        
    }
    if(select.value == "euro") {
        dolaramericano.innerHTML="Euro"
        bandeira.src="./assets/bandeira.euro.png"
        
        
    }

cliquei()
}
    
select.addEventListener("change", trocademoeda) // Colocar sempre fora da função, no final.