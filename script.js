function decifrar() {
    const inputText = document.getElementById("bloqueUno").value;
    const outputTextElement = document.getElementById("SiNoHayTexto");

    if (validar(inputText)) {
        let decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputTextElement.innerText = decryptedText;
    } else {
        alert("*Solo se permiten letras minúsculas y sin caracteres especiales.*");
    }
}

function cifrar() {
    const inputText = document.getElementById("bloqueUno").value;
    const outputTextElement = document.getElementById("SiNoHayTexto");

    if (validar(inputText)) {
        let encryptedText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        outputTextElement.innerText = encryptedText;
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
    }
}


function validar(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function copiar() {
    const outputTextElement = document.getElementById("SiNoHayTexto");
    if (outputTextElement.innerText !== "No se ha encontrado ningún texto a encriptar.") {
        navigator.clipboard.writeText(outputTextElement.innerText);
    }
}
