// var > we are able to redeclare and reassign
// let > we can't redeclare but we can reassign
// const > we can't redeclare but nor reassign

var a = 10
undefined
var a > declare
a=10> assignment
> a
10
> var a = 12
undefined
> a
12
> a = 13
13
> a
13
>
 let b = 20
undefined
> b = 21
21
> let b = 23
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 45
45
>
 const a = 34
undefined
> a = 34
Uncaught TypeError: Assignment to constant variable.
> const a = 45
Uncaught SyntaxError: Identifier 'a' has already been declared
>