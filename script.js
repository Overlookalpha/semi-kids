const btnCrianca = document.querySelector(".kids");
const btnPais = document.querySelector(".pais");

const home = document.getElementById("home");
const telaCrianca = document.getElementById("telaCrianca");

const voltar = document.querySelector(".voltar");

btnCrianca.addEventListener("click", () => {

  home.style.display = "none";
  telaCrianca.style.display = "block";

});

voltar.addEventListener("click", () => {

  telaCrianca.style.display = "none";
  home.style.display = "block";

});

btnPais.addEventListener("click", () => {

  alert("Área dos Pais em desenvolvimento 👨");

});
