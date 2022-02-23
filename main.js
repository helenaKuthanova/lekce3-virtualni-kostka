// hází náhodná čísla od 1 do 6

function hodKostkou() {
    let zprava = document.querySelector("#zprava");
    let obrazek = document.getElementById("kostka");
    // zpravu i obrazek do lokálního scope - můžu pak celou fci importovat do jiného programu

    let hod = Math.floor(Math.random() * 6 + 1);
    // hod potřebuji generovat při každém volání funkce = kliku
    // použiju Math.floor pro případ, že by padla nula (což může)

    if (hod === 6) {
        zprava.textContent = "Šestka! Vyhrála jsi.";
        console.log(hod);
    }
    else {
        zprava.textContent = "Hodila jsi " + hod + ". Házej znovu.";
        console.log(hod);
    }

    obrazek.src = "obrazky/" + hod + ".png";
}
    // můžu dát mimo IF - bude se dít u všech