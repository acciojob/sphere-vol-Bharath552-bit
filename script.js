function volume_sphere(event) {
	event.preventDefault()
    const radius=Number(event.target.radius.value);
	const volume=event.target.volume;
	if(Number(radius)=="NaN" || radius<=0){
		volume.value="NaN"
		return;
	}
	volume.value=Math.round((4/3*Math.PI*(radius*radius*radius))*10000)/10000
		
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
