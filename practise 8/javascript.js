////////////////////let apny scope sy bahir nahi ata mtlb k brackets k
//////////////////// aur is main web housting nahi hoti mtlb k a uper nahi aye ga aur error aye ga agr print krny k bd declare kiya

console.log(a);
let a = 5;


////////////////////////////////// Const constant hai ek bar value a gai to dobra update nahi kr skty error aye ga
const a = 5;
console.log(a);
a=7;
console.log(a);
/////////////////////////////////// Function

var a = 100;

function hoist() {
	a = 20;
	var b = 100;
}

hoist();
console.log(a);
console.log(b);
///// a = 20 and b = error because b is out of scope
/////////////////////////////////////////////////////////////////
hello();
function hello(){

	console.log("Helllo from function");
}
///////////////////////////////////////////////////////////




var temp = function(){
	return	"Hello world";

 }
 console.log(temp());
//////////////////////////////////////



const x = (x=3,y=2)=>x*y;

console.log(x());


//////////////////////////////////



const y = (x,y)=>{
	return x*y;
}

console.log(y(2,3));



class Person{

constructor(name,height,age){
	this.height = height;
	this.name=name;
	this.age=age;
}



}

var p = new Person("Ali",12,14);
console.log(p.name);
console.log(p.age);
console.log(p.height);

let promise_time = new Promise(function(myresolve,myreject)
{
	setTimeout(function(){
		myresolve("Hello Pakistan");
	},3000);
})

promise_time.then(function(value)
{
	console.log(value);
}

	)

/////////////////////////////////////////
