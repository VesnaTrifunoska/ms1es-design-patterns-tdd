/**
 * Factory method is a creational design pattern which solves the problem of
 * creating product objects without specifying their concrete classes.
 *
 * Factory Method defines a method, which should be used for creating objects instead of direct constructor
 * call (`new` operator). Subclasses can override this method to change the class of objects that will be created.
 */
export abstract class Creator {
  public abstract factoryMethod(): any;

  otherMethod(): void {}
}

export class ConcreteCreator extends Creator {
  public factoryMethod(): any {
    return {};
  }
}

export interface Product {
  operation(): string;
}
