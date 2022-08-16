const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

/*inserir valor do teclado no display*/
function insert( valor ){
    resultado.innerHTML += valor;
}

/*limpar display*/
function clean() {
    resultado.innerHTML = ' ';
}

/*apagar número 1 a 1 )*/
function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}

/*resultado do cálculo */
function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}