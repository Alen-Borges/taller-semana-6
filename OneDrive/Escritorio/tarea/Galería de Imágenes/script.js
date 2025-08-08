const botonTema = document.getElementById("tema");

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("temaOscuro");

    if (document.body.classList.contains("temaOscuro")) {
    botonTema.textContent = "Tema: Claro";
  } else {
    botonTema.textContent = "Tema: Oscuro";
  }
});