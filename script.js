function firstNonRepeatedChar(str) {
 // Write your code here
	let str="";
	for(let i = 0; i < str.length; i++){
		let cnt = 0;
		while(i+1 < str.length && str.charAt(i) === str.charAt(i+1)){
			i++;
			cnt++;
		}
		if(cnt === 0){
		return str.charAt(i);	
		}
	}
	return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
