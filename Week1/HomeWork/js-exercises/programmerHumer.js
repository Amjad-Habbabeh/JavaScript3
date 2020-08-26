// Exercise 2: Programmer humor

// Who knew programmers could be funny?

// Write a function that makes a HTTP Request to https://xkcd.now.sh/?comic=latest

//1 Inside the same file write two programs: one with XMLHttpRequest, and the other with axios
//2 Each function should make a HTTP Request to the given endpoint: https://xkcd.now.sh/?comic=latest
//3 Log the received data to the console
//4 Render the img property into an <img> tag in the DOM
//5 Incorporate error handling: log to the console the error message

// function with XMLHttpRequest:

function makeHttpRequestWithXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  const url = ' https://xkcd.now.sh/?comic=latest';
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      let body = document.querySelector('body');
      body.innerHTML = `<img src=${JSON.parse(xhr.responseText).img}>`;
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
    .get(' https://xkcd.now.sh/?comic=latest')
    .then((res) => {
      console.log(res);
      let body = document.querySelector('body');
      body.innerHTML = `<img src=${res.data.img}>`;
    })
    .catch((err) => console.log(err));
}
makeHttpRequestWithAxios();
