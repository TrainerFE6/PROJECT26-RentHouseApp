import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order: initialOrder } = location.state || {};
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("currentOrders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    if (initialOrder) {
      const isDuplicate = orders.some(
        (order) => order.kosName === initialOrder.kosName
      );

      if (!isDuplicate) {
        const newOrders = [...orders, initialOrder].slice(-4); // Keep only the latest 4 orders
        setOrders(newOrders);
        alert("Pesanan berhasil ditambahkan.");
      } else {
        alert("Pesanan sudah ada dalam daftar.");
      }
    }
  }, [initialOrder, orders]);

  useEffect(() => {
    localStorage.setItem("currentOrders", JSON.stringify(orders));
  }, [orders]);

  const handleDeleteOrder = (indexToDelete) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders];
        updatedOrders.splice(indexToDelete, 1);
        return updatedOrders;
      });
    }
  };

  const handleDeleteAllOrders = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua pesanan?")) {
      setOrders([]);
    }
  };

  if (orders.length === 0) {
    return (
      <Container>
        <div>Tidak ada pesanan untuk ditampilkan</div>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="danger" className="mb-3" onClick={handleDeleteAllOrders}>
        Hapus Semua Pesanan
      </Button>
      {orders.map((order, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Row>
              <Col xs={3}>
                <Card.Img src={order.kosImage} alt={order.kosName} />
              </Col>
              <Col xs={9}>
                <Card.Title>{order.kosName}</Card.Title>
                <Card.Text>
                  <strong>Nama Penyewa:</strong> {order.fullName}
                </Card.Text>
                <Card.Text>
                  <strong>Jenis Kelamin:</strong> {order.gender}
                </Card.Text>
                <Card.Text>
                  <strong>Alamat:</strong> {order.address}
                </Card.Text>
                <Card.Text>
                  <strong>No Telepon:</strong> {order.phone}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/confirm")}>
                  Konfirmasi
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteOrder(index)}
                >
                  Hapus Pesanan
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default CheckOrder;
