/* Desestruturação */

const usuario = {
    nome: 'William',
    idade: 21,
    endereco: {
        estado: 'BA',
        cidade: 'Jequié'
    }
}

console.log(usuario)

// Sem desestruturação
function semDesestruturacao(usuario){
    const nome = usuario.nome
    const idade = usuario.idade
    
    console.log(nome)
    console.log(idade)
}

semDesestruturacao(usuario)

// Com desestruturação
function comDesestruturacao(usuario){
    
    const {nome, idade, endereco:{cidade}} = usuario
    
    console.log(nome)
    console.log(idade)
    console.log(cidade)
}

comDesestruturacao(usuario)

function getUserName(usuario){
    console.log(usuario.nome)
}

function getName({nome}){
    console.log(nome)
}

getUserName(usuario)
getName(usuario)

/* Rest */

function rest(usuario){
    const {nome, ...resto} = usuario

    console.log(resto)
}

rest(usuario)

function arrRest(){
    const arr = [1,2,3,4,5]
    
    const [a,b,...c] = arr
    
    console.log(c)
}

arrRest()

function soma(...params){
    return params.reduce((total,next)=>total+next)
}

console.log(soma(1))
console.log(soma(1,2))
console.log(soma(10,10,10))
console.log(soma(0))

/* Spread */

const usuario1 = {
    nome: 'Will',
    idade: 21,
    curso: 'SI'
}

const usuario2 = usuario1

const usuario3 = {...usuario1, idade: 25}

console.log(usuario1)
console.log(usuario2)
console.log(usuario3)

/* Templates */

const nome = 'Will'
const idade = 21

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

/* Sintaxe curta de objetos */

const usuarioNormal = {
    nome: nome,
    idade: idade,
    curso: 'SI'
}

const usuarioCurto = {
    nome,
    idade,
    curso: 'SI'
}

console.log(usuarioNormal)
console.log(usuarioCurto)
