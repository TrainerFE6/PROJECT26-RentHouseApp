import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const KosList2 = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/room");
        setRooms(response.data);
      } catch (error) {
        console.error("There was an error fetching the room data!", error);
      }
    };

    getRooms();
  }, []);

  const selectedIds = [18, 26, 21];
  const selectedRooms = rooms.filter((room) => selectedIds.includes(room.id));

  const handleCardClick = (id) => {
    navigate(`/kos2/${id}`);
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container>
      <br></br>
      <h1 className="my-4 text-center">Rekomendasi Kamar</h1>
      <br></br>
      <Row>
        {selectedRooms.map((room) => (
          <Col key={room.id} md={4} className="mb-4">
            <Card
              onClick={() => handleCardClick(room.id)}
              onMouseEnter={() => handleMouseEnter(room.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s",
                transform: hoveredCard === room.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Card.Img
                variant="top"
                src={room.url}
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
      <br></br>
    </Container>
  );
};

export default KosList2;
