const areaInput = document.getElementById("area") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const wynik = document.getElementById("wynik") as HTMLDivElement;

const CAN_VOLUME = 1; // litr
const AREA_PER_CAN = 4; // m2

submitButton.addEventListener("click", () => {
  const area: number = +areaInput.value;
  wynik.textContent = `Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: ${Math.ceil(
    area / AREA_PER_CAN
  )}`;
});
