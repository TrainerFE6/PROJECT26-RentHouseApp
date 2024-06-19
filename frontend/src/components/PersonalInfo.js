import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormWrapper,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  Option,
  Button,
} from "../styles/PersonalInfoStyles";
import axios from "axios";
import Swal from "sweetalert2";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Initialize navigate for programmatic navigation
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPersonalInfo = {
      full_name: fullName,
      gender: gender,
      email: email,
      phone: phone,
      address: address,
    };

    axios
      .post("http://localhost:5000/personal-info", newPersonalInfo)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.msg,
        });
        // Reset form fields
        setFullName("");
        setGender("");
        setEmail("");
        setPhone("");
        setAddress("");

        // Navigate to the desired route after successful form submission
        navigate("/home2"); // Replace "/success-page" with your actual route
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "warning",
            title: "Mohon Maaf",
            text: error.response.data.msg,
          }); // Tampilkan alert dengan pesan dari server
        } else {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Informasi Pribadi Gagal Ditambahkan",
          });
        }
      });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Informasi Pribadi</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nama Lengkap</Label>
            <Input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Jenis Kelamin</Label>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <Option value="">Pilih jenis kelamin</Option>
              <Option value="laki-laki">Laki-Laki</Option>
              <Option value="perempuan">Perempuan</Option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>No Telepon</Label>
            <Input
              type="text"
              placeholder="Masukkan no telepon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Alamat</Label>
            <Input
              type="text"
              placeholder="Masukkan alamat"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default PersonalInfo;
