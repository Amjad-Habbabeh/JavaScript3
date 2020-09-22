function showDetails(res) {
  let elem = document.querySelectorAll('.reset ');
  let repo = document.getElementById('repo');
  let desc = document.getElementById('desc');
  let fork = document.getElementById('fork');
  let update = document.getElementById('update');
  const main = document.querySelector('main');
  const section2 = document.querySelector('.main');
  let div2 = document.getElementById('list');
  const selector = document.getElementById('selection');

  //--------------------if there are contributors clear the section :---------

  const remove = el => el.forEach(item => item.remove());

  //
  if (elem.length !== 0) {
    remove(elem);
  }

  // Populate the deatils of the contributors from the placeholder array:
  for (let el of res) {
    if (selector.value === el.name) {
      repo.innerHTML = `<a href=${el.href}>${el.name}<a/>`;
      desc.innerText = el.description;
      fork.innerText = el.forks;
      update.innerText = el.updated;

      fetch(el.contributors)
        .then(res => res.json())
        .then(data => {
          contributorsArray = data;
          // console.log(data);

          paginateContributors(contributorsArray, div2, raws, current_page);
          return contributorsArray;
        })
        .catch(err => {
          console.log(err);
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
}
