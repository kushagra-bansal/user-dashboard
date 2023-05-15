import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import EditUser from './EditUser'
import Confirmation from "./Confirmation";

function UpdateButtons(props) {

  const [modal, setModal] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  const toggleDelModal = () => {
    setDelModal(!delModal)
  }
  // handleClick
  function handleKeyUp(event) {
    if(event.key === "Escape" ) toggleModal();
  }

  function handleClick() {
    props.onDelete();
  }

  function handleEditClick(){
    // props.onEdit(props.ind);
    toggleModal();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
      <i className="cursor-pointer hover:text-blue-500">
        <FontAwesomeIcon
          onClick={toggleDelModal}
          icon={faTrashCan}
        />
      </i>
      <i className="cursor-pointer hover:text-blue-500">
        <FontAwesomeIcon
            className="ml-6"
            onClick={handleEditClick}
            icon={faPen}
        />
      </i>
      </div>
      {delModal && <Confirmation toggleDel={toggleDelModal} handleDelete={props.onDelete}></Confirmation>}
      {modal && <EditUser keyUp={handleKeyUp} userInd={props.ind} className="relative" curUser={props.curUser} editUser={props.onEdit} toggle={toggleModal} onClick={toggleModal}></EditUser>}
    </div>
  );
}

export default UpdateButtons;
