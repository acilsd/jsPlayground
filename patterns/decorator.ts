abstract class SomeAbstractClass {
  public someString: string;
  public getString(): string {
    return this.someString;
  }

  public abstract log(): string;
}

class SomeClass extends SomeAbstractClass {
  public someString = 'some string';

  public log(): string {
    console.log('some logic');
    return this.someString;
  }
}

class AnotherClass extends SomeAbstractClass {
  public someString = 'another string';

  public log(): string {
    console.log('another logic');
    return this.someString;
  }
}

abstract class Decorator extends SomeAbstractClass {
  decoratedClass: SomeAbstractClass;
  public abstract getString(): string;
  public abstract log(): string;
}

class DecoratedClass extends Decorator {
  constructor(public decoratedClass: SomeAbstractClass) {
    super();
  }
  public getString(): string {
    return this.decoratedClass.getString() + 'something else';
  }
  public log(): string {
    return this.decoratedClass.log() + 'and something else';
  }
}

let myClass = new SomeClass();
myClass = new DecoratedClass(myClass);
