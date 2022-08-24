
function carregar () { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 
var data = new Date ()
var hora = data.getHours()
var minutos = data.getMinutes()

 

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

if (hora <= 5) {
    msg.innerHTML +=  '<br/> BOA MADRUGADA!' 
    img.src = 'img/madrugada.jpg'
    document.body.style.backgroundColor = 'black'
    document.getElementById("foto").style.backgroundColor = '#0B0E2D'


    

}else if (hora >= 6 && hora < 12){
    img.src = 'img/dia.jpg'
    document.body.style.backgroundColor = '#F4FA58'
    document.getElementById("foto").style.backgroundColor = 'yelow'
    msg.innerHTML +=  '<br/> BOM DIA!' 
    


}else if (hora >= 12 && hora < 18) {
    img.src = 'img/tarde.jpg'
    document.body.style.backgroundColor = '#180000'
    document.getElementById("foto").style.backgroundColor = '#4E0800'
    msg.innerHTML +=  '<br/> BOA TARDE!' 
    

}else {
    img.src = 'img/noite.jpg'
    document.body.style.backgroundColor = '#000000'
    document.getElementById("foto").style.backgroundColor = 'grey'
    msg.innerHTML +=  '<br/> BOA NOITE!' 

}

}

    

