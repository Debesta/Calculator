function appendToDisplay(value) {
    document.getElementById('text').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('text').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('text').value;
    const result = eval(display);
    document.getElementById('text').value = result;
  }