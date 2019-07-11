interface IObservableSubject<T> {
  register(o: IObserver<T>): void;
  unregister(o: IObserver<T>): void;
  notify(): void;
}

interface IObserver<T> {
  update(value: T): void;
}

class ObservableSubject implements IObservableSubject<number> {
  private someNumberVal: number;
  private observers: Array<IObserver<number>> = [];

  public register(o: IObserver<number>): void {
    this.observers.push(o);
  }

  public unregister(o: IObserver<number>): void {
    this.observers.splice(this.observers.indexOf(o), 1);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this.someNumberVal);
    }
  }

  public setVal(val: number) {
    this.someNumberVal = val;
    this.notify();
  }
}

class Observer implements IObserver<number> {
  constructor(private subject: IObservableSubject<number>) {
    this.subject.register(this);
  }

  public update(value: number) {
    console.log('some logic', value);
  }
}

const someObservable = new ObservableSubject();
const someObserver = new Observer(someObservable);

someObservable.setVal(1);
someObservable.setVal(2);
