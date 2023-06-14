function saveData() {
  var inputValue = document.getElementById('myInput').value;
  localStorage.setItem('data', inputValue);
  alert('Data saved to local storage!');
}

function retrieveData() {
  var savedDataDiv = document.getElementById('savedData');
  var savedData = localStorage.getItem('data');
  
  if (savedData) {
    savedDataDiv.textContent = 'Retrieved Data: ' + savedData;
  } else {
    savedDataDiv.textContent = 'No data found in local storage.';
  }
}