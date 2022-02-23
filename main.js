// hází náhodná čísla od 1 do 6

function hodKostkou() {
    let hod = Math.ceil(Math.random() * 6)
    let zprava = document.querySelector("#zprava")
    let obrazek = document.getElementById("kostka")

    if (hod < 6) {
        zprava.textContent = "Hodila jsi " + hod + ". Házej znovu."
        obrazek.src = "obrazky/" + hod + ".png"
        console.log(hod)
    }
    else {
        zprava.textContent = "Šestka! Vyhrála jsi."
        obrazek.src = "obrazky/6.png"
    }
}