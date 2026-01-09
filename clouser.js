//local scope
//global scope

//enclose something

var a = 10;
function add(){
    var b = 20;
    return a+b;
}
console.log("a>>>",a)
console.log(add())
console.log("b>>>",b)

variable that can be access outside the curly bracket and inside also that is in global scope.
variable that can be access only inside the curly bracket that is in local scope.

var a = 10
for(i=0; i<5; i++){
    var b = 20
    console.log(a+b+i)
}
console.log("a outside>>>",a)
