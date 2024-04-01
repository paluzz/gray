export function codificadorMorse(texto) {
    const morseChar = [".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... ", ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. ", "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
    const morseNum = ["----- ", ".---- ", "..--- ", "...-- ", "....- ", "..... ", "-.... ", "--... ", "---.. ", "----. "];
    let morse = "";

    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);

        if ((charCode >= 97 && charCode <= 122)) { // lowercase letters
            morse += morseChar[charCode - 97];
        } else if (charCode >= 65 && charCode <= 90) { // uppercase letters
            morse += morseChar[charCode - 65];
        } else if (charCode >= 48 && charCode <= 57) { // numbers
            morse += morseNum[charCode - 48];
        } else if (texto[i] === ' ') { // handle space
            morse += ' ';
        }
        else {
            morse += '';
        }
    }
    return morse;
}

export function decodificadorMorse(morse) {
    const morseChar = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];
    const abecedario = "abcdefghijklmnopqrstuvwxyz0123456789";
    let texto = "";
    let aux = "";

    for (let i = 0; i <= morse.length; i++) {
        if (morse[i] !== ' ' && morse[i] !== '\0' && morse[i] !== '\n') {
            aux += morse[i];
        } else {
            for (let k = 0; k < abecedario.length; k++) {
                if (aux === morseChar[k]) {
                    texto += abecedario[k];
                    break;
                }
            }
            aux = "";
        }
    }

    return texto;
}

export function binaryToGray(binary) {
    let gray = binary[0]; // El primer bit permanece igual
    for (let i = 1; i < binary.length; i++) {
        gray += xor(binary[i - 1], binary[i]);
    }
    return gray;
}

function xor(a, b) {
    return a === b ? '0' : '1';
}

function flip(c) {
    return c === '0' ? '1' : '0';
}

export function grayToBinary(gray) {
    let binary = gray[0]; // El primer dígito del código Gray es igual al binario
    for (let i = 1; i < gray.length; i++) {
        if (gray[i] === '0') {
            binary += binary[i - 1]; // Si el dígito Gray es '0', el dígito binario es igual al anterior
        } else {
            binary += flip(binary[i - 1]); // Si el dígito Gray es '1', el dígito binario es el inverso del anterior
        }
    }
    return binary;
}

