let mostrarCep = document.querySelector("#btnPesquisar")
let limparCep = document.querySelector("#btnLimpar")

function atribuirCampos(data) {
let rua = document.querySelector("#rua")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#estado")

rua.value = data.logradouro // Pega as informações da api.
bairro.value = data.bairro
cidade.value = data.localidade
estado.value = data.uf
}

mostrarCep.addEventListener('click', event => {
    event.preventDefault()
    let inputCep = document.querySelector("#cep").value
    let url = `https://viaCep.com.br/ws/${inputCep}/json/` // É definido a api que vai doar as informações.

    fetch(url).then(response => {
        return response.json() // Faz a requisição da api, e nisso pega as informações escolhidas.
    })
    .then(data => {
        atribuirCampos(data)
    }) 
})

limparCep.addEventListener('click', event => {
    event.preventDefault()
    document.querySelector("#cep").value = ''
    rua.value = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''
})