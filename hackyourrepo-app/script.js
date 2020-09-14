'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
// I build function for creating dom element:
function creatElementAndAppend(parent, child, optional = {}) {
  const elem = document.createElement(child);
  parent.append(elem);
  Object.entries(optional).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });

  return elem;
}

// ---------function to Populate the <select> with options from array:
function addOption(arr, htmlEl) {
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option = document.createElement('option');
    option.innerText = arr[i].name;
    htmlEl.append(option);
  }
}

// the main function that excute all functions:

function excuteAll() {
  let placeholderRepos = [];
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
  const td_name = creatElementAndAppend(tr1, 'td', { text: 'Name :' });
  const repo = creatElementAndAppend(tr1, 'td', { id: 'repo' });
  const td_description = creatElementAndAppend(tr2, 'td', {
    text: 'Description:',
  });
  const desc = creatElementAndAppend(tr2, 'td', { id: 'desc' });
  const td_forks = creatElementAndAppend(tr3, 'td', { text: 'Forks:' });
  const fork = creatElementAndAppend(tr3, 'td', { id: 'fork' });
  const td_updated = creatElementAndAppend(tr4, 'td', { text: 'Updated:' });
  const update = creatElementAndAppend(tr4, 'td', { id: 'update' });
  const p = creatElementAndAppend(div2, 'p', {
    text: 'Contributors',
    class: 'card',
  });

  const footer = creatElementAndAppend(body, 'footer', {
    text: 'HYF Repositories',
    class: 'footer',
  });

  function populateOptions(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        placeholderRepos = data.map(element => {
          return {
            name: element.name,
            forks: element.forks,
            description: element.description,
            updated: element.updated_at,
            href: element.html_url,
            contributors: element.contributors_url,
          };
        });
        placeholderRepos.sort((a, b) => a.name.localeCompare(b.name));

        addOption(placeholderRepos, selector);
      })
      .catch(err => {
        const errorDiv = creatElementAndAppend(main, 'div', {
          class: 'error container ',
          text: 'Network request failed',
        });
        main.insertBefore(errorDiv, section2);
        const erro = document.querySelector('.error');
        erro.style.display = 'flex';
        setTimeout(() => erro.parentNode.removeChild(erro), 2000);
      });
  }

  // ------------event fire on option change:

  selector.addEventListener('change', showDetails);

  function showDetails() {
    let elem = document.querySelectorAll('.person');
    //--------------------if there are contributors clear the section :---------
    if (elem.length !== 0) {
      elem.forEach(el => el.parentNode.removeChild(el));
      elem = [];
    }

    for (let el of placeholderRepos) // Populate the deatils of the contributors from the placeholder array:
      if (selector.value === el.name) {
        repo.innerHTML = `<a href=${el.href}>${el.name}<a/>`;
        desc.innerText = el.description;
        fork.innerText = el.forks;
        update.innerText = el.updated;

        fetch(el.contributors)
          .then(res => res.json())
          .then(data => {
            data.forEach(element => {
              const div3 = creatElementAndAppend(div2, 'div', {
                class: 'person card',
              });
              const img = creatElementAndAppend(div3, 'img', {
                width: '50px',
                src: element.avatar_url,
              });
              const a = creatElementAndAppend(div3, 'a', {
                href: element.html_url,
                text: `${element.login}`,
              });

              const div4 = creatElementAndAppend(div3, 'div', {
                class: 'badge',
                text: `${element.contributions}`,
              });
            });
          })
          .catch(err => {
            const errorDiv = creatElementAndAppend(main, 'div', {
              class: 'error container ',
              text: 'Network request failed',
            });
            main.insertBefore(errorDiv, section2);
            const erro = document.querySelector('.error');
            erro.style.display = 'flex';
            setTimeout(() => erro.parentNode.removeChild(erro), 2000);
          });
      }
  }

  populateOptions(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  );
}
window.onload = () => excuteAll();
