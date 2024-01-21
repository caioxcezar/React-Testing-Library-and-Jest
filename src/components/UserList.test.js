import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    { name: "name numero um", email: "um@mail.com" },
    { name: "name numero dois", email: "dois@mail.com" },
  ];

  render(<UserList users={users} />);

  return { users };
};

test("render one row per user", () => {
  //   const { container } = render(<UserList users={users} />);
  //   const rows = container.querySelectorAll("tbody tr");

  renderComponent();

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
