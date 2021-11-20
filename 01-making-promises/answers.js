
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  return Promise.resolve(3);
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<void,string>}
 */
function makePromiseRejectWithBoo(){
  return Promise.reject('Boo!');
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    (itShouldResolve) ? resolve() : reject();

    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
  /* Return a promise that resolves with the value after delayInMs */
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};