document.getElementById('botao').addEventListener('click', function () {
    let level = document.getElementById('level').value
    if (isNaN(level)) {
        document.getElementById('resultado').innerHTML = 'O valor digitado é invalido.'
    }
    else {
        let resultado = Math.floor(level * 2 / 3)
        document.getElementById('resultado').innerHTML = 'O menor level da pt é: ' + resultado
    }
})