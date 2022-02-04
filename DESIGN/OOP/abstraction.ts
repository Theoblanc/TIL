{
  type CoffeeCup = {
    shots: number;
    hasMike: boolean;
  };

  // public = 공개적
  // private = 비접근
  // protected = 외부에서 접근 불가 but 자식 클래스에서 자식에서 접근 가능

  //   interface 추상화

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachin implements CoffeeMaker {
    private coffeeBeans: number = 0; // instance level
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMachin(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error("value for beans should be greater than 0");
      }
      this.coffeeBeans = this.coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachin.BEANS_GRAMM_PER_SHOT) {
        throw new Error("NOT enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMachin.BEANS_GRAMM_PER_SHOT;
    }

    private pareheat() {
      console.log(`heating up....`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);

      return {
        shots,
        hasMike: false,
      };
    }

    clean() {
      console.log("clean in the machin");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.pareheat();
      return this.extract(shots);
    }
  }

  console.log(maker.makeCoffee(2));
}
