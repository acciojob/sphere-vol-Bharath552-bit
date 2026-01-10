function volume_sphere(event) {
  event.preventDefault();

  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");

  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    volumeInput.value = "NaN";
    return;
  }

  const calculatedVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = calculatedVolume.toFixed(4);
}

window.onload = function () {
  document.getElementById("MyForm").addEventListener("submit", volume_sphere);
};
