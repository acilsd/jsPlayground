'use strict';

class Observable {
  constructor(src) {
    this.src = src.split('');
    this.result = this.src;
  }
  subscribe(next) {
    for (let item of this.result) {
      next(item);
    }
  }
  filter(cb) {
    this.result = this.result.filter(cb);
    return this;
  }
  map(cb) {
    this.result = this.result.map(cb);
    return this;
  }
}

new Observable('String')
    .map(letter => letter.toUppercase())
    .filter(letter => letter === 'o')
    .subscribe(letter => console.log(letter));
