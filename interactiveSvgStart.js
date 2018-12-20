// Udfør funktionen runProgram når DOM er loaded

document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

// Den asykrone funktion til svg'en laves

async function runProgram() {

    // Forskellige variabler vi benytter i funktionen

    let selected;
    let selectedID;
    let color;
    let active;
    let infoboks;


    // Vi loader svg map

    let mySvg = await fetch("tidsliniefinal.svg");
    let svg = await mySvg.text();

    document.querySelector("#map").innerHTML = svg;

    // Vi finder alle infobokse og giver dem hver en variabel

    let info_1 = document.querySelector("#map #Layer_1 #Billeder #_1770-2");
    let info_2 = document.querySelector("#map #Layer_1 #Billeder #_1816-2");
    let info_3 = document.querySelector("#map #Layer_1 #Billeder #_1882-2");
    let info_4 = document.querySelector("#map #Layer_1 #Billeder #_1894-2");
    let info_5 = document.querySelector("#map #Layer_1 #Billeder #_1911-2");
    let info_6 = document.querySelector("#map #Layer_1 #Billeder #_1932-2");
    let info_7 = document.querySelector("#map #Layer_1 #Billeder #_1945-2");
    let info_8 = document.querySelector("#map #Layer_1 #Billeder #_1960-2");
    let info_9 = document.querySelector("#map #Layer_1 #Billeder #_1969-2");
    let info_10 = document.querySelector("#map #Layer_1 #Billeder #_2001-2");

    // Vi skjuler 9 infobokse

    info_2.style.visibility = "hidden";
    info_3.style.visibility = "hidden";
    info_4.style.visibility = "hidden";
    info_5.style.visibility = "hidden";
    info_6.style.visibility = "hidden";
    info_7.style.visibility = "hidden";
    info_8.style.visibility = "hidden";
    info_9.style.visibility = "hidden";
    info_10.style.visibility = "hidden";

    // 3. Skift farve ved klik, og vis tekst
    // Vi laver et klik event

    active = document.querySelector("#_1770");
    active.setAttribute("fill", "#FFCA00");
    //selected = active;
    infoboks = info_1;

    console.log("active: ", active);

    document.querySelector("#map #Layer_1 #Punkter").addEventListener("click", function (evt) {
        clicked(evt);
    })

    // Vi laver funktionen clicked, der skal gælde for et punkt når det har været klikket på.

    function clicked(obj) {

        if (infoboks != undefined) {
            infoboks.style.visibility = "hidden";
        }

        selected = obj.target;

        // Vi finder det klikkede elementets ID

        selectedID = selected.getAttribute("id");
        console.log(obj.target);
        console.log();

        // Vi finder det klikkede elements fill

        color = selected.getAttribute("fill");
        console.log(color);

        // Når man klikker fra et punkt til et andet, skal det forige punkt skifte farve til original

        if (active != undefined) {
            active.setAttribute("fill", color);
        }

        // Vi viser hver infoboks hvis infoboksens punkt er klikket

        if (selectedID === "_1770") {
            info_1.style.visibility = "visible";
            infoboks = info_1;
        }
        if (selectedID === "_1816") {
            info_2.style.visibility = "visible";
            infoboks = info_2;
        }
        if (selectedID === "_1882") {
            info_3.style.visibility = "visible";
            infoboks = info_3;
        }
        if (selectedID === "_1894") {
            info_4.style.visibility = "visible";
            infoboks = info_4;
        }
        if (selectedID === "_1911") {
            info_5.style.visibility = "visible";
            infoboks = info_5;
        }
        if (selectedID === "_1932") {
            info_6.style.visibility = "visible";
            infoboks = info_6;
        }
        if (selectedID === "_1945") {
            info_7.style.visibility = "visible";
            infoboks = info_7;
        }
        if (selectedID === "_1960") {
            info_8.style.visibility = "visible";
            infoboks = info_8;
        }
        if (selectedID === "_1969") {
            info_9.style.visibility = "visible";
            infoboks = info_9;
        }
        if (selectedID === "_2001") {
            info_10.style.visibility = "visible";
            infoboks = info_10;
        }


        // Vi gør det klikkede til det aktive

        active = selected;


        //skift farve på det valgte
        //-------------------------------------------------------------------------
        if (color === "#717171") {
            document.querySelector("#" + selectedID).setAttribute("fill", "#FFCA00");
        }

        //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
        //--------------------------------------------------------------------------
        else {
            document.querySelector("#" + selectedID).setAttribute("fill", "#717171");
            infoboks.style.visibility = "hidden";
        }
    }
};
