var a = 10
var b = 20
a+b
30

function
arrow function
iffi
method
generator

// function

function add(x, y) {
    return x + y
}
add(1,2)

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

function test(a,b){
    return a,b
}
test(1,2)
2
test("hii","bie")
bie
>one function can't return more than one value

var city = ["London","New York","Sydney","Mumbai"]
var out=""
for(i=0;i<city.length;i++){
    out += `${city[i]}`
}

var city = ["London","New York","Sydney","Mumbai"]  
for(i=0;i<city.length;i++){
    console.log(city[i])
}

function add(...args){
    console.log(args)
}
add(1,2,3,5,3,6)
VM252:2 (6) [1, 2, 3, 5, 3, 6]

function add(...args){
    let sum = 0
    for(data of args){
        sum = data+sum
    }
    return sum
}
add(1,2,3,5,3,6)

// method> when function assign to variable, it become method.
var add = function(x,y){
    return x*y
}
add(3,5)

// arrow function
var add = (x,y) => {
    return x+y
}
add(4,5)

