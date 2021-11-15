"use strict";

function main() {

  const name = "Bruce Wayne";
  const socialMediaUserName = "wayneofbats";
  const linkTwitter = "https://twitter.com/";
  const linkInstagram = "https://www.facebook.com/";
  const gender = "Masculino";
  const location = "Gotham City";

  const date = new Date();

  const hour = date.getHours().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const day = date.getDay().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const currentYear = date.getFullYear();

  const p = document.createElement('p');

  let text = "by " + name + " - Aluno TADS Mackenzie<br>";
  text = text + "Ano - " + currentYear + "<br>";
  text = text + "Twitter: <a href=\"" + linkTwitter + socialMediaUserName + "\" target=\"_blank\">@" + socialMediaUserName + "</a><br>";
  text = text + "Instagram: <a href=\"" + linkInstagram + socialMediaUserName + "\" target=\"_blank\">@" + socialMediaUserName + "</a><br>";
  text = text + "Sexo: " + gender + "<br>";
  text = text + "Localização - polo: " + location;


  p.innerHTML = text;

  const footer = document.querySelector('footer');
  footer.insertBefore(p, footer.childNodes[0]);


  const verifyHome = document.querySelector('.content article h1');

  if (verifyHome && verifyHome.innerText == 'Bem-vindo!') {

    let dayWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

    let message;

    if (hour < 12) {
      message = 'Bom dia';
    }
    else if (hour <= 18) {
      message = 'Boa tarde';
    }
    else {
      message = 'Boa noite';
    }

    message = message + '! Hoje é ' + dayWeek[day];

    let textAlert = 'Sou o Tiago Dias Batista\n';
    textAlert = textAlert + 'Polo Campinas/SP - TADS/Mackenzie\n'
    textAlert = textAlert + message;

    alert(textAlert);

    let p = document.createElement('p');
    p.innerHTML = 'Javascript Tips: <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">addEventListener</a> é um método para detectar eventos e executar uma função como resposta.<br>Clique nesse parágrafo para disparar um evento de clique que adiciona e remove uma classe css que altera a cor da fonte e a cor do background';
    p.setAttribute('class', 'testEvent');

    p.addEventListener('click', () => {
      p.classList.toggle('testEventClickOn');
    }, false);




    document.querySelector('div.content article').appendChild(p);



  }

};

// EVENTO
window.addEventListener('load', () => {
  main()
});

