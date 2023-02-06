'use strict'


const calcular = document.getElementById('calcular');

function somar() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    let situacao = document.getElementById('situacao');
    const resultado;
    resultado.value = (nota1 +nota2) /2;

    if(resultado > 5){
        situacao.classList.add('sombra-vermelha')
        
    }else{
        return(situacao.classList.add('sombra-verde'))
        situacao = 'aprovado';
    }

}