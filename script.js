/*
	Name: Tianwei Wang
	NO.: 100714287
	Content: display a progress bar representing a level between 0 and 20 inclusive
	Date: April 17, 2019
*/


//run the function when the whole page finishes loading
window.onload = function () {
	
	//claim an array for content of the output paragraph
	let content= ["+","+","+","+","+","+","+","+","+","+"];
	//claim a string to take the content from the array
	let output="";
	//paragraph one discription content
	let discription;
	
	//claim a function that add plus mark
	function addPlus(){
		content.push("+");
	}
	
	//claim a function that minus plus mark
	function minusPlus(){
		content.pop();
	}
	
	//if button is clicked, run the function
	document.querySelector("#plus").addEventListener("click", function () {
		
		//invoke add function
		addPlus();
		
		//when + amount are over 20, keep them to 20
		if(content.length >=21){
			content.pop();
		}
		
		
		if(content.length>0 && content.length <= 12){
			discription="OK";
			document.querySelector(".para2").style.color="green";
		}
		if(content.length>12 && content.length <= 18){
			discription="WARNING!";
			document.querySelector(".para2").style.color="orange";
		}
		if(content.length>18 && content.length <= 20){
			discription="DANGER!!";
			document.querySelector(".para2").style.color="red";
		}
		
		//output text in paragraph1
		document.querySelector(".para1").textContent='level is at  '+ content.length+" - "+ discription;
		
		//transfer the content in array to output variable
		for(let i=0; i<content.length; i++){
			
			output= output + content[i];
			
		}
		//output content in paragraph2	
		document.querySelector(".para2").textContent=output;
		//clear output string
		output="";

	})
	
	//if button is clicked, run the function
	document.querySelector("#minus").addEventListener("click", function () {
		
		//invoke minus function
		minusPlus();
		
		
		if(content.length>0 && content.length <= 12){
			discription="OK";
			document.querySelector(".para2").style.color="green";
		}
		if(content.length>12 && content.length <= 18){
			discription="WARNING!";
			document.querySelector(".para2").style.color="orange";
		}
		if(content.length>18 && content.length <= 20){
			discription="DANGER!!";
			document.querySelector(".para2").style.color="red";
		}
		
		//output text in paragraph1
		document.querySelector(".para1").textContent='level is at  '+ content.length+" - "+ discription;
		
		//transfer the content in array to output variable
		for(let i=0; i<content.length; i++){
			
			output= output + content[i];
			
		}
		
		//output text in paragraph2
		document.querySelector(".para2").textContent=output;
		//clear output string
		output="";
		

	})


};
