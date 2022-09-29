const submitButton = document.querySelector(
  "#data-form > button"
) as HTMLButtonElement;

const firstnameInput = document.getElementById("firstname") as HTMLInputElement;
const surnameInput = document.getElementById("surname") as HTMLInputElement;
const SSNInput = document.getElementById("SSN") as HTMLInputElement;
const consentCheckbox = document.getElementById("consent") as HTMLInputElement;

const wynik = document.getElementById("wynik") as HTMLDivElement;

// This works somehow. Only replacing first letter. HOW? WHY?
const capitalize = (str: string) => str.replace(str[0], str[0].toUpperCase());

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!consentCheckbox.checked) {
    wynik.textContent = "Wyraź zgodę na przetwarzanie danych";
    return;
  }

  const firstname = capitalize(firstnameInput.value);
  const surname = capitalize(surnameInput.value);

  const SSN = SSNInput.value;
  const gender: string = +SSN[SSN.length - 2] % 2 ? "mężczyzna" : "kobieta";

  wynik.textContent = `Inicjały osoby: ${surname[0]}${firstname[0]}, PŁEĆ: ${gender}.`;
});
