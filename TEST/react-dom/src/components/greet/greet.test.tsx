// Greet should the text Hello and if the name is passed in to components
// it should render hello by the name

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    const mock_name = "TaeHyun Jung";
    render(<Greet name={mock_name}></Greet>);
    const textElement = screen.getByText(`Hello ${mock_name}`);
    expect(textElement).toBeInTheDocument();
  });
});
