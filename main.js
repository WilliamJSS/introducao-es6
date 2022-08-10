class List {
    constructor(){
        this.data = []
    }

    add(nome){
        this.data.push(nome)
        console.log(this.data)
    }
}

class ToList extends List {
    constructor(){
        super()
        this.usuario = 'William'
    }

    getUsuario(){
        console.log(this.usuario)
    }
}

const tolist = new ToList()

document.getElementById('novotodo').onclick = function () {
    tolist.add('will')
    tolist.getUsuario()
}