const form = document.querySelector(".formContact");
const nomes= []
const numeros = []
let linhas = " "

form.addEventListener("submit", function(e){
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const name = document.querySelector(".InputName")
    const number = document.querySelector(".InputNumber")

    if(nomes.includes(name.value) || numeros.includes(number.value)){
        alert("este contato já existe.")
    }else{
    nomes.push(name.value)
    numeros.push(number.value)
    let linha = '<tr>'
    linha += `<td>${name.value}</td>`
    linha += `<td>${number.value}</td>` 
    linha += '</tr>'
    
    linhas = linhas + linha
}
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}