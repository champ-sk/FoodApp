import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Check whether our contact page is loaded or not ", () => {
  render(<Contact />);

  //Querying
  const heading = screen.getByRole("heading");
  
  //Assertion
  expect(heading).toBeInTheDocument();
});
