import React, { useEffect, useState } from 'react';
import { DataGrid } from "@material-ui/data-grid";
import Navbar from '../../components/navbar/navbar';
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";



const View = () => {

  const navigate = useNavigate();

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('data')));
  
  const handleEdit = async(id, name, number) => {
      navigate("/view/" + id, {
        state: {
          id: id,
          name: name,
          number: number,
        }
      })
  }


    const handleDelete = (number) => {

      const filtered = contacts.filter((element, index) => {
        return element.number !== number
      })

      setContacts(filtered)

    }

    useEffect(()=>{
    
      localStorage.setItem('data',JSON.stringify(contacts))
      
    },[contacts])



    const columns = [
        {
          field: "id",
          headerName: "ID",
          width: 90,
        },
    
        {
          field: "name",
          headerName: "Name",
          width: 160,
          renderCell: (cellValues) => {
            return (
              <div
                style={{
                  color: "blue",
                  fontSize: 18,
                  width: "100%",
                  textAlign: "left"
                }}
              >
                {cellValues.value}
              </div>
            );
          }
        },
    
        {
          field: "phoneNumber",
          headerName: "Phone Number",
          type: "number",
          width: 120,
          align: "center"
        },

        {
          field: "edit",
          headerName: "Edit",
          width: 120,
          renderCell: (params) => {
            return (
                <EditOutlined className="productListEdit" 
                onClick={() => 
                  handleEdit(
                    params.row.id, 
                    params.row.name,
                    params.row.phoneNumber, 
                )}
                
                />
            );
          },
        },
    
    
        {
          field: "delete",
          headerName: "Delete",
          width: 120,
          renderCell: (params) => {
            return (
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row.phoneNumber)}
              />
            );
          },
        },
    
    ];


    const rows = contacts.map((contact, index) =>(
        {
          key: index,
            id: index+1,
            name: contact.name,
            phoneNumber:  contact.number,
            edit: index+1,
            delete: contact
        }
    ))
    


    return (
        <div>

            <Navbar />
            
            <div style={{ height: 500, margin: "40px",}}>
                <DataGrid 
                rowHeight={100}
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                />
            </div>
        </div>
    )
}








export default View













