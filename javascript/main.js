const ticketForm = document.getElementById("ticket-form");
const kilInput = document.getElementById("kilometri");
const ageInput = document.getElementById("age");

ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let kil = kilInput.value;
    let age = ageInput.value;
    console.log(`Kilometri da percorrere: ${kil} Km`);
    console.log("Età:", age);
    const priceForUser = price();
    console.log(`Prezzo Biglietto: ${priceForUser} €`);
    const ticket = document.getElementById("ticket");
    const Kilometri = document.getElementById("km");
    const ageCategory = document.getElementById("age-category");
    const finalPrice = document.getElementById("prezzo");

    if(!kil || !age){
        Kilometri.innerText = "";
        ageCategory.innerText = "";
        finalPrice.innerText = "";
        return;
    }

    Kilometri.innerText = `${kil} Km`;
    ageCategory.innerText = `${age}`;
    finalPrice.innerText = `${priceForUser} €`;

    kilInput.value = "";
    ageInput.value = "";

});

function price() {
    const pricePerKil = 0.21;
    const basePrice = (pricePerKil * kilInput.value).toFixed(2);
    if (age.value === "Minorenne") {
        return discountForMinor(basePrice);
    }
    if (age.value === "Maggiorenne") {
        return basePrice;
    }
    if (age.value === "Over 65") {
        return discountForOver65(basePrice);
    }
}
function discountForMinor(basePrice) {
    const discount = (basePrice * 20 / 100).toFixed(2);
    const discountedPrice = (basePrice - discount).toFixed(2);
    return discountedPrice;
}

function discountForOver65(basePrice) {
    const discount = (basePrice * 40 / 100).toFixed(2);
    const discountedPrice = (basePrice - discount).toFixed(2);
    return discountedPrice;
}