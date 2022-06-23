var a = 2
var b = 3
var c = 1
var id = "01"

console.log(eqCuadraticaP(a,b,c))
establecer("eje1",eqCuadraticaP(a,b,c))
console.log(eqCuadraticaN(a,b,c))
establecer("eje2",eqCuadraticaN(a,b,c))

var cad = "holaasaa"
establecer("eje3",cad)

establecerAle("eje4")

function eqCuadraticaP(a,b,c){
    var cuadrado = Math.pow(b,2)
    var raiz = Math.sqrt(cuadrado - 4*a*c)
    var resultado = (- b + raiz)/(2*a)
    return resultado
}

function eqCuadraticaN(a,b,c){
    var cuadrado = Math.pow(b,2)
    var raiz = Math.sqrt(cuadrado - 4*a*c)
    var resultado = (- b - raiz)/(2*a)
    return resultado
}

function establecer(id,cad){
    var prueba = document.getElementById(id);
    prueba.innerHTML = cad
}


function establecerAle(id){
    var prueba = document.getElementById(id);
    prueba.innerHTML = Math.floor(Math.random() * 101);
}



