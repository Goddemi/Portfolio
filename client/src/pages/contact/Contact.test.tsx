import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("Contact page renders correctly", () => {
  render(<Contact />);
  expect(screen.getByText("goddemi0124@gmail.com")).toBeInTheDocument();
});
