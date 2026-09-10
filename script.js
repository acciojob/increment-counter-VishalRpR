//your JS code here. If required.
     let value=document.getElementById("counter")
		
		let btn =document.getElementById("incrementBtn").onclick=clicked
		function clicked(){
           alert("you clicked the button")
			value.innerText=Number(value.innerText)+1
		
		}