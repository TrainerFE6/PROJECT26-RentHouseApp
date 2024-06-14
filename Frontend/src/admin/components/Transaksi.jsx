import React from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import Image from "react-bootstrap/Image";
import ImgAbout from "./assets/image/bukti bayar kos.png";
import { CiTextAlignCenter } from "react-icons/ci";
const Transaksi = () => {
  // function testClickEvent(param) {
  //   alert("Row Click Event");
  // }

  const data = () => {
    return {
      columns: [
        {
          label: "No",
          field: "no",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "No",
          },
        },
        {
          label: "Bukti Transaksi",
          field: "bukti",
          width: 270,
        },
        {
          label: "Tanggal",
          field: "date",
          sort: "disabled",
          width: 150,
        },
        {
          label: "Nama Penyewa",
          field: "nama",
          width: 200,
        },
        {
          label: "Total",
          field: "total",
          sort: "asc",
          width: 100,
        },
        // {
        //   label: "Status",
        //   field: "status",
        //   sort: "disabled",
        //   width: 100,
        // },
      ],
      rows: [
        {
          no: "1",
          bukti: (
            <Image
              src={ImgAbout}
              style={{
                height: "200px",
                width: "100%",
                justifyContent: "center",
              }}
              alt="Responsive Image"
            />
          ),
          date: "01/01/2024",
          nama: "Novan Maulana",
          total: "10000000",
          // status: "Tertahan",
          // clickEvent: () => testClickEvent(1),
        },
        {
          no: "2",
          bukti: (
            <Image
              src={ImgAbout}
              style={{
                height: "200px",
                width: "100%",
                justifyContent: "center",
              }}
              alt="Responsive Image"
            />
          ),
          date: "01/01/2024",
          nama: "Boboboy",
          total: "10000000",
          // status: "Tertahan",
        },
      ],
    };
  };
  return (
    <CDBContainer className="mt-5 min-vh-100">
      <h3>Data Transaksi</h3>
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

export default Transaksi;
