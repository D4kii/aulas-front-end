'use strict'


const calcular = document.getElementById('calcular');

function somar() {
    const formulario = document.getElementById('formulario');
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    let nota_final = document.getElementById('nota_final');
    let situacao = document.getElementById('situacao');
    const resultado = Number((nota1 + nota2) /2);



    if(resultado < 5){
        situacao.value = `Reprovado`;
        nota_final.value = resultado;
        formulario.classList.add('sombra-vermelha');
        situacao.classList.add('sombra-vermelha');

    }else{
        situacao.value = `Aprovado!`;
        nota_final.value = resultado;
        formulario.classList.add('sombra-azul');
        situacao.classList.add('sombra-azul');

    }

}

calcular.addEventListener('click', somar);


