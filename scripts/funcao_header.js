document.getElementById('botaoInicio').addEventListener('click', function () {
    window.location.href = './home.html';
});

document.getElementById('linkVoltar').addEventListener('click', function (event) {
    event.preventDefault();
    history.back();
});