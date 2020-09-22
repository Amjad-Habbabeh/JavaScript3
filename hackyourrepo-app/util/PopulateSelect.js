// ---------function to Populate the <select> with options from array:
function addOptions(arr, htmlEl) {
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option = document.createElement('option');
    option.innerText = arr[i].name;
    htmlEl.append(option);
  }
}
