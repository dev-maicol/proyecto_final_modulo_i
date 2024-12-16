let shante = document.getElementById("shante")
let animacion = setInterval(cambiar_imagen,50)
let num_imagen = 0
let x = 0
let y = 0
// pantalla
let ancho = screen.width
let alto = screen.height

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
    // ancho = screen.width
    // alto = screen.height
    
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

    shante.style.left = x + "px"
    shante.style.top = y + "px"

    // console.log(ancho + ' x ' + alto)
    // console.log('x:' + x)
    // console.log('y:' + y)
    
}

// console.log("Esta es una modificación")
//shante.setAttribute("src","img/Vidas/heart_1.png");