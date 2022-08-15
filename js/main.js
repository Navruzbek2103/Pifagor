let aKatet = Number(prompt("Uchburchakning birinchi katetini kiriting:"));
let bKatet = Number(prompt("Uchburchakning ikkinchi katetini kiriting:"));
let aTomon = document.querySelector(".aKatet");
let bTomon = document.querySelector(".bKatet");
let resultGipotenuza = document.querySelector(".gipotenuza");


let gipotenuza = 0;

gipotenuza = Math.pow(aKatet, 2) + Math.pow(bKatet, 2);

aTomon.innerHTML = "a tomon = " + aKatet;
bTomon.innerHTML = "b tomon = " + bKatet;
resultGipotenuza.innerHTML = gipotenuza;