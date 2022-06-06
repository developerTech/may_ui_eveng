let calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}


calc.sum(3,7)
10
calc.sum(7,2)
9
calc.sub(8,1)
7

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} name,city values(${data.name},${data.city})`}
}

dbQuery.find('employee')
'Select * from employee'
dbQuery.insert('Student',{name:'Amit',city:'Delhi'})
'Insert into Student name,city values(Amit,Delhi)'