window.onload = () => {

  const btnCrianca = document.getElementById("abrirCrianca");
  const btnPais = document.getElementById("abrirPais");

  const home = document.getElementById("home");
  const telaCrianca = document.getElementById("telaCrianca");

  const voltar = document.querySelector(".voltar");

  btnCrianca.onclick = () => {

    home.style.display = "none";
    telaCrianca.style.display = "block";

  };

  voltar.onclick = () => {

    telaCrianca.style.display = "none";
    home.style.display = "block";

  };

  btnPais.onclick = () => {

    alert("Área dos Pais em desenvolvimento 👨");

  };

};
