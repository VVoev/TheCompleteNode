var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) === 'number' && typeof (b) === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500)
    })
}

asyncAdd(5, 10)
    .then((res) => {
        console.log('Result', res);
        return asyncAdd(res, 5)
    })
    .then((newRes) => {
        console.log('Result', newRes);
    })
    .catch((e) => {
        console.log('Error', e)
    })

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey it works');
//         reject('Unable to fullfill the promise');
//     }, 2500);
// })

// somePromise.then((message) => {
//     console.log('Success:', message);
// }).catch((e) => {
//     console.log('Error', e);
// })