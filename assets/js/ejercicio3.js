function suma(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    resultadoSuma = parseInt(valor1) + parseInt(valor2);
    document.querySelector(".resultado").innerHTML=  + resultadoSuma;    
}

function resta(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    resultadoResta = parseInt(valor1) - parseInt(valor2);
    document.querySelector(".resultado").innerHTML= + resultadoResta;
    if (resultadoResta < 0){
        document.querySelector(".resultado").innerHTML=  "0";   
    }
}
