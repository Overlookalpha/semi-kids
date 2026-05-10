window.onload = () => {

const rotina = [

    {
      nome: "Acordar",
      emoji: "🌞",
      horario: "08:00",
      concluido: false
    },

    {
      nome: "Café da manhã",
      emoji: "☕",
      horario: "08:30",
      concluido: false
    },

    {
      nome: "Almoço",
      emoji: "🍽️",
      horario: "12:00",
      concluido: false
    },

    {
      nome: "Escovar os dentes",
      emoji: "🪥",
      horario: "13:00",
      concluido: false
    },

    {
      nome: "Dormir",
      emoji: "🌙",
      horario: "21:00",
      concluido: false
    }

  ];
  
  const btnCrianca = document.getElementById("abrirCrianca");
  const btnPais = document.getElementById("abrirPais");

  const home = document.getElementById("home");
  const telaCrianca = document.getElementById("telaCrianca");

  const voltar = document.querySelector(".voltar");
  const listaRotina = document.getElementById("listaRotina");

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

  rotina.forEach((tarefa) => {

  listaRotina.innerHTML +=

  '<button class="btn kids tarefa">' +

  tarefa.emoji + ' ' + tarefa.nome +

  '<br>' +

  '⏰ ' + tarefa.horario +

  '</button>';

});
    
  const tarefas = document.querySelectorAll(".tarefa");

  tarefas.forEach((botao) => {

   botao.addEventListener("click", () => {

  botao.style.background = "#22c55e";

  let fala = new SpeechSynthesisUtterance(

    "Muito bem! Você completou " + botao.innerText

  );

  fala.lang = "pt-BR";

  speechSynthesis.speak(fala);

});

  });
  
};
