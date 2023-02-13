import { render, screen } from "@testing-library/react";
import { Skills } from "./skill";

describe("Skills", () => {
  const skills = ["javascript", "go", "python"];

  test("render correctly", () => {
    render(<Skills skills={skills}></Skills>);
    const listElements = screen.getByRole("list");
    expect(listElements).toBeInTheDocument();
  });

  test("render a list of all the skills", () => {
    render(<Skills skills={skills}></Skills>);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });

  test("render login button", () => {
    render(<Skills skills={skills}></Skills>);
    const loginButton = screen.getByRole("button", { name: "login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("render start learning button", () => {
    render(<Skills skills={skills}></Skills>);
    const loginButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(loginButton).not.toBeInTheDocument();
  });

  test("start running button is eventually displayed", async () => {
    render(<Skills skills={skills}></Skills>);
    const loginButton = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(loginButton).toBeInTheDocument();
  });
});
