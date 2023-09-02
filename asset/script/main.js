document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('>> Tokisaki Nino: "Nói không với "Inspect" web nhé!"\n>> Github: TokisakiNinoVn.');

    // alert('>> Tokisaki Nino: "Say no to "Inspect" website!" :))');
});
  