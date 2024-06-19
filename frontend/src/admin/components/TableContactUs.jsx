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

const TableContacUs = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(5);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/contact-messages"
        );
        const sortedData = response.data.sort((a, b) => a.id - b.id); // Urutkan berdasarkan ID
        setData(sortedData);
        setFilteredData(sortedData); // Set filteredData juga dengan data yang sudah diurutkan
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value)
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
      await axios.delete(`http://localhost:5000/contact-messages/${id}`);
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
    <div>
      <Container className="my-5">
        <h2 className="mb-3">Table Contact Us</h2>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((row, index) => (
                  <tr key={row.id}>
                    <td>{indexOfFirstEntry + index + 1}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.message}</td>
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
    </div>
  );
};

export default TableContacUs;
