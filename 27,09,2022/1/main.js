"use strict";
const areaInput = document.getElementById("area");
const submitButton = document.getElementById("submit");
const wynik = document.getElementById("wynik");

const AREA_PER_CAN = 4; // m2

submitButton.addEventListener("click", () => {
    const area = +areaInput.value;
    wynik.textContent = `Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: ${Math.ceil(area / AREA_PER_CAN)}`;
});
