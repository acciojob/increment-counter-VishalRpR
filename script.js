//your JS code here. If required.
     let value=document.getElementById("counter")
		
		let btn =document.getElementById("incrementBtn").onclick=clicked
		function clicked(){
           
			value.innerText=Number(value.innerText)+1
			alert(value.innerText)
		
		}