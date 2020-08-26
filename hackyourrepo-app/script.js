'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const select = document.getElementById('selection');
let option = document.createElement('option');
const repo = document.getElementById('repo');
const desc = document.getElementById('desc');
const fork = document.getElementById('fork');
const update = document.getElementById('update');

placeholderRepos.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

function addOption(arr) {
  for (let i = 0; i < arr.length; i++) {
    option = document.createElement('option');
    option.innerText = arr[i].name;
    select.append(option);
  }
}
addOption(placeholderRepos);

select.addEventListener('change', showDeateals);

function showDeateals() {
  for (let el of placeholderRepos)
    if (select.value === el.name) {
      repo.innerText = el.name;
      desc.innerText = el.description;
      fork.innerText = el.forks;
      update.innerText = el.updated;
    }
}
