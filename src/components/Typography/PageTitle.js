import React, { useState } from "react";
import { Badge } from "@windmill/react-ui";
import Card from '@mui/material/Card'
import CreateUser from '../CreateUser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

function PageTitle(props) {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  function downloadCSV(){
    const csvData = "Name,Email,Status,Role,Last Login,Profile Picture\n" + props.userInstance.map(user => `${user.name},${user.email},${user.status},${user.role},${user.lastlogin},${user.avatar}`).join("\n");
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
    
  return (
    <div>
    <div className="flex items-center justify-between pt-4">
      <div className="flex flex-col ml-6">
        <div className="flex items-center align-middle">
          <span className="my-1 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Users
          </span>
          <Badge className="mx-2" type="success">
            {props.userSize} users
          </Badge>
        </div>
        <span className="flex text-gray-500">
          Manage your team members and their account permissions here.
        </span>
      </div>
      <div className="flex items-center mx-6">
      <button onClick={downloadCSV} className=" border border-gray-300 px-4 py-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faCloudArrowDown} />
        <span className="ml-2">Download CSV</span>
      </button>
      <button className=" bg-blue-500 px-4 py-2 text-white rounded-lg" onClick={toggleModal}>&#43; Add User</button>
      </div>
    </div>

    {modal && <CreateUser newUser={props.addUser} toggle={toggleModal} onClick={toggleModal}></CreateUser>}
    </div>

  );
}

export default PageTitle;
