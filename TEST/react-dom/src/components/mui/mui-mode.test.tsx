import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../provider/app-provider";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProvider,
    });
    const headElement = screen.getByRole("heading");
    expect(headElement).toHaveTextContent("dark mode");
  });
});
