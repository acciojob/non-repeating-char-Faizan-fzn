function firstNonRepeatedChar(str) {
 // Write your code here
	let result="";
	for(let i = 0; i < str.length; i++){
		let cnt = 0;
		for(let j = 0; j < str.length; j++){
		if(str.charAt(i) === str.charAt(j)){
			cnt++;
		}
	}
		if(cnt === 0){
		result += str.charAt(i);
			return result;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
