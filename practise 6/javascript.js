var food = [];
food[0]="Pizza"
food[1]="Apple"
food[7]="Mango"
console.log(food)
///////////////////////////Random Number Generate
var a = Math.random();
console.log(a)
var num1 = a*10;
console.log(num1);
var num2 = num1+num1;
console.log(num2);
var num3 = Math.floor(num2);
console.log(num3);

/////////////////////////////// Prime Number
var num = prompt("Enter any number: ");
for (var i =2 ; i <num ; i++) {
	if (num%i==0){
		console.log("Not A Prime Number");
		break;
	}
	else{
		console.log("PRime Number");
		break;
	}
}
//////////////////////// Push Pop array in stack(Last In First Out)

var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Samsa");
console.log(foods.length);
console.log(foods);
foods.pop();
console.log(foods);
console.log(foods.length);

////////////////////// Queue First In First Out

var foods=[];
foods.push("Pizza");
foods.push("Burger");
foods.push("Samsa");
console.log(foods);
console.log(foods.length);
foods.shift();
console.log(foods.length);
console.log(foods);
foods.unshift("Snaks");
foods.unshift("Pizza");
console.log(foods);
////////////////////////////////Searching in array
var value = prompt("Enter your value: ");
var arr = [34,35,36,37,38,39,40];
for (var i = 0; i <=arr.length; i++) {
if (arr[i]==value) {
	console.log("Value= "+arr[i]+"\tLocation= "+i)
	break;
}
else if((arr[i]!==value)&&(i==arr.length)){
	console.log("Value not found");
	break;
}
}
///////////////////////////////// SPLICE (yeh 3 parameters leta hai jis main (parameter1 = position, parameter2 = elements to replace, parameter3 = value added))

var arr = [34,35,36,37,38,39,40];

arr.splice(1,0,222);
console.log(arr);
arr.splice(2,1,333);
console.log(arr);

//////////////////////////// SCLICE two parameters start index and end index sclice(n,n-1) without effecting the original array hum variable main value ly lety hain

var arr = [34,35,36,37,38,39,40];
sclc_arr=arr.slice(0,3);
console.log(sclc_arr);

///////////////////Date Object  built in objects new ka keyword is liye keun k yeh ek object hai.
 ///////////////////// jis machine main ap kaam kr rahy hain us ki date return kry ga
 //////////////// jahan jis machine py apka object bn raha hai

var date = new Date();
console.log(date);

///////////////////////////To fixed limits the  decimal places


var operation = (1+1+1+1+1)/3
console.log(operation.toFixed(3));