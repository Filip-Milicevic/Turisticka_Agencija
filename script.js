function pretrazi(event) {
    event.preventDefault();

    const unos = document.getElementById("pretraga").value.toLowerCase().trim();

    const stranice = {
        "njujork": "daleke_destinacije/njujork/index.html",
        "japan": "daleke_destinacije/japan/index.html",
        "tajland": "daleke_destinacije/tajland/index.html",

        "budimpesta": "evropski_gradovi/budimpesta_bratislava_bec/index.html",
        "budimpešta": "evropski_gradovi/budimpesta_bratislava_bec/index.html",
        "bratislava": "evropski_gradovi/budimpesta_bratislava_bec/index.html",
        "bec": "evropski_gradovi/budimpesta_bratislava_bec/index.html",
        "beč": "evropski_gradovi/budimpesta_bratislava_bec/index.html",
        "pariz": "evropski_gradovi/pariz/index.html",
        "prag": "evropski_gradovi/prag/index.html",

        "budva": "letovanja/crna_gora/budva/index.html",
        "herceg novi": "letovanja/crna_gora/herceg_novi/index.html",
        "herceg-novi": "letovanja/crna_gora/herceg_novi/index.html",
        "kotor": "letovanja/crna_gora/kotor/index.html",
        "petrovac": "letovanja/crna_gora/petrovac_na_moru/index.html",
        "petrovac na moru": "letovanja/crna_gora/petrovac_na_moru/index.html",

        "krf": "letovanja/grcka/krf/index.html",
        "parga": "letovanja/grcka/parga/index.html",
        "skiatos": "letovanja/grcka/skiatos/index.html",
        "lefkada": "letovanja/grcka/lefkada/index.html"
    };

    if (stranice[unos]) {
        window.location.href = celaPutanja() + stranice[unos];
    } else {
        alert("Nismo pronašli traženu destinaciju.");
    }
}

function celaPutanja() {
    const putanja = window.location.pathname;

    if (putanja.includes("/letovanja/crna_gora/")) {
        return "../../../";
    }

    if (putanja.includes("/letovanja/grcka/")) {
        return "../../../";
    }

    if (putanja.includes("/evropski_gradovi/")) {
        return "../../";
    }

    if (putanja.includes("/daleke_destinacije/")) {
        return "../../";
    }

    return "";
}