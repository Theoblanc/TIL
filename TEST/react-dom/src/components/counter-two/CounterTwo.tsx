type CounterProps = {
  counter: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

export const CounterTwo = (props: CounterProps) => {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{props.counter}</p>
      {props?.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props?.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
