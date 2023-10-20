function converte(){
    var temperaturaInicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("cf").checked){
        resultado = (temperaturaInicial * 9/5) +32
    }
    else if(document.getElementById("fc").checked){
        resultado = (temperaturaInicial -32) * 5/9
    }
    else if(document.getElementById("ck").checked){
        resultado = temperaturaInicial + 237.15
    }
    else if(document.getElementById("kc").checked){
        resultado = temperaturaInicial - 237.15
    }
    else if(document.getElementById("fk").checked){
        resultado = (temperaturaInicial -32) * 5/9 + 273.15
    }
    else if(document.getElementById("fc").checked){
        resultado = (temperaturaInicial -273.15) * 9/5 + 32
    }
    else {
       resultado = "Por favor, selecione uma opção!" 
        alert(resultado)
    }
    //Fazer os demais else if com suas respectivas fórmulas

    document.getElementById("resultado").innerHTML = resultado
}
 