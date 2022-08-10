class ToList {
    constructor(){
        this.data = []
    }

    add(nome){
        this.data.push(nome)
        console.log(this.data)
    }
}

const tolist = new ToList()

document.getElementById('novotodo').onclick = function () {
    tolist.add('will')
}