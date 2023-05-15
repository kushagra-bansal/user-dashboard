import React, { useState } from "react";

function CreateUser(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    status: "",
    role: "",
    lastLogin: "",
    avatar: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function toggle() {
    props.toggle();
  }

  function addUser(event) {
    props.newUser(user);

    setUser({
      name: "",
      email: "",
      status: "",
      role: "",
      lastLogin: "",
      avatar: "",
    });
    toggle();

    // event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="flex items-center justify-center">
      <div className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-50"></div>
      <form onSubmit={addUser} className="flex p-4 space-x-4 z-20">
        <input
          id="nameID"
          className="px-2 rounded-lg border border-gray-600"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Name"
        />
        <input
          id="emailID"
          className="px-2 rounded-lg border border-gray-600"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="Email"
        />
        <input
          id="roleID"
          className="px-2 rounded-lg border border-gray-600"
          name="role"
          onChange={handleChange}
          value={user.role}
          placeholder="Role"
        />
        <input
          id="avatarID"
          className="px-2 rounded-lg border border-gray-600"
          name="avatar"
          onChange={handleChange}
          value={user.avatar}
          placeholder="Enter your dp URL!"
        />
        <button
          type="submit"
          className="text-white bg-blue-600 px-4 py-2 rounded-lg"
        >
          &#43; Add
        </button>
      </form>
      <button
        className="z-20 text-lg px-4 py-2 bg-gray-200 rounded-lg"
        onClick={toggle}
      >
        &#10060; Close
      </button>
    </div>
  );
}

export default CreateUser;
