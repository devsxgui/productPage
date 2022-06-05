// Colocando a data final para o contador
var countDownDate = new Date("June 31, 2022 12:00:00").getTime();
// Atualizando o contador por segundo 
var x = setInterval(function () {
    // Data e hora atuais
    var now = new Date().getTime();
    // Encontrando a distância entre as datas 
    var distance = countDownDate - now;
    // Calculando dias, horas, minutos e segundos 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Mostrando o tempo final na tela 
    document.getElementById("contador").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // Texto que vai aparecer quando o contador finalizar 
    if (distance < 0) { clearInterval(x); document.getElementById("contador").innerHTML = "PRÉ-VENDA LIBERADA! CLIQUE AQUI E GARANTA!"; }
}, 1000);