function volume_sphere(event) {
	// event.preventDefault()
 //    const radius=Number(event.target.radius.value);
	// const volume=event.target.volume;
	// if(Number(radius)=="NaN" || radius<=0){
	// 	volume.value="NaN"
	// 	return;
	// }
	// volume.value=4/3*Math.PI*(radius*radius*radius)
	// Step 1: Retrieve the radius value
    var radius = parseFloat(document.getElementById("radiusInput").value);
    
    // Step 2: Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById("output").innerText = 'NaN';
        return;
    }

    // Step 3: Calculate the volume
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Step 4: Display the result rounded to four decimal places
    document.getElementById("output").innerText = volume.toFixed(4);
		
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
