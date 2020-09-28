'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

// global variable to be use in all the functoins in js files
let resultArray = [];
let contributorsArray = [];
let current_page = 1;
let raws = 5;

// the main function that excute all functions:
async function excuteAll() {
  // adding the DOM elements:
  const body = document.querySelector('body');
  const main = creatElementAndAppend(body, 'main');
  const section1 = creatElementAndAppend(main, 'section', {
    id: 'title',
    class: 'container',
  });

  const h2 = creatElementAndAppend(section1, 'h2', {
    text: 'HYF Repositories',
  });
  const selector = creatElementAndAppend(section1, 'select', {
    id: 'selection',
  });
  const section2 = creatElementAndAppend(main, 'section', {
    class: 'main container',
  });

  const div1 = creatElementAndAppend(section2, 'div', {
    id: 'info',
    class: 'card',
  });

  const div2 = creatElementAndAppend(section2, 'div', { id: 'list' });
  const table = creatElementAndAppend(div1, 'table');
  const tr1 = creatElementAndAppend(table, 'tr');
  const tr2 = creatElementAndAppend(table, 'tr');
  const tr3 = creatElementAndAppend(table, 'tr');
  const tr4 = creatElementAndAppend(table, 'tr');
  creatElementAndAppend(tr1, 'td', { text: 'Name :' });
  creatElementAndAppend(tr1, 'td', { id: 'repo' });
  creatElementAndAppend(tr2, 'td', { text: 'Description:' });
  creatElementAndAppend(tr2, 'td', { id: 'desc' });
  creatElementAndAppend(tr3, 'td', { text: 'Forks:' });
  creatElementAndAppend(tr3, 'td', { id: 'fork' });
  creatElementAndAppend(tr4, 'td', { text: 'Updated:' });
  creatElementAndAppend(tr4, 'td', { id: 'update' });
  creatElementAndAppend(div2, 'p', {
    text: 'Contributors',
    class: 'card',
  });

  creatElementAndAppend(body, 'footer', {
    text: 'HYF Repositories',
    class: 'footer',
  });

  //  populate the select:
  const repos = await populateOptions(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  );
  // push the fetch data array to the global array (resultArray)
  repos.forEach(element => resultArray.push(element));
  // sort the array elements alphabitcaly
  resultArray.sort((a, b) => a.name.localeCompare(b.name));
  // add the elements as options to the select element
  addOptions(resultArray, selector);
  // show the results in the dom
  showDetails(resultArray);
  // event that fire when the option change so to show the results
  selector.addEventListener('change', showDetails.bind(null, resultArray));
  // event that fire when the option change to check if the cuurent_page is the first one always

  selector.addEventListener('change', changeCurrentPage);
}
window.onload = () => excuteAll();
