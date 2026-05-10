window.onload = () => {
const agora = new Date();

  const horaAtual =
    agora.getHours().toString().padStart(2, "0") +
    ":" +
    agora.getMinutes().toString().padStart(2, "0");

  console.log(horaAtual);

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
  const rotinaAtual =
    document.getElementById("rotinaAtual");
  const btnFalar = document.getElementById("falar");

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

  let proximaTarefa = null;

  rotina.forEach((tarefa) => {

    if (horaAtual <= tarefa.horario &&
        proximaTarefa === null) {

      proximaTarefa = tarefa;

    }

  });

  if (proximaTarefa) {

    rotinaAtual.innerHTML =

      proximaTarefa.emoji + " " +

      proximaTarefa.nome +

      "<br>⏰ " +

      proximaTarefa.horario;

    let falaInicial =
      new SpeechSynthesisUtterance(

        "Sua próxima rotina é " +
        proximaTarefa.nome

      );

    falaInicial.lang = "pt-BR";

    speechSynthesis.speak(falaInicial);

  }
  
  rotina.forEach((tarefa) => {

    if (horaAtual === tarefa.horario) {

      let aviso = new SpeechSynthesisUtterance(

        "Hora de " + tarefa.nome

      );

      aviso.lang = "pt-BR";

      speechSynthesis.speak(aviso);

    }

  });

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

btnFalar.onclick = () => {

    const reconhecimento =
      new webkitSpeechRecognition();

    reconhecimento.lang = "pt-BR";

    reconhecimento.start();

    reconhecimento.onresult = (event) => {

      const fala =
        event.results[0][0].transcript;

      alert("Você disse: " + fala);

     let respostaTexto = "";

      if (
        fala.includes("agora") ||
        fala.includes("tarefa") ||
        fala.includes("rotina")
      ) {

        respostaTexto =
          "Sua próxima rotina é dormir às 21 horas";

      } else {

        respostaTexto =
          "Ainda estou aprendendo 😊";

      }

      let resposta =
        new SpeechSynthesisUtterance(
          respostaTexto
        );

      resposta.lang = "pt-BR";

      speechSynthesis.speak(resposta);

    };

  };
    
};
