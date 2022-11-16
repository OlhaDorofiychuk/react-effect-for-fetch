import UsersListItem from "./UsersListItem";

function UsersList({ users }) {
  // props: users
  return (
    <ul className="users-list">
      {users.map((user, index) => {
        return (
          // props: user
          <UsersListItem user={user} key={index} />
        );
      })}
    </ul>
  );
}

export default UsersList;
