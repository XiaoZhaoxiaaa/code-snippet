const all = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (res) => {
          count++;
          result[i] = res;
          if (count === promises.length) {
            return resolve(result);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
};

const race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promise[i]).then(
        (res) => {
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
};
