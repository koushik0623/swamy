function openForm(type) {
  document.getElementById('overlay').style.display = 'block';
  document.querySelectorAll('.form-popup').forEach(popup => popup.style.display = 'none');
  document.getElementById('form-' + type).style.display = 'block';
}

function closeForm() {
  document.getElementById('overlay').style.display = 'none';
  document.querySelectorAll('.form-popup').forEach(popup => popup.style.display = 'none');
}
