//your JS code here. If required.
const fN = document.getElementById("fname");

fN.addEventListener("mouseout",()=>{
	fN.value = fN.value.toUpperCase();
})