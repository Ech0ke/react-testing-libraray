import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  it("should render initial count", () => {
    render(<Counter initialCount={3} />);
    screen.debug();
    // test if correct initial count is visible on the page by matching passed value
    // expect(screen.getByText("3")).toBeInTheDocument();

    // test if correct initial count is visible on the page by matching test id
    // avoid this approach unless you must to use it (use getByText)
    expect(screen.getByTestId("count")).toBeInTheDocument();
  });

  it("should increment/decrement count when clicking the +/- buttons", async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    // get buttons from the DOM
    const minusBtn = screen.getByText("-");
    const plusBtn = screen.getByText("+");

    // simulate the click on the plus button in the DOM
    await user.click(plusBtn);
    expect(screen.getByText("1")).toBeInTheDocument();
    // simulate the click on the minus button in the DOM
    await user.click(minusBtn);
    expect(screen.getByText("0")).toBeInTheDocument();
    // query will return null if the element is not found in the dom
    await user.click(plusBtn);
    expect(screen.queryByText("0")).not.toBeInTheDocument();
    // use find for elements with animation where you need to wait for  the animation to finish, and then test
    // works same as get - if it can't find an element will throw an error, where query will return null
    await user.click(plusBtn);
    // expect(await screen.findByText("1")).not.toBeInTheDocument();
    expect(await screen.findByText("2")).toBeInTheDocument();
  });
});
