// RegExp
// regular expression 

var a = "Hi"
a.match("^([a-z])$")
null
var a = "hi"
a.match("^([a-z])$")

var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

var a = "hi"
a.match("^([a-z]{2})$")
var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "hii"
a.match("^([a-z]{2})$")
null
var a = "hii"
a.match("^([a-z]{3})$")
 ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

var a = "Hi"
a.match("^([A-Za-z]{2})$")

var a = "Hi"
a.match("^([A-Za-z]{2})$")
(2) ['Hi', 'Hi', index: 0, input: 'Hi', groups: undefined]

var a = "iHii"
a.match("^([A-Za-z]{2,5})$")

// Range
var a = "iHii"
a.match("^([A-Za-z]{2,5})$")
(2) ['iHii', 'iHii', index: 0, input: 'iHii', groups: undefined]

var a = "iHiiihng"
a.match("^([A-Za-z]+)$")
 ['iHiiihng', 'iHiiihng', index: 0, input: 'iHiiihng', groups: undefined]

var a = "iHiiihng0"
a.match("^([A-Za-z]+)$")
null

var a = "iHiiihng0"
a.match("^([A-Za-z0-9]+)$")
(2) ['iHiiihng0', 'iHiiihng0', index: 0, input: 'iHiiihng0', groups: undefined]

var a = "6851736574"
a.match("^([0-9]{10})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
 ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]