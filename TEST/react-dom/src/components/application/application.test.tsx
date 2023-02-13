import { render, screen } from "@testing-library/react";
import { Appilcation } from "./application";
describe("Application", () => {
  test("render correctly", () => {
    render(<Appilcation />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const secrtionHeading = screen.getByRole("heading", {
      name: "section1",
      level: 2,
    });
    expect(secrtionHeading).toBeInTheDocument();

    const praghraphElement = screen.getByText("all fields are mandatory");
    expect(praghraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameLabelElement).toBeInTheDocument();

    const namePlaceHolder = screen.getByPlaceholderText("fullName");
    expect(namePlaceHolder).toBeInTheDocument();

    const nameValue = screen.getByDisplayValue("theo");
    expect(nameValue).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termLabelElement = screen.getByLabelText(
      "I agreed to the terms and conditions"
    );

    expect(termLabelElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
