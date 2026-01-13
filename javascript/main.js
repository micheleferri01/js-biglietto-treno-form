const ticketForm = document.getElementById("ticket-form");
const kil = document.getElementById("chilometri");
const age = document.getElementById("age");

ticketForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const pricePerKil = 0.21;
    const basePrice = (pricePerKil * kil.value).toFixed(2);
    console.log(`Kilometri da percorrere: ${kil.value} Km`);
    console.log("Età:",age.value);
    console.log(`Prezzo: ${basePrice} €`);
    kil.value = "";
    age.value = "";

});
