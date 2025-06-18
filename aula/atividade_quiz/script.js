const botaoiniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulopergunta = document.getElementById("titulopergunta")

const perguntas = [
    { pergunta:"Qual é o maior deserto do mundo?", opcoes:["Saara", "Antartida", "Atacama",], correta:"Antartida"},
    { pergunta: "Qual é a capital do Brasil?", opcoes:["RJ", "SP", "Brasilia", ], correta:"Brasilia"},
    { pergunta: "Qual é a capital da Austrália?", opcoes:["Palhoça", "Florianopolis", "Canguru",], correta:"Canguru"},
    { pergunta: "Qual é o país com maior população no mundo?", opcoes:["China", "Russia", "India",], correta:"India"},
    { pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Capricornio", "Sonho", "Equador"], correta:"Equador"},
    { pergunta:"Qual o oceano que banha o Brasil?", opcoes:["Pacifico", "Atlantico", "Indico"], correta:"Pacifico"}
]



let indiceperguntas = 0

function iniciarjogo() {
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    botaoiniciar.innerHTML = ""
}

function abrirareajogo() {
    divareajogo.classList.add("active")
    areaperguntas.innerHTML = ""
    titulopergunta.textContent = perguntas[indiceperguntas].pergunta
    
    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click", () => validarRespostaCorreta())
    areaperguntas.appendChild(botaodepergunta)
})
}

function validarRespostaCorreta(btnSelecionado) {
    const botoesdaTela = document.querySelectorAll(".answer-btn")
    const respostaCorreta = perguntas[indiceperguntas].correta
    botoesdaTela.forEach(botao => {
        if(botao.textContent === respostaCorreta){
            botao.classList.add("correct")
        }
       else {
        // Se a resposta estiver errada, mostra a correta
        btnSelecionado.classList.add("incorrect")}

          
        
    })
    
    //areaperguntas.appendChild(botoesdaTela)

}

function proximapergunta(){
    indiceperguntas++
    if(indiceperguntas < perguntas.length)
        abrirareajogo()
    else
        alert("Nao existe mais perguntas")
}