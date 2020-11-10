
////////////////////////////////////////Program sclice n,n-1(hum negative indexes bhi dy skty hain)
var text = "Hello world, i a, new here";
var data = text.slice(0,5);
console.log(data);

var t = text.split(","); 
console.log(t);

////////////////////////////////Program Math.ceil and Math.floor
///////////////////// ceil agy upper sude py round krta hahi
///////////////////// floor lower side py round krta hai
var a = 12.1
a = Math.ceil(a);
console.log(a);

var a = 12.1
a = Math.floor(a);
console.log(a);
//////////////////////////////

var a = Math.random()
var floe_a = Math.floor(a*6+1);
console.log(floe_a);

///////////////////////////// Advance Javascript
/////////////////////////// Javascript variable hosting krta hai aur sary variables jo declared hain unko utha kr uper ly ata hai
////////////////////////// is liye jb hum variable print krwany kk bd declare krty hian to output main undefined ata hai.
/////////////////////////aur jb declare na kren to error a jata hai. Compiler pehly declarations ko dekhta hai



console.log(a);
var a;
///////output undefined
console.log(b);
//////// output error


///////////////////////////////////// declaration ko uper ly kr jata hai pori vlaue
////////////////////////////////////// nahi ly kr jata is liye undefined output ata hai
console.log(a);
var a = 5;
//////////////////////////// output : undefined
console.log(a);
var a = 5;
console.log(a)




