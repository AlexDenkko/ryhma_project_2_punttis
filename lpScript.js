
let modal = document.getElementById("modalBox");
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close") [0];
let closeBtn = document.getElementById("suljeIkkuna"); // Tää on se nappi alhaalla.  

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
