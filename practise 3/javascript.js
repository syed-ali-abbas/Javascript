var cities = ["Karachi","KPK","Multan"]
console.log(cities[2])

var mixed = ["Ali",12,'a',3,5]
var result = mixed[1]+mixed[3]+mixed[4]
console.log(result)


var arr = []
arr.push("Syed","Ali","Abbas")
console.log(arr)
console.log("First Element: ",arr[0])
var poped_value=arr.pop()
console.log(arr)
console.log("First Element: ",arr[0])
console.log(poped_value)
shifted = arr.shift()
console.log(shifted)
arr.unshift("Syed","Abbas")
console.log(arr)
arr.splice(1,"Syed","Usama")
console.log(arr)

//0 sy n-1
var scliced= arr.slice(0,2)
console.log(scliced)