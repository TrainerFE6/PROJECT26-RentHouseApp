import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Button, Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Penyewakost = () => {
  const [penyewaKost, setPenyewaKost] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk nilai pencarian

  useEffect(() => {
    const getPenyewaKost = async () => {
      try {
        const response = await axios.get("http://localhost:5000/apply-rent");
        setPenyewaKost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getPenyewaKost();
  }, []);

  const deletePenyewa = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/apply-rent/${id}`);
      // Menghapus item yang dihapus dari state
      setPenyewaKost(penyewaKost.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPenyewaKost = penyewaKost.filter((item) =>
    item.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="min-vh-100">
      <h1
        className="mb-3 text-primary fw-bold border-black pb-2 "
        style={{ fontSize: "18px" }}
      >
        DATA PENYEWA KOST
      </h1>
      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Cari berdasarkan nama lengkap..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Foto KTP</th>
            <th>Nama Lengkap</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Nomor Telepon</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPenyewaKost.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.url}
                  alt={`Foto ${item.full_name}`}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{item.full_name}</td>
              <td>{item.gender}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>
                <Button
                  variant="danger"
                  className="bi bi-trash"
                  onClick={() => deletePenyewa(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Penyewakost;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Container, Form, Button, Pagination } from "react-bootstrap";

// const Penyewakost = () => {
//   const [penyewaKost, setPenyewaKost] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);

//   useEffect(() => {
//     const getTransaksi = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/penyewaKost");
//         setPenyewaKost(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     getTransaksi();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleDelete = (index) => {
//     const updatedTransaksi = [...penyewaKost];
//     updatedTransaksi.splice(index, 1);
//     setPenyewaKost(updatedTransaksi);
//   };

//   const filteredTransaksi = penyewaKost.filter((item) =>
//     item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredTransaksi.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const totalPages = Math.ceil(filteredTransaksi.length / itemsPerPage);

//   return (
//     <Container className="min-vh-100">
//       <h1
//         className="mb-3 text-primary fw-bold border-black pb-2"
//         style={{ fontSize: "18px" }}
//       >
//         DATA TRANSAKSI
//       </h1>
//       <Form className="d-flex mb-3">
//         <Form.Control
//           type="search"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <Form.Select
//           className="ms-2"
//           value={itemsPerPage}
//           onChange={(e) => setItemsPerPage(e.target.value)}
//         >
//           <option value={5}>Show 5</option>
//           <option value={10}>Show 10</option>
//           <option value={15}>Show 15</option>
//         </Form.Select>
//       </Form>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Foto KTP</th>
//             <th>Nama Lengkap</th>
//             <th>Jenis Kelamin</th>
//             <th>Alamat</th>
//             <th>Nomor Telepon</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item, index) => (
//             <tr key={index}>
//               <td>{indexOfFirstItem + index + 1}</td>
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
//               <td>{item.full_name}</td>
//               <td>{item.gender}</td>
//               <td>{item.address}</td>
//               <td>{item.phone}</td>
//               <td>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleDelete(indexOfFirstItem + index)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Pagination>
//         {[...Array(totalPages).keys()].map((pageNumber) => (
//           <Pagination.Item
//             key={pageNumber + 1}
//             active={pageNumber + 1 === currentPage}
//             onClick={() => setCurrentPage(pageNumber + 1)}
//           >
//             {pageNumber + 1}
//           </Pagination.Item>
//         ))}
//       </Pagination>
//     </Container>
//   );
// };

// export default Penyewakost;
