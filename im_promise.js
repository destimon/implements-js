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

module.exports = im_Promise;