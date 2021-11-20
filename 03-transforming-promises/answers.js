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
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(/* IMPLEMENT ME! */);
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