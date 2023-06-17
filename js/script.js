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





