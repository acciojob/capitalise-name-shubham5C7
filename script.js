//your JS code here. If required.
const fN = document.getElementById("fname");

fN.addEventListener("input",()=>{
	fN.value = fN.value.toUpperCase();
})