let shante = document.getElementById('shante')
let animacion = setInterval(cambiar_imagen,50)
let num_imagen = 0
let x = 0
let y = 0
// pantalla
let ancho = window.innerWidth
let alto = window.innerHeight

let disparo = document.getElementById('disparo')
let disparo_x = 0
let disparo_y = 0
let num_disparo = 0
let animacion_disparo
let velocidad = 200

function cambiar_imagen(){
    num_imagen = num_imagen + 1
    let direc
    if (num_imagen > 15){
        num_imagen = 1
    }
    direc = "img/shante/Shante_"+num_imagen+".png"
    shante.setAttribute("src",direc)
}

document.addEventListener("keydown", mover)

function mover(event){
    ancho = window.innerWidth
    alto = window.innerHeight
    // console.log({ancho, alto});
    
    
    // console.log(event.keyCode)
    // mover hacia la derecha
    if (event.keyCode == 68 && x <= ancho - 152){
        // console.log("Me moveré 5 pixeles a la derecha")
        x = x + 5
    }
    // mover hacia la izquierda
    if (event.keyCode == 65 && x >= 0){
        // console.log("Me moveré 5 pixeles a la izquierda")
        x = x - 5
    }
    // mover hacia arriba
    if(event.keyCode == 87 & y >= 0){
        y = y - 5
    }
    // mover hacia abajo
    if(event.keyCode == 83 && y <= alto - 194){
        y = y + 5
    }
    // console.log({y});
    

    shante.style.left = x + "px"
    shante.style.top = y + "px"

    // console.log(ancho + ' x ' + alto)
    // console.log('x:' + x)
    // console.log('y:' + y)

    // disparo
    if(event.keyCode == 69){
      disparo_x = 0
      clearInterval(animacion_disparo)
        disparo_x = x + (152/2)
        disparo_y = y + (194/2)
        disparo.style.opacity = 1
        animacion_disparo = setInterval(cambiar_imagen_disparo, velocidad)
        
    }

    disparo.style.left = disparo_x + "px"
    disparo.style.top = disparo_y + "px"    
    
}

// console.log("Esta es una modificación")
//shante.setAttribute("src","img/Vidas/heart_1.png");


function cambiar_imagen_disparo(){
  num_disparo = num_disparo + 1
  let direc
  if (num_disparo > 4){
    num_disparo = 1
  }
  direc = "img/HannyahNED/Cohete_"+num_disparo+".png"
  disparo.setAttribute("src",direc)

  disparo_x += 50
  // console.log(disparo_x);
  
  disparo.style.left = disparo_x + "px"
  disparo.style.top = disparo_y + "px" 

  if(disparo_x >= ancho){
    clearInterval(animacion_disparo)
  }
  
}