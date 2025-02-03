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


document.getElementById("liityJaseneksi").addEventListener("click", function () {
    const etunimi = document.getElementById("etunimi").value;
    const sukunimi = document.getElementById("sukunimi").value;
    const osoite = document.getElementById("osoite").value;
    const puhelinnumero = document.getElementById("puhelinnumero").value;
    const syntymavuosi = document.getElementById("syntymavuosi").value;
    const mistaKuulit = document.getElementById("mistaKuulit").value;
    const vahvistus = document.getElementById("vahvistus").checked;

    if (!vahvistus) {
        document.getElementById("virheIlmoitus").textContent = "Sinun on hyväksyttävä ehdot!";
        return;
    }

    const data = { etunimi, sukunimi, osoite, puhelinnumero, syntymavuosi, mistaKuulit };

    fetch("http://localhost:5000/api/jasenet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            alert("Liittyminen onnistui!");
            document.getElementById("modalBox").style.display = "none";
        })
        .catch(error => console.error("Virhe:", error));
});