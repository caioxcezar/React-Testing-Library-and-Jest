const UserList = ({ users }) => (
  <table border={1}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody data-testid="users">
      {users.map(({ name, email }) => {
        return (
          <tr key={name}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default UserList;
