{
  type CoffeeCup = {
    shots: number;
    hasMike: boolean;
  };

  class CoffeeMaker {
    coffeeBeans: number = 0; // instance level
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("NOT enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMike: false,
      };
    }
  }

  const coffee = new CoffeeMaker(32);
  console.log(coffee);
}
