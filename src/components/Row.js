import React from "react";
import { TableCell, TableRow, Avatar } from "@windmill/react-ui";
import Badge from '../components/Badge'
import UpdateButtons from '../components/UpdateButtons';


function Row(props) {

  function deleteUser(){
    props.deleteUserFunc(props.ind)
  }

  function editUser(){
    props.editUserFunc(props.ind)
  }

  return (
    <TableRow>
      <TableCell className="w-3/5">
        <div className="flex items-center text-sm">
          <Avatar
            size="large"
            className="hidden mr-3 md:block"
            src={props.currentUser.avatar}
            alt="props.currentUser image"
          />
          <div className="flex justify-start flex-col">
            <p className="font-semibold text-left">{props.currentUser.name}</p>
            <p className="text-xs text-gray-500">{props.currentUser.email}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className=" text-left">
        <Badge className="" badgeFlag={props.currentUser.status}></Badge>
      </TableCell>
      <TableCell className="text-left">
        <span className=" text-gray-500">{props.currentUser.role}</span>
      </TableCell>
      <TableCell>
        <div className="flex flex-col align-middle">
          <span className="text-left">{props.currentUser.lastlogin.slice(0, 12)}</span>
          <span className="text-sm text-gray-500 text-left">
            {props.currentUser.lastlogin.slice(13)}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <UpdateButtons curUser={props.currentUser} ind={props.ind} onDelete={deleteUser} onEdit={props.editUserFunc}></UpdateButtons>
      </TableCell>
    </TableRow>
  );
}

export default Row;
