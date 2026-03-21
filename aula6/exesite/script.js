function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours() , minutos = data.getMinutes() , segundos = data.getSeconds();
  // Isso diz ao navegador: "Execute a função carregar a cada 1000 milissegundos (1 segundo)"
  setInterval(carregar, 1000);
  hora = hora.toString().padStart(2, '0');
  minutos = minutos.toString().padStart(2, '0');
  segundos = segundos.toString().padStart(2, '0');


  msg.innerHTML = `Hora atual:${hora}:${minutos}:${segundos}`;
    if (hora >= 0 && hora < 12) {
        img.src = "manha.png";
        document.body.style.background = "rgb(203, 169, 47)";
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png";
        document.body.style.background = "rgb(106, 168, 153)";

    } else {
        img.src = "noite.png";
        document.body.style.background = "rgb(18, 14, 10)";
    }

}   