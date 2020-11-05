/////////////////////////////////////IF-ELSE Program 1
var first_name = "ali";
var required_name = prompt("Whats your name?");
if (required_name=="ali"){
		console.log("correct name\t\t", first_name);
}
else{
	console.log("Incorrect name");
}

///////////////////////////////////////PROGRAM 2
var question=prompt("Guess number");
var score=0;
if (question==12) {
		score++;
		console.log(score);
}
else{
	console.log(score);
}

////////////////////////////////Program 3
 var num = prompt("Enter number: ");
 if (num>10) {
 	console.log("Number is greater than 10");
 }
 else{
 	console.log("Number is smaller than 10");
 }
///////////////////////Program 4

var name = prompt("Enter you name: ");

if(name!="ali"){
	console.log(name+"is true");
}
else if(name!=="abbas"){
	console.log(name+"is true");
}
else{

	console.log(name+"is false");
}

////////////////////Program 5 AND operator
var pro = prompt("How much you eat ?");
var prompt1 = prompt("How much you run Boe ?");

if(pro>60 && prompt1<=6){
 console.log("You are fit and offered for the game");
}
else{
	console.log("Unfit Bor");
}
///////////////////Program 6 
var pro = prompt("How much you eat ?");
var prompt1 = prompt("How much you run Boe ?");

if(pro>60 || prompt1<=6){
 console.log("You are fit and offered for the game");
}
else{
	console.log("Unfit Bor");
}

/////////////////////Program 7 Nested if

var p = prompt("Enter your first name: ");
var p1 = prompt("Enter your last name: ");

if(p=="ali"){
  if (p1=="abbas") {
  	console.log("Hello \t"+p+" "+p1);
  }
  else{
  	console.log("Helloe "+p);
  }
}
  else{
  	console.log("No one found");
  }
