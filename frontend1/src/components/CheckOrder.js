import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import {
  OrderCard,
  ImageWrapper,
  CardContent,
  ButtonWrapper,
  CenteredMessage,
} from "../styles/CheckOrderStyles";

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
        (order) => JSON.stringify(order) === JSON.stringify(initialOrder)
      );

      if (!isDuplicate) {
        setOrders((prevOrders) => [...prevOrders, initialOrder]);
        alert("Pesanan berhasil ditambahkan.");
      } else {
        alert("Pesanan sudah ada dalam daftar.");
      }
    }
  }, [initialOrder]);

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

  if (orders.length === 0) {
    return (
      <Container>
        <CenteredMessage>Tidak ada pesanan untuk ditampilkan</CenteredMessage>
      </Container>
    );
  }

  return (
    <Container>
      {orders.map((order, index) => (
        <OrderCard key={index}>
          <ImageWrapper>
            <img src={order.kosImage} alt={order.kosName} />
          </ImageWrapper>
          <CardContent>
            <h2 className="kos-details">{order.kosName}</h2>
            <Card.Text className="kos-details">
              <strong>Nama Penyewa:</strong> {order.fullName}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>Jenis Kelamin:</strong> {order.gender}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>Alamat:</strong> {order.address}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>No Telepon:</strong> {order.phone}
            </Card.Text>
            <ButtonWrapper>
              <Button
                className="mx-3"
                variant="primary"
                onClick={() => navigate("/confirm")}
              >
                Konfirmasi
              </Button>
              <Button variant="danger" onClick={() => handleDeleteOrder(index)}>
                Hapus Pesanan
              </Button>
            </ButtonWrapper>
          </CardContent>
        </OrderCard>
      ))}
    </Container>
  );
};

export default CheckOrder;
