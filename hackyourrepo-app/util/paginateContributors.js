// this function will check an array it has more than the certin numbers of element (raw_per_page) the function will slice the array to show in the wraper just that certin number of elements...and depending on the array length and (raw_per_page) the function will count the needed pages and set that in variable(page_count).. and when the page_count more than one it add the paginations buttons

function paginateContributors(arr, wrapper, raw_per_page, page) {
  page--;
  const start = raw_per_page * page;
  const end = start + raw_per_page;
  const paginatedItems = arr.slice(start, end);
  const page_count = Math.ceil(arr.length / raw_per_page);

  for (item of paginatedItems) {
    const div3 = creatElementAndAppend(wrapper, 'div', {
      class: 'person card reset',
    });
    creatElementAndAppend(div3, 'img', {
      width: '50px',
      src: item.avatar_url,
    });
    creatElementAndAppend(div3, 'a', {
      href: item.html_url,
      text: `${item.login}`,
    });

    creatElementAndAppend(div3, 'div', {
      class: 'badge',
      text: `${item.contributions}`,
    });
  }

  if (page_count > 1) {
    let but_bar = creatElementAndAppend(wrapper, 'div', {
      class: 'card bar reset',
    });
    for (let i = 1; i < page_count + 1; i++) {
      let button = creatElementAndAppend(but_bar, 'button', {
        class: 'button',
      });
      button.innerText = i;
      if (page + 1 === i) {
        button.classList.add('active');
      }
    }

    let buttons = document.querySelectorAll('.button');
    buttons.forEach(but => {
      but.addEventListener('click', () => {
        current_page = but.innerText;
        showDetails(resultArray);
        but.classList.add('active');
      });
    });

    const next = document.createElement('button');
    const previous = document.createElement('button');
    next.classList.add('button');
    next.innerText = '=>';
    previous.classList.add('button');
    previous.innerText = '<=';
    but_bar.insertBefore(previous, but_bar.firstChild);
    but_bar.insertBefore(next, but_bar.lastChild.nextSibling);
    next.addEventListener('click', current_page => {
      if (current_page !== but_bar.lastChild.innerText) {
        current_page + 1;
      }
      console.log('err');
      console.log(but_bar.lastChild.innerText);
    });
  }
}
