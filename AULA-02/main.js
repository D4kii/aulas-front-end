'use strict'

const adicionar = document.getElementById('adicionar');

// const adicionarCard = () => {
//     const Container = document.getElementById('container')
//     Container.innerHTML = Container.innerHTML + '<div class="item"><div>'
//  }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')

    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class= "aluno_nome">${nome}</h2>
                         <span class = "aluno_nota">${nota}</span>`

    //STRING
    if(nota == ''){
        alert('aaaaaa')
    }else{
        if(Number(nota) >= 5 ){
            novaDiv.classList.add('sombra-azul');
            
        } else if(Number(nota) < 5 ){
            novaDiv.classList.add('sombra-vermelha');
            
        }
    }
    


    container.appendChild(novaDiv)

}
const handleClick = () => {
    const nome = prompt('Digite o nome do Aluno')
    const nota = prompt('Digite a nota do Aluno')
    // const novaDiv = document.getElementById('aluno')

    
    // if (nota > 5) {
    //     container.classList.add('sombra-azul');
    //     card


    // } else if (nota < 5) {
    //     container.classList.add('sombra-vermelha');


    // }else if (nome == '' || nota == '') {
    //     alert('por favor, preencha as lacunas')

    // }


    adicionarCard(nome, nota)
}

adicionar.addEventListener('click', handleClick)
