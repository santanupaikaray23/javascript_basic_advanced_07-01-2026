if(condition){
    //do something
}else{
    //do something
}

 var a = 23454
undefined
> if(a%2==0){
...     console.log(`Number ${a} is even`)
... }else{
...     console.log(`Number ${a} is odd`)
... }
Number 23454 is even
undefined
> var a = 23453
undefined
> if(a%2==0){
...     console.log(`Number ${a} is even`)
... }else{
...     console.log(`Number ${a} is odd`)
... }
Number 23453 is odd

var name = "Santanu";
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Santanu"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i don't know you`)
}

 var name = "Santanu";
undefined
> if(name=="Priya"){
...     console.log(`Hi ${name} you are admin`)
... }else if(name=="Bhumika"){
...     console.log(`Hi ${name} you are super admin`)
... }else{
...     console.log(`Hi ${name} i don't know you`)
... }
Hi Santanu i don't know you

 var name = "Santanu";
if(name=="Priya"){
...     console.log(`Hi ${name} you are admin`)
... }else if(name=="Santanu"){
...     console.log(`Hi ${name} you are super admin`)
... }else{
...     console.log(`Hi ${name} i don't know you`)
... }
Hi Santanu you are super admin

var role = "Admin"
var name = "John"
if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

//any condition can match
var name = "Tina"
if(name == "Tina" || name=="Nikita"){
    console.log(`hi ${name} you are welcome`)
}

//both condition should match
var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}

var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}