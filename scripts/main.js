"use strict";
(() => {


  const name = "Bruce Wayne";
  const socialMediaUserName = "wayneofbats";
  const linkTwitter = "https://twitter.com/";
  const linkInstagram = "https://www.facebook.com/";
  const gender = "Masculino";
  const location = "Gotham City";

  const date = new Date();
  const currentYear = date.getFullYear();


  document.write("by " + name + " - Aluno TADS Mackenzie<br>");
  document.write("Ano - " + currentYear + "<br>");
  document.write("Twitter: <a href=\"" + linkTwitter + socialMediaUserName + "\" target=\"_blank\">@" + socialMediaUserName + "</a><br>");
  document.write("Instagram: <a href=\"" + linkInstagram + socialMediaUserName + "\" target=\"_blank\">@" + socialMediaUserName + "</a><br>");
  document.write("Sexo: " + gender + "<br>");
  document.write("Localização - polo: " + location);

})();
