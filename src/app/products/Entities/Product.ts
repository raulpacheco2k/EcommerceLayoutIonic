export class Product {
  protected id: number;
  protected name: string;
  protected value: number;
  protected quantity: number;

  setId(id: number) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setValue(value: number) {
    this.value = value;
    return this;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getQuantity() {
    return this.quantity;
  }

  getTotal() {
    return (this.value * this.quantity);
  }
}
