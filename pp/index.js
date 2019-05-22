const SingleTon = (function () {
  let instance;

  function SingleTon() {
    if (!instance) {
      instance = this;
    }
    return instance
  }

  return SingleTon
}())

// observer
class Observable {
  observers = []

  send = (data) => {
    this.observers.map((obs) => {
      obs.notify(data)
    })
  }

  addObserver = (observer) => {
    this.observers.push(observer)
  }
}

class Observer {
  cb = null
  constructor(cb = () => console.log('no cb provided')) {
    this.cb = cb;
  }

  notify = (data) => {
    console.log('ya est observer', data)
    this.cb(data)
  }
}

const observable = new Observable()

const observer = new Observer((data) => console.log(data))

observable.addObserver(observer)

observable.send('hello from observable')