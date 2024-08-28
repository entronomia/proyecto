function encriptar(){
    document.getElementById('mensajeInicio').style.visibility="hidden";
    let textoAEncriptar=document.getElementById('textoEntrada').value;
    let entrada=textoAEncriptar.split('');
    for (let j=0; j<entrada.length; j++){
        let letra=entrada[j];
        switch(letra){
            case 'a':
                entrada[j]='ai';
                break;
            case 'e':
                entrada[j]='enter';
                break;
            case 'i':
                entrada[j]='imes';
                break;
            case 'o':
                entrada[j]='ober';
                break;
            case 'u':
                entrada[j]='ufat';
                break;
            default:
                entrada[j]=letra;
        }
    }
    let salida=entrada.join('');
    document.getElementById('textoSalida').value=salida;
    return;
}
function desencriptar(){
    document.getElementById('mensajeInicio').style.visibility="hidden";
    let textoADesencriptar=document.getElementById('textoEntrada').value;
    let entrada=textoADesencriptar;
    entrada=entrada.replace(/ai/g,'a');
    entrada=entrada.replace(/enter/g,'e');
    entrada=entrada.replace(/imes/g,'i');
    entrada=entrada.replace(/ober/g,'o');
    entrada=entrada.replace(/ufat/g,'u');        
    document.getElementById('textoSalida').value=entrada;
    return;
}
function copiar(){
    document.getElementById('mensajeInicio').style.visibility="visible";
    document.getElementById('textoEntrada').value="";
    let textoACopiar=document.getElementById('textoSalida').value;
    navigator.clipboard.writeText(textoACopiar);
}
