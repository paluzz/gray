function handleCopy() {
    // Get the code element to copy
    const codeElement = document.getElementById("salida");
    const divCopiar = document.getElementById("copy");
    const contenidoOriginal = divCopiar.innerHTML;

    // Create a range to select the code content
    const range = document.createRange();
    range.selectNode(codeElement);

    // Select the range
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected content to the clipboard
    document.execCommand("copy");

    // Clean up the selection
    selection.removeAllRanges();

    // Optionally, you can provide some feedback to the user after copying.
    divCopiar.innerHTML = '<i id="icon" class="fa-solid fa-check"></i> ¡Copiado!';
    divCopiar.style.color = "green";

    // Restaurar el texto original después de 2 segundos (opcional)
    setTimeout(() => {
        divCopiar.innerHTML = contenidoOriginal;
        divCopiar.style.color = "grey";
    }, 2000);

}
const copyButton = document.getElementById("salida");
copyButton.addEventListener("click", handleCopy);
