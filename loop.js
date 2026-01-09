// while

var i = 5
while(i<5){
    console.log(i)
    i++
}

// do while
var  i = 5
do{
    console.log(i)
    i++
}while(i<5)

// for of
var city = ["London","New York","Sydney","Mumbai"]
for (mycity of city){
    console.log(mycity)
}

var city = ["London","New York",["Bmw", "Audi", "Skoda"],"Sydney","Mumbai"]
for (mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}