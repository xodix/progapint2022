const form = document.querySelector("form");
const wynik = document.querySelector("#wynik");

function isTriangle(a, b, c) {
	return (a + b > c && a + c > b && b + c > a) ? true : false;
}

function triangleArea(a, b, c) {
	const p = (a + b + c) / 2;

	return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const a = +form.a.value;
	const b = +form.b.value;
	const c = +form.c.value;

	if (!(a && b && c) || !isTriangle(a, b, c)) {
		wynik.textContent = "Z podanych boków nie można zbudować trójkąta";
		return;
	}

	wynik.innerHTML = `Pole trójkąta wynosi ${triangleArea(a, b, c)}cm<sup>2</sup>`;
});
