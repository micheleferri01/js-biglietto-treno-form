const ticketForm = document.getElementById("ticket-form");
const kil = document.getElementById("chilometri");
const age = document.getElementById("age");

ticketForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(`Kilometri da percorrere: ${kil.value} Km`);
    console.log("Età:",age.value);
    const priceForUser = price();
    console.log(`Prezzo Biglietto: ${priceForUser} €`)
    kil.value = "";
    age.value = "";
    
});

function price(){
    const pricePerKil = 0.21;
    const basePrice = (pricePerKil * kil.value).toFixed(2);
    if(age.value === "minorenne"){
       return discountForMinor(basePrice);
    }
    if(age.value === "maggiorenne"){
       return basePrice;
    }
    if(age.value === "over65"){
       return discountForOver65(basePrice);
    }    
}
function discountForMinor(basePrice){
   const discount = (basePrice * 20 / 100).toFixed(2);
   const discountedPrice = (basePrice - discount).toFixed(2);
    return discountedPrice
}

function discountForOver65(basePrice){
    const discount = (basePrice * 40 / 100).toFixed(2);
    const discountedPrice = (basePrice - discount).toFixed(2);
}