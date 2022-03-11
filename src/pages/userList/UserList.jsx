import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect( ()=>{
    axios.get("http://localhost:3001/api/user/selectall").then((response)=>{
      setUsers(response.data)

  },["http://localhost:3001/api/user/selectall"])
  })

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      
    },
  ];

  return (
    <div className="userList">
    {users.map((item)=>{
      return (
        <div>
        <p style={{ marginLeft:623,position: "relative",top:23 }}>{item.email}</p>
        <hr></hr>
        <p style={{marginLeft:200}}>{item.username}</p>
        <hr></hr>
        <button style={{position: "relative",top:-24}}>deleteAccount</button>
        </div>
      )
    })}
    
    </div>
  );
}
