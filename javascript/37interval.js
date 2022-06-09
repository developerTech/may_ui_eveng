// interval > run some operations after certain interval times repeatdly
// timeout > only run once after given interval

setInterval(function() {},time)

let myinterval = setInterval(function() {
    console.log(Math.random())
},2000)

clearInterval(myinterval)

setTimeout(function() {
    console.log(Math.random())
},2000)
2
VM261:2 0.6961611799879324
