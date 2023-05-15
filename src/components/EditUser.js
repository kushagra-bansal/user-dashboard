import React, { useState } from "react";

function EditUser(props) {
    
  const [user, setUser] = useState({
    name: props.curUser.name,
    role: props.curUser.role,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }));
  };

  function toggle() {
    props.toggle();
  }

  function editUser(event) {
    props.editUser(props.userInd, user);

    toggle();

    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="flex items-center justify-center">
      <div className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-50"></div>
      <form onSubmit={editUser} className="flex p-4 space-x-4 z-20">
        <input
          id="nameID"
          className="px-2 rounded-lg border border-gray-600"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Update Name"
        />
        <input
          id="roleID"
          className="px-2 rounded-lg border border-gray-600"
          name="role"
          onChange={handleChange}
          value={user.role}
          placeholder="Update Role"
        />
        <button
          type="submit"
          className="text-white bg-blue-600 px-4 py-2 rounded-lg"
        >
        &#9998; Edit
        </button>
      </form>
      <button className="z-20 text-lg px-4 py-2 bg-gray-200 rounded-lg" onClick={toggle}>&#10060; Close</button>
    </div>
  );
}

export default EditUser;
