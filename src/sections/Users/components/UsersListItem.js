function UsersListItem({ user }) {
  // props: user
  return (
    <li className={user.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img src={user.picture.medium} alt={user.name.first} />
      <h3>{user.name.title + " " + user.name.first + " " + user.name.last}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;
