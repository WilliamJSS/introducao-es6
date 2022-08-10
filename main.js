const arr = [1,2,3,4,6,8,9]

/* Função map - mapeia todos os elementos do array, podendo realizar
operações sobre cada um deles */

const newArr = arr.map(function(item){
    return item * 2
})

console.log(arr)
console.log(newArr)

/* Função reduce - reduz o array a um unico elemento, resultante da
iteração de todos os elementos do array */
const soma = arr.reduce(function(total, next){
    return total + next
})

console.log(soma)

/* Função filter - filtra os elementos do array, mantendo apenas
os que forem de acordo com a condição definida */

// retorna os elementos pares do array
const filter = arr.filter(function(item){
    return item % 2 == 0
})

console.log(filter)

/* Função find - busca um elemento no array */

// retorna o elemento ou 'undefined' caso não o encontre
const find = arr.find(function(item){
    return item === 7
})

console.log(find)

/* Arrow Functions - diminui a verbosidade do código */

// representa o mesmo map efetuado no início do código
const arrowArr = arr.map((item) => item*2)
console.log(arrowArr)

const teste = () => {
    return {nome: 'Will'}
}
console.log(teste())

/* Parametros default */

function somador(a=2, b=3){
    return a+b
}

console.log(somador(6,5))
console.log(somador(3))
console.log(somador())
