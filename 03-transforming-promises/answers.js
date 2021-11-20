/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
      .then((val) => {
        const tval = transformer(val);
        resolve(tval);
      })
      .catch(e => reject(e));
  });
}

// mapPromise(Promise.resolve(3), (val) => {
//   // eslint-disable-next-line no-console
//   return val * 2;
// })
//   .then(tval => {
//   // eslint-disable-next-line no-console\
//     console.log("Result: ")
//     console.log(tval);
//   }).catch(e => console.log(e));
/**
 * 
 * EXERCISE 2
 *
 * If the input promise resolves with a number, the output promise resolves with the square of that number.
 * If the input promise resolves with a string that we can turn into a number (like "1234"), the output promise resolves with the square of that number (1522756 in this example)
 * If the input promise resolves with a string that we cannot turn into a number (like "asdf"), then we reject with a message like "Cannot convert 'asdf' to a number!"
 * If the input promise rejects with an error, the output promise rejects with the same error
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then(num => {
      if (isNaN(num)) {
        // return Promise.reject(`Cannot convert '${num}' to a number!`); exercise 2
        return Promise.resolve(0); // exercise 3
      }
      return num * num;
    })
    .catch(e => Promise.reject(e));
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(numberPromise){
  return squarePromise(numberPromise)
    .catch(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};