class geo{
    constructor(){
        this.lat = 41.11;
        this.long = 49.78;
    }
}


class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet=() => {return `Say Hi to ${this.name}`}
}

let french = new language1('French','France')

console.log(french)
language1 {lat: 41.11, long: 49.78, name: 'French', country: 'France', greet: ƒ}
