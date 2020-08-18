var coeur = document.querySelectorAll(".fa-heart");
Array.from(coeur).map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("red")
    });
});

var supprimer = document.querySelectorAll(".fa-trash-o");
Array.from(supprimer).map((el) => {
    el.addEventListener("click", () => {
        el.parentElement.parentElement.parentElement.remove();
    });
});

var prixTotal = document.querySelector(".total");
var moins = document.querySelectorAll(".fa-minus-square");
Array.from(moins).map((el) => {
    el.addEventListener("click", () => {
        if(el.nextElementSibling.innerHTML > 0) {
            el.nextElementSibling.innerHTML= parseInt(el.nextElementSibling.innerHTML)- 1;
            var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("€" , "");
        prixTotal.innerHTML = parseInt(prixTotal.innerHTML.replace("€" , "")) - parseInt(price) + "€";
        }
     });
});


var plus = document.querySelectorAll(".fa-plus-square");
Array.from(plus).map((el) => {
    el.addEventListener("click", () => {
        el.previousElementSibling.innerHTML= parseInt(el.previousElementSibling.innerHTML)+ 1;
        var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("€" , "");
        prixTotal.innerHTML = parseInt(prixTotal.innerHTML.replace("€" , "")) + parseInt(price) + "€";
     });
});