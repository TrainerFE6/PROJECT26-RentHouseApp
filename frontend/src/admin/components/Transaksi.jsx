// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Container } from "react-bootstrap";

// const Transaksi = () => {
//   const [transaksi, setTransaksi] = useState([]);

//   useEffect(() => {
//     const getTransaksi = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/transaksi");
//         setTransaksi(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     getTransaksi();
//   }, []);

//   return (
//     <Container className="min-vh-100">
//       <h1
//         className="mb-3 text-primary fw-bold border-black pb-2 "
//         style={{ fontSize: "18px" }}
//       >
//         DATA TRANSAKSI
//       </h1>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Butki Pembayaran</th>
//             <th>Nama Lengkap</th>
//             <th>Alamat</th>
//             <th>Jenis Kelamin</th>
//             <th>Nomor Telepon</th>
//             <th>Kamar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transaksi.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <img
//                   src={item.url}
//                   alt={`Foto ${item.fullName}`}
//                   style={{
//                     width: "300px",
//                     height: "500px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </td>
//               <td>{item.fullName}</td>
//               <td>{item.address}</td>
//               <td>{item.gender}</td>
//               <td>{item.phone}</td>
//               <td>{item.room}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default Transaksi;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Form, Button, Pagination } from "react-bootstrap";

const Transaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // New const date to hold current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  useEffect(() => {
    const getTransaksi = async () => {
      try {
        const response = await axios.get("http://localhost:5000/transaksi");
        setTransaksi(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTransaksi();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredTransaksi = transaksi.filter((item) =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransaksi.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredTransaksi.length / itemsPerPage);

  return (
    <Container className="min-vh-100">
      <h1
        className="mb-3 text-primary fw-bold border-black pb-2"
        style={{ fontSize: "18px" }}
      >
        DATA TRANSAKSI
      </h1>
      <p className="mb-3">Tanggal: {formattedDate}</p>{" "}
      {/* Display formatted date */}
      <Form className="d-flex mb-3">
        <Form.Control
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Form.Select
          className="ms-2"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}
        >
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={15}>Show 15</option>
        </Form.Select>
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Bukti Pembayaran</th>
            <th>Nama Lengkap</th>
            <th>Jenis Kelamin</th>
            <th>No HP</th>
            <th>Alamat</th>
            <th>Kamar</th>
            {/* Action column removed */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>
                <img
                  src={item.url}
                  alt={`Foto ${item.fullName}`}
                  style={{
                    width: "300px",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{item.fullName}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.room}</td>
              {/* Action column removed */}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <Pagination.Item
            key={pageNumber + 1}
            active={pageNumber + 1 === currentPage}
            onClick={() => setCurrentPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Transaksi;
