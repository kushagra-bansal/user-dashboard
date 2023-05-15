import React from 'react';
import { Badge } from '@windmill/react-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faTrash, faPen, faCircle } from '@fortawesome/free-solid-svg-icons'

function StatusBadge({ badgeFlag }) {
  let badgeType = "neutral";
  if(badgeFlag === "Active"){
    badgeType = "success";
  }
  return <Badge type={`${badgeType}`} className='items-center text-left rounded-full px-1'>
    <span className="text-2xl mb-1">&#x2022;</span>
    <span className="text-sm ml-1">{badgeFlag}</span>
  </Badge>;
}

export default StatusBadge;