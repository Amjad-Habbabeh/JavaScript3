function fetchData() {
  const selector = document.querySelector('select');

  fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(res => res.json())
    .then(data => {
      const insertOption = data.results.map((element, ind) => {
        const option = document.createElement('option');
        option.innerText = element.name;
        option.value = ind + 1;
        selector.append(option);
      });
      return insertOption;
    })
    .catch(err => console.error(err));
}
