import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function Hook() {
  //   const [count, setCount] = useState(10);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
    // console.log(users);
  }, [url]);

  //   console.log(users);

  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Click me (-)</button> */}
      <div className="container">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default Hook;
