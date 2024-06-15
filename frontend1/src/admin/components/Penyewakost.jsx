import React, { useState } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import Image from "react-bootstrap/Image";
import ImgAbout from "./assets/image/ktp sewa kos.png";
import { Link } from "react-router-dom";
// import { deleteUserData } from "./api";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Penyewakost = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true); // Set editing state to true
    // Navigate to edit profile page
  };

  const handleDeleteProfile = () => {
    // Display confirmation dialog
    if (window.confirm("Are you sure you want to delete your profile?")) {
      // deleteUserData(); // Call API function to delete user data
      // Redirect to login page or handle logout
    }
  };
  // function testClickEvent(param) {
  //   alert("Row Click Event");
  // }

  const data = () => {
    return {
      columns: [
        {
          label: "No",
          field: "no",

          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "No",
          },
        },
        {
          label: "Foto KTP",
          field: "foto",
        },
        {
          label: "Nama Penyewa",
          field: "nama",
        },
        {
          label: "Jenis Kelamin",
          field: "jenis",
        },

        {
          label: "Alamat",
          field: "alamat",
          sort: "asc",
        },
        {
          label: "NO HP",
          field: "hp",
          sort: "disabled",
        },
        {
          label: "Action",
          field: "action",
          sort: "disabled",
        },
      ],
      rows: [
        {
          no: "1",
          foto: (
            <Image
              src={ImgAbout}
              style={{
                height: "200px",
                width: "300px",
                justifyContent: "center",
              }}
              alt="Responsive Image"
            />
          ),
          nama: "Novan Maulana",
          jenis: "Laki-Laki",
          alamat: "Semarang",
          hp: "0856347343",
          action: (
            <div className="profile-actions">
              <Button
                variant="warning"
                className="bi bi-pencil-square"
              ></Button>
              |<Button variant="danger" className="bi bi-trash "></Button>
            </div>
          ),
          // clickEvent: () => testClickEvent(1),
        },
        {
          no: "2",
          foto: (
            <Image
              src={ImgAbout}
              style={{
                height: "200px",
                width: "300px",
                justifyContent: "center",
              }}
              alt="Responsive Image"
            />
          ),
          nama: "putri",
          jenis: "Perempuan",
          alamat: "Boyolali",
          hp: "00000000000",
        },
      ],
    };
  };
  return (
    <CDBContainer className="mt-5 min-vh-100">
      <h3>Data Penyewa Kost</h3>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            className="table-responsive"
            striped
            bordered
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={data()}
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Penyewakost;
