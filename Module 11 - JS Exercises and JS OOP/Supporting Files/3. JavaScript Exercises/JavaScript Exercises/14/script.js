function volume_sphere() {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
}
