import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  FormWrapper,
  Input,
  Select,
  Option,
  ButtonWrapper,
} from "../styles/ApplyRentStyles.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("");
  const [file, setFile] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    const getRoomById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/room/${id}`);
        if (response.data) {
          setRoom(response.data.kode || "Kode tidak tersedia");
        } else {
          console.error("Data room tidak ditemukan");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data room:", error);
      }
    };
    getRoomById();
  }, [id]);

  const addTransaction = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("room", room);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/transaksi", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/home2");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={addTransaction}>
          <Form.Group>
            <Form.Label>Nama Lengkap :</Form.Label>
            <Input
              placeholder="Masukkan Nama Lengkap"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            ></Input>
          </Form.Group>
          <Form.Group>
            <Form.Label>Jenis Kelamin :</Form.Label>
            <Select value={gender} onChange={handleGenderChange} required>
              <Option value="">Pilih</Option>
              <Option value="Laki-laki">Laki - Laki</Option>
              <Option value="Perempuan">Perempuan</Option>
            </Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Alamat :</Form.Label>
            <Input
              placeholder="Masukkan Alamat"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Input>
          </Form.Group>
          <Form.Group>
            <Form.Label>No.Telepon :</Form.Label>
            <Input
              placeholder="Masukkan No.Telepon"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></Input>
          </Form.Group>
          <Form.Group>
            <Form.Label>Kamar :</Form.Label>
            <Input
              placeholder="Masukkan No.Kamar"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            ></Input>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bukti Pembayaran :</Form.Label>
            <Input
              placeholder="Masukkan Bukti Pembayaran"
              type="file"
              onChange={loadImage}
              required
            ></Input>
          </Form.Group>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Confirm;
