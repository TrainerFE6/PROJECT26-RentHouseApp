import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import { SearchContainer, SearchInput } from "../styles/CariKosStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Kos2 = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [kamarKos, setKamarKos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/room");
      setKamarKos(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleCardClick = (id) => {
    navigate(`/kos/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const itemsPerPage = 8;

  const filteredKosItems = kamarKos.filter((room) => {
    const matchTerm =
      room.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.ukuran.toLowerCase().includes(searchTerm.toLowerCase());

    const matchType =
      searchType === "" || room.tipe.toLowerCase() === searchType.toLowerCase();

    return matchTerm && matchType;
  });

  const totalItems = filteredKosItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentKosItems = filteredKosItems.slice(startIndex, endIndex);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <br />
      <h1 className="my-4 text-center">Cari Kamar Sesuai Seleramu</h1>
      <br />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Cari kamar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={searchType} onChange={handleTypeChange}>
          <option value="">Semua</option>
          <option value="VVIP">VVIP</option>
          <option value="VIP">VIP</option>
          <option value="Reguler">Reguler</option>
        </select>
      </SearchContainer>
      <br />
      <br />
      <Row>
        {currentKosItems.map((room) => (
          <Col key={room.id} md={3} className="mb-4">
            <Card
              onClick={() => handleCardClick(room.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={room.url}
                className="positioned-image"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{room.kode}</Card.Title>
                <Card.Text>
                  <strong>Tipe:</strong> {room.tipe}
                  <br />
                  <strong>Ukuran Kamar:</strong> {room.ukuran}
                  <br />
                  <strong>Harga:</strong> {room.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === activePage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default Kos2;
