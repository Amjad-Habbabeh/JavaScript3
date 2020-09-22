'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

// the main function that excute all functions:
let resultArray = [];
let contributorsArray = [];
let current_page = 1;
let raws = 5;

async function excuteAll() {
  const body = document.querySelector('body');
  // adding the DOM elements:
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
  const td_description = creatElementAndAppend(tr2, 'td', {
    text: 'Description:',
  });
  const desc = creatElementAndAppend(tr2, 'td', { id: 'desc' });
  const td_forks = creatElementAndAppend(tr3, 'td', { text: 'Forks:' });
  const fork = creatElementAndAppend(tr3, 'td', { id: 'fork' });
  const td_updated = creatElementAndAppend(tr4, 'td', { text: 'Updated:' });
  const update = creatElementAndAppend(tr4, 'td', { id: 'update' });
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

  repos.forEach(element => resultArray.push(element));
  resultArray.sort((a, b) => a.name.localeCompare(b.name));
  addOptions(resultArray, selector);
  selector.addEventListener('change', showDetails.bind(null, resultArray));
  selector.addEventListener('change', changeCurrentPage);
  // console.log(repos);
}
window.onload = () => excuteAll();
