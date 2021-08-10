import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders without crashing", function () {
  render(<Carousel />);
})

it("matches snapshot", function () {
  const { container } = render(<Carousel />);
  expect(container).toMatchSnapshot();
})

it("works when you click on the right arrow", function () {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
});

it("left arrow moves back to previous image", function () {
  const { container } = render(<Carousel />);
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  const leftArrow = container.querySelector(".fa-chevron-circle-left")

  //need move to 2nd image first before can test left arrow
  fireEvent.click(rightArrow);

  //expect 2nd image to show and not the first image
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  //expect the 1st image to show and not the 2nd or 3rd image
  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
});

it("left arrow missing on first image", function () {
  const { container } = render(<Carousel />);
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  const leftArrow = container.querySelector(".fa-chevron-circle-left")

  // expect(container.querySelector("i")).not.toHaveClass("fa-chevron-circle-left");
  expect(leftArrow).toHaveClass("hidden");
  expect(rightArrow).toBeInTheDocument();
});

it("right arrow missing on last image", function () {
  const { container } = render(<Carousel />);
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  const leftArrow = container.querySelector(".fa-chevron-circle-left");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).toHaveClass("hidden");
});


