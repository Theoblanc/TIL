import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after click Icrement button", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });

    fireEvent.click(buttonElement);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await fireEvent.change(amountInput, { target: { value: "10" } });
    expect(amountInput).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });

    await fireEvent.click(setButtonElement);
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toHaveTextContent("10");
  });

  test("elemens are focused in the right order", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.tab();
    expect(incrementButtonElement).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
