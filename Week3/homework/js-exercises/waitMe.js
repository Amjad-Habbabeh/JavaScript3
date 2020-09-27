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

// makeAllCaps(arrayOfWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// const makeAllCaps = async array => {
//   try {
//     let capsArray = await array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         throw 'Error: Not all items in the array are strings!';
//       }
//     });
//     console.log(capsArray);
//   } catch (error) {
//     console.log(error);
//   }
// };
// makeAllCaps(arrayOfWords);
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async array => {
  let capsArray = await array.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    } else {
      throw 'Error: Not all items in the array are strings!';
    }
  });
  console.log(capsArray);
};
try {
  makeAllCaps(arrayOfWords);
} catch (error) {
  console.log(error);
}
