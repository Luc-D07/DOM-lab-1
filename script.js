"use strict";

//VENDING MACHINE

let limeCola = document.querySelector(".lime-cola");
let saltedPeanuts = document.querySelector(".salted-peanuts");
let chocolateBar = document.querySelector(".chocolate-bar");
let fruitGummies = document.querySelector(".fruit-gummies");
let totalDiv = document.querySelector(".total");
// let button = document.querySelector(".button");
let total = 0;

// *******LOOP/For each?

// buttonDiv.addEventListener("click",()=>{
//     let buttons = document.querySelectorAll(".button")
//     buttons.forEach((button)=>{
//         let price = parseFloat(button.getAttribute("data-price"));
//         totalDiv.innerText = (`Total: $${total}.00`);
//         total += price;

//             //  console.log(total.toFixed(2))
//     });
// })

limeCola.addEventListener("click", () => {
  let price = parseFloat(limeCola.getAttribute("data-price"));
  total += price;
  totalDiv.innerText = `Total: $${total}.00`;
  
});

chocolateBar.addEventListener("click", () => {
  let price = parseFloat(chocolateBar.getAttribute("data-price"));
  total += price;
  totalDiv.innerText = `Total: $${total}.00`;
});

saltedPeanuts.addEventListener("click", () => {
  let price = parseFloat(saltedPeanuts.getAttribute("data-price"));
  total += price;
  totalDiv.innerText = `Total: $${total}.00`;
  
});

fruitGummies.addEventListener("click", () => {
  let price = parseFloat(fruitGummies.getAttribute("data-price"));
  total += price;
  totalDiv.innerText = `Total: $${total}.00`;
  
});


//MAKE MONEY

let coinForm = document.querySelector(".coin-form");
// let quarter = document.querySelector(".quarter")
// let dime = document.querySelector(".dime")
// let nickel = document.querySelector(".nickel")
// let penny = document.querySelector(".penny")
let coinContainer = document.querySelector(".coin-container")


coinForm.addEventListener("submit", (e)=>{
e.preventDefault();
let formData= new FormData(coinForm);
let coinNumber = formData.get("amount")
let coinType = formData.get("coin-type")

for(let i=1; i<=coinNumber; i++){
    let coinDiv = document.createElement("div");
   
coinDiv.setAttribute("class", "coin-div");
// coinDiv.classList.add("coin-div");
coinDiv.classList.add(".circle");
coinDiv.innerText=`${coinType}`
coinContainer.append(coinType)
};

coinForm.reset();

});
//this remove is removing all of them at once
coinContainer.addEventListener("click", ()=>{
    // if (e.target.classList.contains("coin-div")){
    //     e.target.remove();
    // };
    coinContainer.remove();
});



// ****************** LIGHT BULB *******************/
let lightBulb = document.querySelector(".lightbulb")
// let lightButton = document.querySelectorAll(".light-button");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", ()=>{
lightBulb.style.backgroundColor = "yellow";
});

offButton.addEventListener("click", ()=>{
    lightBulb.style.backgroundColor = "black";
});

//doesn't work well
toggleButton.addEventListener("click", ()=>{
    // lightBulb.classList.toggle("on-off");
    // //will only execute below
    // lightBulb.classList.toggle("off-on");
   
    if (lightBulb.style.backgroundColor = "gray"){
        lightBulb.style.backgroundColor = "yellow";
       
    }else if(lightBulb.style.backgroundColor = "black") {
        lightBulb.style.backgroundColor = "gray";
       
    } else {
        lightBulb.style.backgroundColor = "yellow"
    };
    
});

endButton.addEventListener("click", ()=>{
    lightBulb.remove();
    onButton.disabled = true;
    offButton.disabled = true;
    toggleButton.disabled = true;
    endButton.disabled = true;
    
})


