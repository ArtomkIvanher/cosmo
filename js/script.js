const container__img = document.getElementById("container__img");
const container__planeta_name = document.getElementById("container__planeta_name");
const container__planeta_text = document.getElementById("container__planeta_text");

const container__card1 = document.getElementById("container__card1");
const container__card2 = document.getElementById("container__card2");
const container__card3 = document.getElementById("container__card3");
const container__card4 = document.getElementById("container__card4");


render()

function render(id, name, text){
    container__planeta_name.innerHTML = "hh"
}

document.querySelector("#el1").onclick = function(){
    el1()
}
document.querySelector("#el2").onclick = function(){
    el2()
}
document.querySelector("#el3").onclick = function(){
    el3()
}
document.querySelector("#el4").onclick = function(){
    el4()
}
document.querySelector("#el5").onclick = function(){
    el5()
}
document.querySelector("#el6").onclick = function(){
    el6()
}
document.querySelector("#el7").onclick = function(){
    el7()
}
document.querySelector("#el8").onclick = function(){
    el8()
}

function el1(){
    container__img.innerHTML = `
        <img src="img/el1-1.png" alt="">
    `;

    container__planeta_name.innerHTML = "Mercury";
    container__planeta_text.innerText = "el1";

    cardText("el1", "el1-1", "el1-2", "el1-3")

    container__card1.innerHTML = "";
    container__card2.innerHTML = "";
    container__card3.innerHTML = "";
    container__card4.innerHTML = "";
}

function el2(){
    container__img.innerHTML = `
        <img src="img/el2-1.png" alt="">
    `;

    container__planeta_name.innerHTML = "Venus";
    container__planeta_text.innerText = "el2";

    cardText("el2", "el2-1", "el2-2", "el2-3")

    container__card1.innerHTML = "";
    container__card2.innerHTML = "";
    container__card3.innerHTML = "";
    container__card4.innerHTML = "";
}

function cardText(id, text1, text2, text3){
    document.querySelector("#container__btn1").onclick = function(){
        container__planeta_text.innerText = text1
        container__img.innerHTML = `
            <img src="img/${id}-1.png" alt="">
        `;
    }
    document.querySelector("#container__btn2").onclick = function(){
        container__planeta_text.innerText = text2
        container__img.innerHTML = `
            <img src="img/${id}-2.png" alt="">
        `;
    }
    document.querySelector("#container__btn3").onclick = function(){
        container__planeta_text.innerText = text3
        container__img.innerHTML = `
            <img src="img/${id}-3.png" alt="">
        `;
    }
}