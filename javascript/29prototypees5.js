function human(name,city){
    this.name = name;
    this.city = city
}

function robot(name){
    this.name = name;
    this.age = 30;
    this.legs = 2
}

var john = new human('John','Amsterdam')
john
human {name: 'John', city: 'Amsterdam'}
john.age
human.prototype = new robot()
robot {name: undefined, age: 30, legs: 2}

var nikita = new human('Nikita','Paris')
nikita
human {name: 'Nikita', city: 'Paris'}
nikita.age
30
nikita.legs
2