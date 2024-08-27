function verificarTexto(texto) {
    if (/^[a-z0-9\s.,]*$/.test(texto) && texto.trim() !== "") {
        warning.style.color = "black";
        warning.style.fontWeight = "normal";
        return true;
    } else {
        warning.style.color = "red";
        warning.style.fontWeight = "bold";
        textarea.select();
        return false;
    }
}

function asignarTexto(textoEditado) {
    document.getElementById("presentacionMensaje").style.display = "block";
    document.getElementById("presentacionImg").style.display = "none";
    document.getElementById("presentacionInfo").style.display = "none";
    document.getElementById("messageEditado").textContent = textoEditado;
}

function encriptar() {
    let texto = document.getElementById('textarea').value;
    let textoEncriptado = "";
    
    if(verificarTexto(texto) === true){
        for (let i = 0; i < texto.length; i++) {
            if(texto.charAt(i) === 'a'){
                textoEncriptado += "ai";
            }else if(texto.charAt(i) === 'e'){
                textoEncriptado += "enter";
            }else if(texto.charAt(i) === 'i'){
                textoEncriptado += "imes";
            }else if(texto.charAt(i) === 'o'){
                textoEncriptado += "ober";
            }else if(texto.charAt(i) === 'u'){
                textoEncriptado += "ufat";
            }else{
                textoEncriptado += texto.charAt(i);
            }
        }
        asignarTexto(textoEncriptado);
    }
}

function desencriptar() {
    let texto = document.getElementById('textarea').value;
    let textoDesencriptado = "";
    
    if(verificarTexto(texto) === true){
        textoDesencriptado = texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        asignarTexto(textoDesencriptado);
    }
}

async function copiarTexto() {
    try {
        const textElement = document.getElementById('messageEditado').textContent;
        await navigator.clipboard.writeText(textElement);
        alert('Texto copiado al portapapeles.');
    } catch (err) {
        alert('No se pudo copiar el texto.');
    }
}

function condicionesIniciales() {
    document.getElementById("presentacionMensaje").style.display = "none";
    document.getElementById("presentacionImg").style.display = "block";
    document.getElementById("presentacionInfo").style.display = "block";
    document.getElementById('textarea').value = "";
}

condicionesIniciales();
