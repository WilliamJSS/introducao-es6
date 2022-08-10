class List {
    constructor(){
        this.data = []
    }

    add(nome){
        this.data.push(nome)
        console.log(this.data)
    }
}

// Classe com Herança

class ToList extends List {
    constructor(){
        super()
        this.usuario = 'William'
    }

    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a,b){
        return a+b
    }
}

const tolist = new ToList()

document.getElementById('novotodo').onclick = function () {
    tolist.add('will')
    tolist.getUsuario()
}

/* Usando de métodos estáticos */

console.log('Soma com metodo estatico:')
console.log(ToList.soma(1,2))

/* Tipos de variaveis */

// Não pode ser modificada
const nome = 'Will' 

// Variavel global
var glob = 10 

// É visível apenas no escopo da função em que foi definida
let loc = 2

/* Exemplo com variavel const */

const user = {nome: 'Will', idade: 20}

// É possível alterar o valor de uma propriedade, mas nao a estrutura de 'user'
console.log(user)
user.idade = 21
console.log(user)

/* Exemplo com variavel local */

function teste(x){
    let y = 4
    if(x>2){
        y = 6
    }
    console.log('dentro da função teste, y:')
    console.log(y)
} 

teste(5)

console.log('fora da função teste, y:')
console.log(y)
