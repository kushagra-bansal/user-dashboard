import React from 'react';
import { Badge } from '@windmill/react-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faTrash } from '@fortawesome/free-solid-svg-icons'

function Confirmation(props) {

    function handleDeleteClick(){
        props.handleDelete();
        props.toggleDel();
    }


  return <Badge type={"danger"} onClick={handleDeleteClick} className='items-center text-left rounded-full px-1 mt-1 cursor-pointer'>
    <FontAwesomeIcon
            className="mr-1"
            icon={faTrash}
        />Delete!
  </Badge>;
}

export default Confirmation;