const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Onde o herói encontra o objeto misterioso que dará início à sua jornada?",
        alternativas: [
            {
                texto: "Ele encontra o objeto em uma caverna antiga escondida nas montanhas.",
                afirmacao: "A caverna antiga é um lugar esquecido pelo tempo, cheio de segredos e perigos. O objeto encontrado lá possui uma história antiga e um poder desconhecido, que desperta tanto o interesse quanto o medo. "
            },
            {
                texto: "Ele descobre o objeto em um mercado secreto no subsolo de uma grande cidade.",
                afirmacao: "O mercado secreto é um lugar de encontros clandestinos e comércio de artefatos raros. O objeto que ele encontra lá é cobiçado por muitos e carrega consigo um passado misterioso que pode alterar o curso de sua vida."
            }
        ]
    },
    {
        enunciado: "O herói é um jovem aprendiz ou um guerreiro experiente?",
        alternativas: [
            {
                texto: "O herói é um jovem aprendiz com grandes sonhos, mas pouca experiência.",
                afirmacao: "O jovem aprendiz é guiado por seu entusiasmo e desejo de provar seu valor. Sua inexperiência é tanto uma fraqueza quanto uma força, pois ele está aberto a aprender e crescer ao longo de sua jornada."
            },
            {
                texto: " O herói é um guerreiro experiente que já enfrentou inúmeras batalhas.",
                afirmacao: "O guerreiro experiente é marcado pelas cicatrizes do passado. Ele é astuto e poderoso, mas também carrega o peso das batalhas anteriores, que moldaram sua visão do mundo."
            }
        ]
    },
    {
        enunciado: "O primeiro obstáculo é um dragão feroz ou um labirinto encantado?",
        alternativas: [
            {
                texto: "O obstáculo é um dragão feroz que guarda a passagem para o próximo destino.",
                afirmacao: "O dragão feroz é um símbolo de poder e desafio. Enfrentá-lo requer coragem, força e inteligência, e é um teste que definirá o destino do herói."
            },
            {
                texto: "O obstáculo é um labirinto encantado que distorce a realidade e confunde a mente.",
                afirmacao: "O labirinto encantado representa um desafio psicológico e emocional. O herói deve enfrentar suas próprias dúvidas e medos para encontrar o caminho certo e escapar das ilusões que o cercam."
            }
        ]
    },
    {
        enunciado: "Quem se junta ao herói em sua jornada?",
        alternativas: [
            {
                texto: "Um ladrão astuto com um passado sombrio e habilidades furtivas",
                afirmacao: "O ladrão astuto é um personagem ambíguo, com lealdades questionáveis, mas habilidades indispensáveis. Sua presença adiciona uma camada de complexidade e imprevisibilidade à história."
            },
            {
                texto: "Uma sacerdotisa poderosa com a capacidade de controlar os elementos.",
                afirmacao: "A sacerdotisa poderosa é uma figura mística com um profundo conhecimento das forças naturais. Ela pode ser uma aliada crucial, oferecendo tanto poder quanto sabedoria para superar os desafios que surgem."
            }
        ]
    },
    {
        enunciado: "O clímax da história envolve a luta contra uma entidade maligna ou a proteção de uma relíquia sagrada?",
        alternativas: [
            {
                texto: "O clímax envolve uma luta épica contra uma entidade maligna que ameaça o mundo.",
                afirmacao: "A luta contra a entidade maligna é o confronto final entre o bem e o mal. É o momento de maior tensão e importância, onde o herói deve utilizar tudo o que aprendeu para salvar o mundo."
            },
            {
                texto: "O clímax envolve a proteção de uma relíquia sagrada que pode salvar ou destruir tudo.",
                afirmacao: "A proteção da relíquia sagrada coloca o herói em uma posição de grande responsabilidade. A relíquia é um objeto de imenso poder, e sua segurança é vital para o futuro do mundo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Historia Final";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
