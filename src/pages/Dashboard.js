import React, { useState, useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
import Row from "../components/Row";
import response from "../utils/demo/tableData";
import Card from "@mui/material/Card";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Pagination,
} from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faTrash,
  faPen,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "../components/Badge";
import UpdateButtons from "../components/UpdateButtons";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(response);

  const resultsPerPage = 7;
  const totalResults = userData.length;

  function onPageChange(p) {
    setPage(p);
  }
  useEffect(() => {
    setData(userData.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, userData]);

  function addUser(newUser) {
    const currentDate = new Date();

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "numeric",
      hour12: true,
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(currentDate);
    Object.assign(newUser, { status: "Active", lastlogin: formattedDate });

    setUserData((prevData) => {
      return [newUser, ...prevData];
    });
  }

  function deleteUser(id) {
    setUserData((prevData) => {
      return prevData.filter((curUser, index) => {
        return index !== id;
      });
    });
  }

  function editUser(id, editedUser) {
    console.log(id)
    setUserData(userData.map((deets, i) => {
      if (i === id) {
        return { ...deets, name: editedUser.name, role: editedUser.role };
      } else {
        return deets;
      }
    }));
  }

  return (
    <Card className="m-12">
      <PageTitle addUser={addUser} userInstance={userData} userSize={userData.length}></PageTitle>

      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableCell className="flex items-center align-middle ml-12">
                <span>Name</span>
                <span className="ml-2 text-lg">&darr;</span>
              </TableCell>
              <TableCell><span  className="ml-2">Status</span></TableCell>
              <TableCell>Role</TableCell>
              <TableCell>
                <span> Last Login</span>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <Row
                key={i}
                currentUser={user}
                ind={i}
                deleteUserFunc={deleteUser}
                editUserFunc={editUser}
              ></Row>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </Card>
  );
}

export default Dashboard;
