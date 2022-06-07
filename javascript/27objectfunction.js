function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}


var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
var english = new language('English','England')
undefined
english
language {name: 'English', country: 'England', greet: ƒ}