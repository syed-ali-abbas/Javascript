
//////////////////////////////Alerts
var name = 'Syed Ali Abbas';
alert('my name is '+name+'\t\t\t\n'+2);
console.log(name);
////////////////////////////Maths Operations
var num1 = 4;
var num2 = 4;
var result=num1+num2;
console.log(result);
///////////////////////////Special Maths Operaitons
nu1 = 9;
nu2 = 2;
var r = nu1%nu2;
console.log(r);
////////////////////////// PostFix PreFix
var a = 10;
// x++ main assign krny k bd value change hogi lkn ++x main usi wqt change ho jye gi value
// if u are using x++ 
// x=10
// y=x++
// console.log(y)
// answer: 11
// but if x = x++ answer is 10 keun k assign krny bd value change hoti hai is  main
// ++x
// usi wqt value change kr deta hai
var n = a++;
console.log(a);

////////////////////////// precedence rules. 
/////////agr ap bracket use nahi krty to yeh use krti hai java khud DMAS

var total_cost = ((1+2)*3);
console.log(total_cost);

///////////////
var temp = 2-4/2+5*3;
console.log(temp);
// PEMDAS is the rule which is followed when you dont use custom brackets.
var temp1 = 5*3/5-2+1;
console.log(temp1)

///////////////////////////Prompts

var spec = prompt("What is Your name?","ALi Abbas");


var cats = prompt("how many cats do you have ?");

var toomanycats = parseInt(cats)+1;
console.log(toomanycats);







