class im_Promise {

  constructor(callback) {
    this.state = 'pending';
    this.length = 1;
    callback(this.resolve, this.reject);
  }

  resolve = (result) => {
    if (this.state == 'pending') {
      this.data = result;
      this.state = 'fulfilled';
    }
  }

  reject = (result) => {
    if (this.state == 'pending') {
      this.err = result;
      this.state = 'rejected';
    }
  }

  then = (callback) => {
    if (this.state == 'fulfilled') {
      callback(this.data);
    }
    return this;
  }

  catch = (callback) => {
    if (this.state == 'rejected') {
      callback(this.err);
    }
    return this;
  }
}

(async () => {
  let prom = new im_Promise(function(resolve, reject) {
    console.log('out1');
    reject('error1');
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
  
  let prom2 = new Promise(function(resolve, reject) {
    console.log('out2');
    reject('error2');
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
})();

