function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultados = '';

    // Normalizar as strings para lidar com acentos (opcional)
    const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const campoPesquisaNormalizado = normalize(campoPesquisa);

    for (let dado of carros) {
        const tituloNormalizado = normalize(dado.titulo.toLowerCase());
        if (tituloNormalizado.includes(campoPesquisaNormalizado)) {
            const divResultado = document.createElement('div');
            divResultado.classList.add('item-resultado');

            const h2 = document.createElement('h2');
            const aTitulo = document.createElement('a');
            aTitulo.href = '#';
            aTitulo.textContent = dado.titulo;
            h2.appendChild(aTitulo);

            const pDescricao = document.createElement('p');
            pDescricao.classList.add('descricao-meta');
            pDescricao.textContent = dado.descricao;

            const aMaisInfo = document.createElement('a');
            aMaisInfo.href = dado.link;
            aMaisInfo.textContent = 'Mais Informações';
        

            const imagemIcon = document.createElement('img');
            imagemIcon.classList.add('icon');
            imagemIcon.src = dado.img

            
            divResultado.appendChild(h2);
            divResultado.appendChild(imagemIcon)
            divResultado.appendChild(pDescricao);
            divResultado.appendChild(aMaisInfo);
            

            resultados += divResultado.outerHTML;
        }
    }

    if (resultados === '') {
        section.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    } else {
        section.innerHTML = resultados;
    }
}
function voltar() {
        const section = document.getElementById("resultados-pesquisa");
        section.innerHTML = ''; // Limpa o conteúdo da seção
      }


