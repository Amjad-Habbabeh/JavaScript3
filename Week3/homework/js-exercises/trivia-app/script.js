// creat the dom
const body = document.querySelector('body');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const ul = document.createElement('ul');

h1.innerText = "Let's play some Trivia!";
p.innerText =
  'Try your best to figure out the answer.If you really have no clue, click on the question to reveal the answer...';

body.append(h1, p, ul);

async function fetchQuestionsRandomly() {
  const url = 'https://opentdb.com/api.php?amount=5';
  try {
    const res1 = await fetch(url);
    const data = await res1.json();
    data.results.forEach(element => {
      const li = document.createElement('li');
      li.innerText = decodeHtml(element.question);
      ul.append(li);
      let clicked = false;
      li.addEventListener('click', () => {
        clicked = !clicked;
        if (clicked) {
          const text = document.createElement('p');
          text.innerText = decodeHtml(element.correct_answer);
          li.append(text);
        } else {
          li.innerText = decodeHtml(element.question);
        }
      });
    });
  } catch (err) {
    const h2 = document.createElement('h2');
    h2.innerText = err;
    body.insertBefore(h2, p);
  }
}
fetchQuestionsRandomly();

function decodeHtml(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}
