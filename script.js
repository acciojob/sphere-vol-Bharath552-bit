function volume_sphere(event) {
	// event.preventDefault()
 //    const radius=parseFloat(event.target.radius.value);
	// const volume=event.target.volume;
	// if(isNaN(radius) || radius<0){
	// 	volume.value="NaN"
	// 	return;
	// }
	// volume.value=((4/3)*Math.PI*(radius*radius*radius)).toFixed(4)

	event.preventDefault(); // Prevent form submission
    const radius = parseFloat(event.target.radius.value); // Get radius input
    const volume = event.target.volume; // Reference to volume output field

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        volume.value = "NaN"; // Set output to NaN for invalid input
        return;
    }

    // Calculate the volume of the sphere
    const calculatedVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the result rounded to four decimal places
    volume.value = calculatedVolume.toFixed(4);
		
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
