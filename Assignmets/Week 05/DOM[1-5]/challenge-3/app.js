const NameDisplay = document.getElementById('nameDisplay');
const JobDisplay = document.getElementById('jobDisplay');
const AgeDisplay = document.getElementById('ageDisplay');
const BioDisplay = document.getElementById('bioDisplay');

nameInput.addEventListener('input', function () {
  NameDisplay.textContent = this.value || 'Not provided';
});

jobInput.addEventListener('input', function () {
  JobDisplay.textContent = this.value || 'Not provided';
});

ageInput.addEventListener('input', function () {
  AgeDisplay.textContent = this.value || 'Not provided';
});

bioInput.addEventListener('input', function () {
  BioDisplay.textContent = this.value || 'Not provided';
});
