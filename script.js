function volume_sphere(event) {
	event.preventDefault()
    const radius=parseFloat(event.target.radius.value);
	const volume=event.target.volume;
	if(isNaN(radius) || radius<=0){
		volume.value="NaN"
		return;
	}
	volume.value=((4/3)*Math.PI*(radius*radius*radius)).toFixed(4)
		
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
