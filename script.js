
function resultado() {
    let resultadoTexto = document.querySelector('.resultado');
    let nota1 = parseFloat(document.querySelector('.input-nota-1').value);
    let nota2 = parseFloat(document.querySelector('.input-nota-2').value);
    let nota3 = parseFloat(document.querySelector('.input-nota-3').value);
    let nota4 = parseFloat(document.querySelector('.input-nota-4').value);
    let resultadoNota1 = document.querySelector('.nota1');
    let resultadoNota2 = document.querySelector('.nota2');
    let resultadoNota3 = document.querySelector('.nota3');
    let resultadoNota4 = document.querySelector('.nota4');
    let media = document.querySelector('.nota-media')
    let aprovadoOuReprovado = document.querySelector('.resultado-aprovado-reprovado');
    const resultado = (nota1 + nota2 + nota3 + nota4) / 4;
    let conceito = document.querySelector('.resultado-conceito');

    if (resultado >= 0 && resultado <= 4) {
        conceito.innerHTML = `<p>E</p>`;
        conceito.style.backgroundColor = "rgb(255, 0, 0)";
        aprovadoOuReprovado.innerHTML = 'Reprovado';
        aprovadoOuReprovado.style.backgroundColor = 'rgb(255, 0, 0)';



    }

    else if (resultado > 4 && resultado <= 6) {
        conceito.innerHTML = `<p>D</p>`;
        conceito.style.backgroundColor = "rgb(255, 100, 0)";
        aprovadoOuReprovado.innerHTML = 'Reprovado';
        aprovadoOuReprovado.style.backgroundColor = 'rgb(255, 100, 0)';
    }

    else if (resultado > 6 && resultado <= 7.5) {
        conceito.innerHTML = `<p>C</p>`;
        conceito.style.backgroundColor = "rgb(200, 200, 0)";
        aprovadoOuReprovado.innerHTML = 'Aprovado';
        aprovadoOuReprovado.style.backgroundColor = 'rgb(200, 200, 0)';

    }

    else if (resultado > 7.5 && resultado <= 9) {
        conceito.innerHTML = `<p>B</p>`;
        conceito.style.backgroundColor = "rgb(100, 200, 0)";
        aprovadoOuReprovado.innerHTML = 'Aprovado';
        aprovadoOuReprovado.style.backgroundColor = 'rgb(100, 200, 0)';
    }

    else if (resultado > 9 && resultado <= 10) {
        conceito.innerHTML = `<p>A</p>`;
        conceito.style.backgroundColor = "rgb(50, 255, 0)";
        aprovadoOuReprovado.innerHTML = 'Aprovado';
        aprovadoOuReprovado.style.backgroundColor = 'rgb(50, 255, 0)';
    }

    else { // Verificando se tem elemento no campo de conceito

        if (conceito.children.length > 0) {
            conceito.removeChild(conceito.children[0]);
            conceito.style.backgroundColor = 'transparent';
        }

        alert('Dados digitados são inválidos, digite apenas números de 0 a 10!');
        location.reload();


    }

    function mostrandoAsNotas() {
        resultadoNota1.innerHTML = `<p>${nota1}</p>`
        resultadoNota2.innerHTML = `<p>${nota2}</p>`
        resultadoNota3.innerHTML = `<p>${nota3}</p>`
        resultadoNota4.innerHTML = `<p>${nota4}</p>`
        media.innerHTML = `<p>Média: ${resultado}</p>`

    }
    mostrandoAsNotas()


    let inputs = document.getElementsByTagName('input') // Limpando inputs

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }


} // fim da  função 