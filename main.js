const form = document.getElementById('form-atividade')//resgatei o form
const imgAprovado = '<img src = "./imgs/aprovado.png" alt = "emoji feliz">'
const imgReprovado = '<img src = "./imgs/reprovado.png" alt = "emoji triste">'
const Nomes = []
const Notas = []
const SpanAprovado = '<span class="ResultadoAprovado">Aprovado</span>'
const SpanReprovado = '<span class="ResultadoReprovado">Reprovado</span>'
const NotaMinima= parseFloat(prompt("Digite a Nota mínima: "))
let linhas = " "



form.addEventListener('submit', function(e){//coloquei escutador, informei o evento e coloquei uma função
    e.preventDefault()
    adicionaLinha()  
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNome = document.getElementById('input-nome') //resgatei o input
    const inputNota = document.getElementById('input-nota')// resgatei o input

    if(Nomes.includes(inputNome.value)){
        alert(`A atividade ${inputNome.value}, já foi inserida`)
    }else{
    Nomes.push(inputNome.value)
    Notas.push(parseFloat(inputNota.value))
    let linha = '<tr>'//adicionei uma linha
    linha += `<td>${inputNome.value}</td>`//adicionei uma celula
    linha += `<td>${inputNota.value}</td>`//adicionei uma celula 
    linha += `<td>${inputNota.value >= NotaMinima ? imgAprovado : imgReprovado}</td>`//fiz uma condicional
    linha += '</tr>'//fechei a linha

    
    linhas = linhas + linha
    }
    

    


    
    inputNome.value = ''
    inputNota.value = ''
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody') // resgatei o tbody
    corpoTabela.innerHTML= linhas; //inseri a tabela
    
}

function atualizaMediaFinal(){
    mediaFinal = calculaMediaFinal()
    document.getElementById("media-final-valor").innerHTML= mediaFinal
    document.getElementById("resultado-media-final").innerHTML = mediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado;
}

function calculaMediaFinal(){ 
    let SomaTudao = 0 
    for(let i=0; i < Nomes.length; i++){
        SomaTudao = SomaTudao + Notas[i]
    }
    return SomaTudao / Nomes.length
}

console.log(calculaMediaFinal())