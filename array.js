// Array is the collection of homegenious or hetrigenious datatype.

var a = [1,3,44,56,78] (Array of Number)
var b = ["Aakash","Santanu","Tina"] (Array of String)
var c = [true,false,true,false] (Array of Boolean)

var d = [1,"Aakash",true,45,"Santanu",false]

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
typeof(city)
'object'
city[0]
'Delhi'
city[1]
'Mumbai'
city[3]
'Chennai'
typeof(city[0])
'string'
city[city.length-1]
'Kolkata'
city
(5) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
undefined
city.push("Odisha")
6
city
(6) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Odisha']
city.push("Dubai","Venice")
8
city
(8) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Odisha', 'Dubai', 'Venice']
city.pop()
'Venice'
city
(7) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Odisha', 'Dubai']
city.pop(2)
'Dubai'
city.pop(20)
'Odisha'
city
(5) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
city.shift()
'Delhi'
city
(4) ['Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
city.unshift("Checking")
5
city
(5) ['Checking', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']

push>add in the end of the Array
pop>remove from the end of the Array
shift>remove from the begining of the Array
unshift>add in the begining of the Array

splice(startIndex, deleteCount, values)

//On index no2 delete 2 values
(5) ['Checking', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
city.splice(2,2)
(2) ['Bangalore', 'Chennai']
city
(3) ['Checking', 'Mumbai', 'Kolkata']
city
(3) ['Checking', 'Mumbai', 'Kolkata']
//On index no1 delete 0 values and add 2 values
city.splice(1,0,'Mumbai','Nice')
[]
city
(5) ['Checking', 'Mumbai', 'Nice', 'Mumbai', 'Kolkata']
//On index no3 delete 1 value and add 1 value
city.splice(3,1,'Odisha')
['Mumbai']
city
(5) ['Checking', 'Mumbai', 'Nice', 'Odisha', 'Kolkata']

var a = ['a','b','c',1]
var b = [1,2,3,4]
a+b
'a,b,c,11,2,3,4'

var a = ['a','b','c',1]
var b = [1,2,3,4]
a.concat(b)
(8) ['a', 'b', 'c', 1, 1, 2, 3, 4]



