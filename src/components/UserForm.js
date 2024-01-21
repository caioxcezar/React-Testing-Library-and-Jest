import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });

    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
