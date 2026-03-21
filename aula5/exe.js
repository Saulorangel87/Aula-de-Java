var agora = new Date()
var diasema = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

var nomeDia = '' // Variável para armazenar o nome do dia

switch(diasema){
    case 0: nomeDia = 'Domingo'; break
    case 1: nomeDia = 'Segunda-feira'; break
    case 2: nomeDia = 'Terça-feira'; break
    case 3: nomeDia = 'Quarta-feira'; break
    case 4: nomeDia = 'Quinta-feira'; break
    case 5: nomeDia = 'Sexta-feira'; break
    case 6: nomeDia = 'Sábado'; break
    default: nomeDia = '[Erro] Dia inválido'; break
}

// Exibe tudo em uma única linha
console.log(`Hoje é ${nomeDia} e agora são exatamente ${hora}:${minutos}:${segundos}`)
