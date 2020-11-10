function calculate() {
	var value1=document.getElementById('firstnumber').value;
	var value2=document.getElementById('secondnumber').value;
    var options = document.getElementById("options").value;
    var result="";
    if ((value1=="")||(value2=="")) {
    		result="Please Insert Values";
    }
    else{
    if (options == "Addition") {
    	result = parseInt(value1)+parseInt(value2);
    }
    else if(options=="Subtraction"){
    	result = parseInt(value1)-parseInt(value2);
    }
    else if(options=="Multiplication"){
    	result = parseInt(value1)*parseInt(value2);
    }
    else if(options=="Division"){
    	result = parseInt(value1)/parseInt(value2);
    	result = result.toFixed(2);
    }
    else if(options=="Select Operation"){
    	result="Please Insert Values"
    }}
document.getElementById('para').innerHTML="Result: "+result;    
}