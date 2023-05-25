function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("munieco").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    
}


function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("munieco").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
/*
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedorMunieco");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);       
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}


}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "a"
                i = i+1;
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "e"
                i = i+4;
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "i"
                i = i+3;
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "o"
                i = i+3;
            }
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "u"
                i = i+3;
            }
            else{
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
*/