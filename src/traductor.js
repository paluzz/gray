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

