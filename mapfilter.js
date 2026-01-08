var a = [4, 5, 7, 9, 23, 44, 80]
a.map((data)=>{console.log(data)})

var a = [4, 5, 7, 9, 23, 44, 80]
a.map((data)=>{return data})

var a = [5,6,7,8,9,10]
a.map((data)=>{return data*2})

>Map is use to iterate over the Array
>It always return same length of output as input Array
>It use to apply logics (sum, mul, div) or return html, bind data etc

var a = [4, 5, 7, 9, 23, 44, 80]
a.map((data)=>{return `<p>${data*2}</p>`})


var a = [4, 5, 7, 9, 23, 44, 80]
a.filter((data)=>{return data>10})

>filter is use to filter out the value
>It may or may not return same length of input Array.
>It only return those value for which condition/output is true

var a = [0,1,2,3]
a.map((data)=>{return data*2})
a.filter((data)=>{return data*2})