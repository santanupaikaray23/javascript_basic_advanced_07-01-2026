function sayHi(){
    console.log("Hi!");
}sayHi();

(function(){
    console.log("Hello from IFFI");
}());

function loop(userInput){
    for (i=0;i<userInput;i++){
        console.log(i)
    }
}
loop(10)

function * loop(userInput){
    for(i=0; i<userInput; i++){
        yield i
    }
}

var data = loop(5)