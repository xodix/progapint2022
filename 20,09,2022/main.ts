// in
const [start, stop] = (NodeList<Input>)document.querySelectorAll("button");

// out
const ones = document.querySelectorAll(".one");
const twos = document.querySelectorAll(".two");
const comps = document.querySelectorAll(".comp");

function generateNumbers() {
  for (let i = 0; i < ones.length; i++) {
    const n1 = Math.floor(Math.random() * 100) + 1;
    const n2 = Math.floor(Math.random() * 100) + 1;

    ones[i].textContent = n1;
    twos[i].textContent = n2;

    comps[i].textContent = n1 > n2 ? ">" : "<";
  }
}

start.addEventListener("click", () => {
  const id = setInterval(generateNumbers, 2000);

  stop.addEventListener("click", () => clearInterval(id));
});
