var agora = new Date()
var hora = agora.getHours() , minutos = agora.getMinutes() , segundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${minutos} minutos e ${segundos} segundos.`)
switch (hora) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Boa madrugada!')
        break
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('Bom dia!')
        break
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('Boa tarde!')
        break
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log('Boa noite!')
        break
    default:
        console.log('Hora inválida!')
}