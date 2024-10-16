let livros = [
    {
        "nome": "Dom Casmurro",
        "autor": "Machado de Assis",
        "ano": "1899",
        "imagem": "dom_casmurro.jpg"
    },
    ,
    {
        "nome": "Memórias Póstumas de Brás Cubas",
        "autor": "Machado de Assis",
        "ano": "1881",
        "imagem": "memorias_postumas.jpg"
    },
    {
        "nome": "O Senhor dos Anéis: A Sociedade do Anel",
        "autor": "J.R.R. Tolkien",
        "ano": "1954",
        "imagem": "senhor_dos_aneis_sociedade.jpg"
    },
    {
        "nome": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K. Rowling",
        "ano": "1997",
        "imagem": "harry_potter_pedra_filosofal.jpg"
    },
    {
        "nome": "O Hobbit",
        "autor": "J.R.R. Tolkien",
        "ano": "1937",
        "imagem": "o_hobbit.jpg"
    },
    {
        "nome": "Duna",
        "autor": "Frank Herbert",
        "ano": "1965",
        "imagem": "duna.jpg"
    },
    {
        "nome": "O Guia do Mochileiro das Galáxias",
        "autor": "Douglas Adams",
        "ano": "1979",
        "imagem": "guia_do_mochileiro.jpg"
    },
    {
        "nome": "Neuromancer",
        "autor": "William Gibson",
        "ano": "1984",
        "imagem": "neuromancer.jpg"
    },
    {
        "nome": "O Exterminador do Futuro",
        "autor": "Randall Frakes",
        "ano": "1985",
        "imagem": "exterminador_futuro.jpg"
    },
    {
        "nome": "Jogador Número 1",
        "autor": "Ernest Cline",
        "ano": "2011",
        "imagem": "jogador_numero_1.jpg"
    }
];

function listarLivros() {
    const container = document.getElementById('livros-container');
    container.innerHTML = '';
    livros.forEach(livro => {
        const div = document.createElement('div');
        div.classList.add('livro');

        div.innerHTML = `
            <img class="poster" src="imagens/${livro.imagem}" alt="${livro.nome}">
            <h2>${livro.nome}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>Ano: ${livro.ano}</p>
            ${livro.avaliacao ? `<p>Avaliação: ${livro.avaliacao} / 5</p>` : ''}
        `;
        container.appendChild(div);
    });
}

function adicionarLivro() {
    const nome = prompt("Informe o título do livro:");
    const autor = prompt("Informe o autor:");
    const genero = prompt("Informe o gênero:");
    const ano = prompt("Informe o ano de publicação:");
    const avaliacao = prompt("Informe a avaliação (0-5):");

    if (nome && autor && genero && ano && avaliacao) {
        const novoLivro = {
            "nome": nome,
            "autor": autor,
            "genero": genero,
            "ano": ano,
            "imagem": "default.jpg",
            "avaliacao": parseFloat(avaliacao)
        };

        livros.push(novoLivro);
        listarLivros();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function buscarLivro() {
    const termoBusca = document.getElementById('buscaInput').value.toLowerCase();
    const container = document.getElementById('livros-container');
    container.innerHTML = '';

    const resultados = livros.filter(livro => 
        livro.nome.toLowerCase().includes(termoBusca) ||
        livro.autor.toLowerCase().includes(termoBusca) ||
        livro.genero && livro.genero.toLowerCase().includes(termoBusca)
    );

    if (resultados.length > 0) {
        resultados.forEach(livro => {
            const div = document.createElement('div');
            div.classList.add('livro');

            div.innerHTML = `
                <img class="poster" src="imagens/${livro.imagem}" alt="${livro.nome}">
                <h2>${livro.nome}</h2>
                <p>Autor: ${livro.autor}</p>
                <p>Gênero: ${livro.genero}</p>
                <p>Ano: ${livro.ano}</p>
                ${livro.avaliacao ? `<p>Avaliação: ${livro.avaliacao} / 5</p>` : ''}
            `;
            container.appendChild(div);
        });
    } else {
        container.innerHTML = `<p>Nenhum livro encontrado.</p>`;
    }
}

function classificarLivros(criterio) {
    if (criterio === 'titulo') {
        livros.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (criterio === 'autor') {
        livros.sort((a, b) => a.autor.localeCompare(b.autor));
    } else if (criterio === 'ano') {
        livros.sort((a, b) => a.ano - b.ano);
    }

    listarLivros();
}

function avaliarLivro() {
    const nomeLivro = prompt("Digite o nome do livro que deseja avaliar:");
    const livro = livros.find(l => l.nome.toLowerCase() === nomeLivro.toLowerCase());

    if (livro) {
        const novaAvaliacao = parseFloat(prompt(`Informe a nova avaliação para "${livro.nome}" (0-5):`));
        if (novaAvaliacao >= 0 && novaAvaliacao <= 5) {
            livro.avaliacao = nova}
        }
    }
