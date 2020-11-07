
///////////////////////////////////////////Program No.1
var firstname=["Ali","Aqib","Arbab","Qaiser"];
var lastname = ["Abbas","Mehmood","Anjum","Abbas"];
var full_name =[];
for (var i = 0; i < firstname.length; i++) {
	for (var j = 0; j < lastname.length; j++) {
	full_name.push(firstname[i] +" "+ lastname[j]);
	}
}
for (var i = 0; i < full_name.length; i++) {
		console.log(full_name[i]);
}
var slc = full_name.slice(13);
console.log(slc)
/////////////////////////////////////////Program No. 2
var names = ["ALI","AQIB","ARBAB","QAISER"];
var nam_in = prompt("Enter Your name: ");
nam_in = nam_in.toUpperCase();
for (var i = 0; i < names.length; i++) {
	if(names[i]==nam_in){
		alert("Your name is Matched")
		break;
	}
}
///////////////////////////Program No. 3
var string = prompt("Enter The Value: ");
var len = string.length;
for (var i = 0; i < len; i++) {
	if (len>=3) {
		var slc = string.slice(0,3);
		console.log(slc);
	}
}
//////////////////////////////Program No. 4
var text = "Hello how !are you boe what is up today";
for (var i = 0; i < text.length; i++) {
 if (text.charAt(i) == "!") {
 alert("Exclamation point found!");
break;
}}
/////////////////////////////////////Program No. 5

var text = "I am in World War II";
for (var i = 0; i < text.length; i++) {
if (text.slice(i, i + 9) === "Ali Abbas") {
text = text.slice(0, i) + "SYED ALI ABBAS" + text.slice(i + 9);
}
}
console.log(text);


var variable = "to he ht be";
var a= variable.lastIndexOf("e");
console.log(a)

var rep = text.replace("Ali Abbas","SYED ALI ABBAS");
console.log(rep);
/////////////////////////////////////////////////////
var firstChar = text.indexOf("World War II");
console.log(firstChar)
if (firstChar != -1) {
text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// yahan yeh hua hai k mjhy maloom hai k 12 number spaces lgen gi world war likhny main
// to main ny jb index maloom krwaya to us ny World war II ko ek pora word smjh kr lea
// uski position 8 di to main ny us word ki position tk wesy hi chlaya phr us work k aty hi 
// main ny wahan sy 12 locations tk apni value dal di 
}
console.log(text);

// agr firstChar -1 return nahi kry gi to replace kr do keun k agr
 // koi value find ho gai to pka hai k uska index -1 nahi hoga blky positive hoga