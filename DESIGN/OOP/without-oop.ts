{
  type CoffeeCup = {
    shots: number;
    hasMike: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("NOT enough coffee beans!");
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMike: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

  const coffee = makeCoffee(2);
  console.log(coffee);
}
