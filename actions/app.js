function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function eliminarImagen(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.remove(); 
    }
}

function Encriptarclick() {
    const texto = document.getElementById("Textarea").value;
    const textoEncriptado = encriptar(texto);
    document.getElementById("Resultado").innerText = textoEncriptado;
}

function Desencriptarclick() {
    const texto = document.getElementById("Textarea").value;
    const textoDesencriptado = desencriptar(texto);
    document.getElementById("Resultado").innerText = textoDesencriptado;
}



function Encriptarclick() {
    asignarTextoElemento('Id_resultado_p','');
    eliminarImagen('Eliminar_img');
    let texto = document.getElementById("Textarea").value;
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("Id_resultado_texto").innerText = textoEncriptado;
}

function Desencriptarclick() {
    let texto = document.getElementById("Textarea").value;
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById("Id_resultado_texto").innerText = textoDesencriptado;
}

function Copiarclick() {
    const texto = document.getElementById('Id_resultado_texto').innerText;
    
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}


function condicionesIniciales() {
    asignarTextoElemento('Id_resultado_texto','Ningún mensaje fue encontrado');
    asignarTextoElemento('Id_resultado_p','Ingresa el texto que desees encriptar o desencriptar');
}

condicionesIniciales();