// hází náhodná čísla od 1 do 6

function hodKostkou() {
    let hod = Math.ceil(Math.random() * 6)
    let zprava = document.querySelector("#zprava")

    if (hod < 6) {
        zprava.textContent = "Hodila jsi " + hod + ". Házej znovu."
        console.log(hod)
    }
    else {
        zprava.textContent = "Šestka! Vyhrála jsi."
    }
}