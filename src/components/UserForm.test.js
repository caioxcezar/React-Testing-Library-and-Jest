import { findByText, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  render(<UserForm onUserAdd={() => null} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  user.click(nameInput);
  act(() => user.keyboard("a name"));
  user.click(emailInput);
  act(() => user.keyboard("email@mail.com"));

  const button = screen.getByRole("button");
  act(() => user.click(button));

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "a name",
    email: "email@mail.com",
  });
});

test("clean form after send", async () => {
  render(<UserForm onUserAdd={() => null} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  act(() => user.keyboard("a name"));
  user.click(emailInput);
  act(() => user.keyboard("email@mail.com"));
  act(() => user.click(button));

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
