import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Pagination,
  Button,
} from "react-bootstrap";
import axios from "axios";
import TableContacUs from "./TableContactUs";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(5);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalKamar, setTotalKamar] = useState(0);
  const [totalPenyewaKost, setTotalPenyewaKost] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/personal-info");
        const sortedData = response.data.sort((a, b) => a.id - b.id); // Urutkan berdasarkan ID
        setData(sortedData);
        setFilteredData(sortedData); // Set filteredData juga dengan data yang sudah diurutkan
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  //Get jumlah data tabel kamar
  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const response = await axios.get("http://localhost:5000/room");
        setTotalKamar(response.data.length); // Set total kamar dari jumlah data yang diterima
      } catch (error) {
        console.error("There was an error fetching the rooms data!", error);
      }
    };

    fetchKamar();
  }, []);
  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const response = await axios.get("http://localhost:5000/apply-rent");
        setTotalPenyewaKost(response.data.length); // Set total kamar dari jumlah data yang diterima
      } catch (error) {
        console.error("There was an error fetching the rooms data!", error);
      }
    };

    fetchKamar();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = data.filter(
      (item) =>
        item.full_name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.phone.includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset halaman saat melakukan pencarian
  };

  const handleEntriesChange = (e) => {
    setEntries(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/personal-info/${id}`);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      setFilteredData(updatedData);
      alert(`Data with ID ${id} has been deleted.`);
    } catch (error) {
      console.error(`Error deleting data with ID ${id}:`, error);
    }
  };

  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredData.length / entries);
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <div class="row ">
        <div class="col-xl-6 col-md-6 mb-4" style={{ height: "150px" }}>
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <i class="bi bi-person fa-2x text-gray-300"></i>
                  </div>
                  <div class="col mr-2 mt-4">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Penyewa Kost
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {totalPenyewaKost}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <i class="bi bi-house fa-2x text-gray-300"></i>
                </div>
                <div class="col mr-2 mt-4">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Kamar
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {totalKamar}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="my-5">
        <h2 className="mb-3">Table Information Customer</h2>
        <div className="table-responsive">
          <div className="dashboard-container bg-white p-4">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search..."
                />
              </Col>
              <Col md={6} className="text-end">
                <Form.Select value={entries} onChange={handleEntriesChange}>
                  {[5, 10, 15, 20, 30].map((entry) => (
                    <option key={entry} value={entry}>
                      Show {entry}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Table hover className="custom-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Lengkap</th>
                  <th>Jenis Kelamin</th>
                  <th>Email</th>
                  <th>No HP</th>
                  <th>Alamat</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((row, index) => (
                  <tr key={row.id}>
                    <td>{indexOfFirstEntry + index + 1}</td>
                    <td>{row.full_name}</td>
                    <td>{row.gender}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.address}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination className="justify-content-center">
              {[...Array(totalPages).keys()].map((number) => (
                <Pagination.Item
                  key={number + 1}
                  active={number + 1 === currentPage}
                  onClick={() => handlePageChange(number + 1)}
                >
                  {number + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </Container>

      <TableContacUs />
    </div>
  );
};

export default Dashboard;
