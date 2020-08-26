// Exercise 1: Who do we have here?

// Wouldn't it cool to make a new friend with just the click of a button?

// Write a function that makes a HTTP Request to https://www.randomuser.me/api

// Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
// Log the received data to the console
// Incorporate error handling: log to the console the error message

// function with XMLHttpRequest:

function makeHttpRequestWithXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  const url = 'https://www.randomuser.me/api';
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.onerror = function () {
    console.log('request error');
  };
  xhr.send();
}
makeHttpRequestWithXMLHttpRequest();

// function with axios:
function makeHttpRequestWithAxios() {
  axios
    .get('https://www.randomuser.me/api')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
makeHttpRequestWithAxios();
