let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let cross_1 = document.getElementById("cross_1");
let cross_2 = document.getElementById("cross_2");
let cross_3 = document.getElementById("cross_3");
let cross_4 = document.getElementById("cross_4");
let cross_5 = document.getElementById("cross_5");

let button = document.getElementById("profil");
let menu = document.getElementById("menu");
let close_button = document.getElementById("wrapper");

let lupa = document.getElementById("lupa");
let textarea  = document.getElementById("textarea");
let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");
let list3 = document.getElementById("list3");
let list4 = document.getElementById("list4");
let list5 = document.getElementById("list5");



cross_1.onclick = function (){
    box1.style.display = "none";
}
cross_2.onclick = function (){
    box2.style.display = "none";
}
cross_3.onclick = function (){
    box3.style.display = "none";
}
cross_4.onclick = function (){
    box4.style.display = "none";
}
cross_5.onclick = function (){
    box5.style.display = "none";
}




button.onclick = function() {
    menu.style.display = "block";
    menu.style.zIndex="10";

}

lupa.onclick = function() {
    textarea.style.display = "block";
    list1.style.display = "none";
    list2.style.display = "none";
    list3.style.display = "none";
    list4.style.display = "none";
    list5.style.display = "none";

}
close_button.onclick = function() {
    menu.style.display = "none";
    textarea.style.display = "none";
    list1.style.display = "block";
    list2.style.display = "block";
    list3.style.display = "block";
    list4.style.display = "block";
    list5.style.display = "block";
}
