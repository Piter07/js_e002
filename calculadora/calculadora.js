function escribir(id){
    var exp = document.getElementById("expresion")
    var ele = document.getElementById(id)
    exp.value =  exp.value + ele.value
}

function limpiar(){
    var exp = document.getElementById("expresion")
    exp.value =  ""
}

function operacion(id){
    var exp = document.getElementById("expresion")
    var e = exp.value
    var aux = ""
    var op= new Array();
    for(let i = 0 ; i < e.length ; i++){

        if(e[i] == '+'){
            op.push(aux)
            op.push('+')
            aux = ""
        }else if(e[i] == '-'){
            op.push(aux)
            op.push('-')
            aux = ""
        } else if(e[i] == '*'){
            op.push(aux)
            op.push('*')
            aux = ""
        }else if(e[i] == '/'){
            op.push(aux)
            op.push('/')
            aux = ""
        } else{
            aux = aux + e[i]
        }  
        
    }
    op.push(aux)
    var  ope,num1,num2,resultado

    num1 = parseFloat(op.shift())
    
    while(op.length > 0){
       ope =  op.shift()
       num2 = parseFloat(op.shift())
       num1 = opera(num1,ope,num2)
    }
    
    console.log(num1)
    exp.value = num1
}


function opera(num1,ope,num2){
    console.log(num1 + "  " + ope + "  " + num2)

    if(ope == '+'){
        return num1 + num2
    }else if(ope == '-'){
        return num1 - num2
    } else if(ope == '*'){
        return num1 * num2
    }else if(ope == '/'){
        return num1 / num2
    }
}