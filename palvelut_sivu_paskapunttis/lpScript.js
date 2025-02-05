// TÄÄ ON "LIITY JÄSENEKSI" - MODAL BOXIA / POPUPPIA VARTEN 

let modal = document.getElementById("modalBox");
let buttons = document.querySelectorAll(".modalBtn"); // Valitsee kaikki modalBtn-classit.

let span = document.getElementsByClassName("close")[0]; // Tää on se X-nappi ylhäällä.
let closeBtn = document.getElementById("suljeIkkuna"); // Tää on se sulje-nappi alhaalla.

// Onclick-toiminnot jokaiselle buttonille.
buttons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    }
});

// Sulkemistoiminnot
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

// Have nice day! :)