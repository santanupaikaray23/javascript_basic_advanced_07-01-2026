//Multiple condition and multiple output(ifelse)
//one condition and one output(ternary)
//One condition and multiple output(switch)

var name = "Santanu";

switch(name){
    case "Tina":
        console.log(`Hi ${name}`)
        break;
        case "Nikita":
            console.log(`Hi ${name}`)
            break;
            default:
            console.log(`Default case executed`)

}

var input = 3;
switch(input%2){
    case 0:
        console.log("Even Number")
        break;
        case 1:
            console.log("Odd Number")
            break;
            default:
            console.log("Invalid Number")
}

switch(new Date().getDay()){
    case 0:
        console.log("Today is Wednesday")
        break;
        case 4:
            console.log("Today is Thursday")
            break;
            default:
            console.log("Invalid Day")
}

