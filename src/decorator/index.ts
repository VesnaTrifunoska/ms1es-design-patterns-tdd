/**
 * Decorator is a Conceptual pattern that allows adding new behaviors to
 * objects dynamically by placing them inside special wrapper objects.
 *
 * Using decorators you can wrap objects countless number of times since both target
 * objects and decorators follow the same interface.
 * The resulting object will get a stacking behavior of all wrappers.
 */
export interface Component {
  operation(): string;
}