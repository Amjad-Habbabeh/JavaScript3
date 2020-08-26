// Exercise 3: Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes a HTTP Request to https://dog.ceo/api/breeds/image/random. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// Create an index.html file that will display your random image
// Add 2 <button> and 1 <ul> element, either in the HTML or through JavaScript
// Write two versions for the button functionality: one with XMLHttpRequest, and the other with axios
// When any one of the 2 buttons is clicked it should make a HTTP Request to https://dog.ceo/api/breeds/image/random
// After receiving the data, append to the <ul> a <li> that contains an <img> element with the dog image
// Incorporate error handling: log to the console the error message

const but1 = document.getElementById('but-1');
const but2 = document.getElementById('but-2');
const ul = document.querySelector('ul');
const li = document.createElement('li');
but1.addEventListener('click', makeHttpRequestWithXMLHttpRequest);
but2.addEventListener('click', makeHttpRequestWithAxios);

function makeHttpRequestWithXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  const url = ' https://dog.ceo/api/breeds/image/random';
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      li.innerHTML = `<img src=${JSON.parse(xhr.responseText).message}>`;
      ul.appendChild(li);
    }
  };
  xhr.onerror = function () {
    console.log('request error');
  };
  xhr.send();
}

// function with axios:
function makeHttpRequestWithAxios() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      li.innerHTML = `<img src=${res.data.message}>`;
      ul.appendChild(li);
    })
    .catch((err) => console.log(err));
}
