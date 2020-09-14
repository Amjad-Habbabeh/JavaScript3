// // Exercise A
// function getData(url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error));
// }

// getData('https://randomfox.ca/floof/');

async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
getData('https://randomfox.ca/floof/');

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

// const makeAllCaps = array => {
//   return new Promise((resolve, reject) => {
//     let capsArray = array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         reject('Error: Not all items in the array are strings!');
//       }
//     });
//     resolve(capsArray);
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

const makeAllCaps = async array => {
  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        throw 'Error: Not all items in the array are strings!';
      }
    });
    console.log(capsArray);
  } catch (error) {
    console.log(error);
  }
};
makeAllCaps(arrayOfWords);
