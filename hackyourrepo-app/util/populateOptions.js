async function populateOptions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let arr1 = data.map(element => {
      return {
        name: element.name,
        forks: element.forks,
        description: element.description,
        updated: element.updated_at,
        href: element.html_url,
        contributors: element.contributors_url,
      };
    });
    return arr1;
  } catch (err) {
    console.log(err);
    const main = document.querySelector('main');
    const section2 = document.querySelector('.main');
    const errorDiv = creatElementAndAppend(main, 'div', {
      class: 'error container ',
      text: 'Network request failed',
    });
    main.insertBefore(errorDiv, section2);
    const erro = document.querySelector('.error');
    erro.style.display = 'flex';
    setTimeout(() => erro.parentNode.removeChild(erro), 2000);
  }

  // return arr;
}
