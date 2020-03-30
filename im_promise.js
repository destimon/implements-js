class im_Promise {

    constructor(callback) {
        this.data = '';
        callback(this.resolve, this.reject);
    }

    resolve = (result) => {
        this.data = result;
    }

    reject = (result) => {
        console.log('reject');
    }

    then = (callback) => {
        callback(this.data);
    }
}

let prom = new im_Promise(function(resolve, reject) {
    console.log('out');
    resolve('data');
})
.then(data => {
    console.log(data);
})

console.log('')

let prom2 = new Promise(function(resolve, reject) {
    console.log('out');
    resolve('data');
})
.then(data => {
    console.log(data);
})