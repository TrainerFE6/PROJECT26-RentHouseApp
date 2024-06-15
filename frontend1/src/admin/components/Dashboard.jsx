import React, { useState } from "react";
import { Container, Row, Col, Table, Form, Pagination } from "react-bootstrap";

const Dashboard = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-555-5555",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 5,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 6,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 7,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 8,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 9,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
    {
      id: 10,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "444-444-4444",
    },
  ];

  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filteredData = initialData.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.phone.includes(value)
    );
    setData(filteredData);
  };

  const handleEntriesChange = (e) => {
    setEntries(Number(e.target.value));
    setCurrentPage(1);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(data.length / entries);
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
                    <div class="h5 mb-0 font-weight-bold text-gray-800">5</div>
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
                  <div class="h5 mb-0 font-weight-bold text-gray-800">5</div>
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
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

export default Dashboard;
