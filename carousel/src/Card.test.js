import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card />);
})

it("matches snapshot", function() {
  const { container } = render(<Card caption="test caption"
                                      src="image1"
                                      currNum="1"
                                      totalNum="1"/>);
  expect(container).toMatchSnapshot();
})

it("rendered card has correct info", function() {
  const { container } = render(<Card caption="test caption"
                                      src="image1"
                                      currNum="1"
                                      totalNum="1"/>);
  expect(container.querySelector("div")).toHaveClass("Card");
  expect(container.querySelector("h4")).toHaveTextContent("test caption");
})
