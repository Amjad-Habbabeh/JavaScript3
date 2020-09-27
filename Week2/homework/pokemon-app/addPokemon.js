function addPokemonToDom() {
  const selector = document.querySelector('select');
  const img = document.createElement('img');
  const body = document.querySelector('body');

  const index = selector.value;
  let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      img.src = data.sprites.front_default;
      img.style.width = '20vw';
      body.append(img);
    })
    .catch(err => console.error(err));
}
