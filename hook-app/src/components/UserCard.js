import React from "react";

function UserCard(props) {
  //   console.log(props.user);

  const { name, email, website } = props.user;
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}

export default UserCard;
