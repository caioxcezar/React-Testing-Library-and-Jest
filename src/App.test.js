import { act, render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("Can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  act(() => {
    user.click(nameInput);
    user.keyboard("a name");
    user.click(emailInput);
    user.keyboard("email@mail.com");
    user.click(button);
  });

  const name = screen.getByRole("cell", { name: "a name" });
  const email = screen.getByRole("cell", { name: "email@mail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
