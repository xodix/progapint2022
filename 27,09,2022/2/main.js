"use strict";
const submitButton = document.querySelector("#data-form > button");

const firstnameInput = document.getElementById("firstname");
const surnameInput = document.getElementById("surname");
const SSNInput = document.getElementById("SSN");
const consentCheckbox = document.getElementById("consent");

const wynik = document.getElementById("wynik");

// This works somehow. Only replacing first letter. HOW? WHY?
const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!consentCheckbox.checked) {
        wynik.textContent = "Wyraź zgodę na przetwarzanie danych";
        return;
    }

    const firstname = capitalize(firstnameInput.value);
    const surname = capitalize(surnameInput.value);

    const SSN = SSNInput.value;
    const gender = +SSN[SSN.length - 2] % 2 ? "mężczyzna" : "kobieta";

    wynik.textContent = `Inicjały osoby: ${surname[0]}${firstname[0]}, PŁEĆ: ${gender}.`;
});
