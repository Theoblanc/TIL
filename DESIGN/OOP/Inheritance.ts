{
  type CoffeeCup = {
    shots: number;
    hasMike: boolean;
  };

  // public = 공개적
  // private = 비접근
  // protected = 외부에서 접근 불가 but 자식 클래스에서 자식에서 접근 가능

  class CoffeeMaker {
    private coffeeBeans: number = 0; // instance level
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level

    protected constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error("value for beans should be greater than 0");
      }
      this.coffeeBeans = this.coffeeBeans;
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

