// ---------function to Populate the <select> with options from array:
// Adds an 'option' element to htmlEl for each item in arr. Each item is expected to have the name property which will be the name of the option.
function addOptions(arr, htmlEl) {
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option = document.createElement('option');
    option.innerText = arr[i].name;
    htmlEl.append(option);
  }
}
