const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Ao deixar a escola, você se depara com uma tecnologia inovadora: um chat capaz de responder qualquer pergunta e gerar imagens e sons extremamente realistas. Qual seria sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é MALUCO!",
                afirmacao: "No início ficou com medo do que essa tecnologia É CAPAZ. "
            },
            {
                texto: "Isso é MUITO BOM!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a introdução da tecnologia conhecida como Inteligência Artificial, uma professora de tecnologia da escola organizou uma série de aulas sobre o tema. Ao final de uma delas, ela solicita que você produza um trabalho abordando o uso da IA em sala de aula. Como você procede?",
        alternativas: [
            {
                texto: "Use uma ferramenta de busca online que utilize IA para ajudar a encontrar informações importantes para o trabalho e explique com uma linguagem simples para facilitar o entendimento.",
                afirmacao: "Você conseguiu usar a IA para encontrar dados relevantes."
            },
            {
                texto: "Elabore o trabalho fundamentando-se nas discussões feitas com seus colegas, em pesquisas online e no seu próprio conhecimento sobre o assunto.",
                afirmacao: "Percebeu que foi mais simples usar seus próprios recursos para elaborar o trabalho."
            }
        ]
    },
    {
        enunciado: "Depois de concluir o trabalho escrito, a professora promoveu um debate com a turma para compreender como a pesquisa e a redação foram feitas. Durante a conversa, surgiu uma questão relevante: o impacto da IA no trabalho do futuro. Nesse contexto, qual seria a sua posição?",
        alternativas: [
            {
                texto: "Sustenta que a inteligência artificial é capaz de gerar novas vagas de trabalho e aprimorar as competências humanas.",
                afirmacao: "Tem promovido avanços na área de inteligência artificial e trabalha para criar novas oportunidades de carreira relacionadas à IA."
            },
            {
                texto: "Estou preocupado com aqueles que poderão perder seus empregos para as máquinas e defendo a necessidade de proteger os trabalhadores.",
                afirmacao: "Sua inquietação com a situação dos trabalhadores levou à criação de um grupo de estudos para debater o uso ético da IA."
            }
        ]
    },
    {
        enunciado: "Depois que a discussão terminou, você teve que produzir, no computador, uma imagem que traduzisse sua opinião sobre a IA. O que você faria?",
        alternativas: [
            {
                texto: "Produzir uma imagem usando um programa de edição como o Paint.",
                afirmacao: "Percebeu que muitas pessoas ainda têm dificuldade com ferramentas tradicionais e resolveu compartilhar seus conhecimentos sobre design usando programas de pintura digital para iniciantes."
            },
            {
                texto: "Produzir uma imagem usando um gerador de imagens baseado em IA.",
                afirmacao: "Agilizou a produção dos trabalhos com geradores de imagem e agora ajuda quem tem dificuldade em desenhar à mão a usar essas ferramentas também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho de biologia em grupo para entregar na próxima semana. O projeto está atrasado e um colega decide usar a IA para ajudar. O problema é que o resultado ficou idêntico ao que o chat produziu. Como você reage?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma maneira de ajudar no trabalho, portanto usar o texto completo não representa um problema.",
                afirmacao: "Infelizmente, você começou a usar a IA para realizar todas as suas tarefas e agora se sente dependente dela para tudo."
            },
            {
                texto: "Embora o chat seja uma tecnologia sofisticada, é importante estar atento, pois toda máquina pode falhar; por isso, revisar o trabalho e agregar opiniões pessoais é fundamental.",
                afirmacao: "Você percebeu que toda IA segue diretrizes da empresa que a desenvolveu e que muito do que o chat produzia não refletia suas próprias ideias, por isso entende que os textos gerados pela IA devem ser usados como apoio, não como resultado definitivo. "
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
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();