# Temat: JavaScript - powtórzenie i uzupełnienie wiadomości.

1. Skrypt wykonywany po stronie klienta JS.
2. Skrypt umieszczamy na dole body w znacznikach script:

```html
<body>
  <script>
    // code goes here
  </script>
</body>
```

3. Trzeba utworzyć formularz z podanymi polami i przyciskiem.
4. Należy odwołać się do elementów HTML w skrypcie JS.

```html
<form>
  <input type="number" id="p1" />
  <button type="button">Oblicz</button>
</form>
<div id="wyniki"></div>
```

lub

```html
<form>
  <input type="number" id="p1" />
  <input type="submit" value="Oblicz" btn="2" />
</form>
<div id="wyniki"></div>
```

W skrypcie JS odwołujemy się do elementów stosując:

```js
const przycisk1 = document.querySelector("#p1");
const przycisk2 = document.querySelector("[btn=2]");
let wyniki = document.getElementById("wyniki");
```

5. Zmienne które będą przypisane wartości z pól formularza definiujemy wewnątrz funkcji.

```js
function oblicKwadrat() {
  let liczba = +document.getElementById("p1").value;
  document.getElementById("wyniki");
}
```

6. Obsługa zdarzenie kliknięcia przycisku.

```js
const pole = document.getElementById("p1");
pole.onclick = () => {};
```

lub

```js
const pole = document.getElementById("p1");
pole.addEventListener("click", (e) => {});
```
