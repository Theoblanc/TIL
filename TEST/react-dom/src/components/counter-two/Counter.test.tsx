import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("Counter Two", () => {
  test("render correctly", () => {
    render(<CounterTwo counter={0} />);
    const textElement = screen.getByText("0");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        counter={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
