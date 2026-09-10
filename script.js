//your JS code here. If required.
     let value=document.getElementById("counter")
		
		let btn =document.getElementById("incrementBtn").onclick=clicked
		function clicked(){
           
			alert(value.innerText)
			value.innerText=Number(value.innerText)+1
			
		
		}