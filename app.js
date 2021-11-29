const cursos = require('./database');

function criarCurso() {
    const curso = {
        id: cursos.length + 1,
        titulo: 'Figma',
        descricao: 'Você vai usar o Figma para criar interfaces escaláveis, protótipos interativos e explorar as principais metodologias de design e usabilidade para aplicar, na prática, em um projeto exclusivo no Figma para enriquecer seu portfólio.',
        imagem: 'c:/temp/figma',
        nomeProfessor: 'Emanoel Ramirez',
        listaAulas: ['Protótipos navegáveis','Padrões e otimização','Colaboração em equipe','Portifólio','Briefing e brainstorming'],
    };
    cursos.push(curso);
}

function exibirCurso(posicaoDoCursoArray) {
    const curso = cursos[posicaoDoCursoArray];
    console.log(`
        Id: ${curso.id},
        Titulo: ${curso.titulo}
        Descrição: ${curso.descricao}
        Imagem: ${curso.imagem}
        Nome do Professor: ${curso.nomeProfessor}
        Lista de Aulas: ${curso.listaAulas}
    `);
}

function atualizarCurso(posicaoDoCursoArray) {
    cursos[posicaoDoCursoArray].titulo = 'Adobe Studio';
    cursos[posicaoDoCursoArray].descricao = 'Você vai usar o Adobe Studio para criar interfaces escaláveis, protótipos interativos e explorar as principais metodologias de design e usabilidade para aplicar, na prática, em um projeto exclusivo no Adobe Studio para enriquecer seu portfólio.';
    cursos[posicaoDoCursoArray].imagem = 'c:/temp/AdobeStudio';
    cursos[posicaoDoCursoArray].nomeProfessor = 'Emanoel Ramirez';
    cursos[posicaoDoCursoArray].listaAulas = ['Protótipos navegáveis','Padrões e otimização','Colaboração em equipe','Portifólio','Briefing e brainstorming'];
}


function deletarCurso(posicaoDoCursoArray) {
    const curso = cursos[posicaoDoCursoArray];
    cursos.splice(posicaoDoCursoArray, 1);
    return curso;
}

function listarCursos() {
    for (let i = 0; i < cursos.length; i++) {
        const curso = cursos[i];
        console.log(`
        Código: ${curso.id},
        Titulo: ${curso.titulo},
        Descricao: ${curso.descricao},
        imagem: ${curso.imagem},
        Nome do Professor: ${curso.nomeProfessor},
        Lista de Aulas: ${curso.listaAulas},
        `);
    }
    
}


criarCurso();
exibirCurso(5);
atualizarCurso(5);
deletarCurso(3);
listarCursos();