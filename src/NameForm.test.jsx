import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NameForm from "./NameForm";
import userEvent from "@testing-library/user-event";

describe("NameForm component", () => {
  it("should call onSubmit when the value is valid for name", async () => {
    const onSubmitMock = vi.fn();
    render(<NameForm onSubmit={onSubmitMock} />);
    const user = userEvent.setup();
    const name = "Aidas";
    const nameInput = screen.getByLabelText("Name");
    const submitBtn = screen.getByText("Submit");
    // insert no text into input form
    await user.clear(nameInput);
    await user.click(submitBtn);
    // function should not be called because name is empty
    expect(onSubmitMock).not.toHaveBeenCalled();

    await user.type(nameInput, name);
    await user.click(submitBtn);
    expect(onSubmitMock).toHaveBeenCalledOnce();
    expect(onSubmitMock).toHaveBeenCalledWith(name);
  });
});
