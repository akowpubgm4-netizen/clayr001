let yoqqil = document.querySelector(".yoqqil")
let eheh = document.querySelector(".eheh")
let card = document.querySelector(".card")
let savatcha = document.querySelector(".savatcha1")
let savatcha2= document.querySelector(".savatcha")



console.log(yoqqil);
console.log(eheh);
console.log(card);
console.log(savatcha);
;console.log(savatcha2);

yoqqil.addEventListener("click" , function(){
card.style.display = "none"
})


eheh.addEventListener("click" , function (){
    card.style.display ="block"
})


savatcha.addEventListener("mouseover" , function(){
    savatcha2.style.display = "block"
} )


savatcha.addEventListener("mouseout" , function (){
    savatcha2.style.display ="none"
})












































