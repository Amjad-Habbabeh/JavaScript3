window.addEventListener('load', main);

function main() {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  const selector = document.createElement('select');
  button.innerText = 'Get Pokemon';
  button.style.maxWidth = '10vw';
  button.style.margin = '1rem';
  selector.style.margin = '1rem';
  selector.style.maxWidth = '10vw';
  body.append(button);
  body.append(selector);
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  button.addEventListener('click', fetchData);

  // function fetchData() {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  //     .then(res => res.json())
  //     .then(data => {
  //       const insertOption = data.results.map((element, ind) => {
  //         const option = document.createElement('option');
  //         option.innerText = element.name;
  //         option.value = ind + 1;
  //         selector.append(option);
  //       });
  //       return insertOption;
  //     })
  //     .catch(err => console.error(err));
  // }

  selector.addEventListener('change', addPokemonToDom);

  // function addPokemonToDom() {
  //   const index = selector.value;
  //   let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       img.src = data.sprites.front_default;
  //       img.style.width = '20vw';
  //       body.append(img);
  //     })
  //     .catch(err => console.error(err));
  // }
}
