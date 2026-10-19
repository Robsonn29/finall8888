import { aleatorio, nomes } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const introducao = document.querySelector(".introducao");
const jogo = document.querySelector(".jogo");
const progresso = document.querySelector(".progresso");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let nome = "";
let historiaFinal = "";

function iniciarJogo() {
    atual = 0;
    historiaFinal = "";
    nome = aleatorio(nomes);

    botaoIniciar.hidden = true;
    introducao.hidden = true;
    caixaResultado.hidden = true;
    jogo.hidden = false;

    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    progresso.textContent =
        `Pergunta ${atual + 1} de ${perguntas.length}`;

    caixaPerguntas.textContent =
        perguntaAtual.enunciado.replace(/\bvocê\b/gi, nome);

    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    caixaAlternativas.replaceChildren();

    perguntaAtual.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            const afirmacao = aleatorio(alternativa.afirmacao);

            historiaFinal += afirmacao + "\n\n";
            atual++;

            mostraPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    jogo.hidden = true;
    caixaResultado.hidden = false;

    textoResultado.textContent =
        `${nome}, este é o seu perfil no futebol!\n\n${historiaFinal}`;
}

botaoIniciar.addEventListener("click", iniciarJogo);

botaoJogarNovamente.addEventListener("click", () => {
    iniciarJogo();
});