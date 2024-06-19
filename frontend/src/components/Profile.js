import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const Profile = () => {
  const { id } = useParams(); // Ensure this gets the ID from the route
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/personal-info/${id}`)
        .then((response) => {
          const data = response.data;
          setFullName(data.full_name);
          setGender(data.gender);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Data tidak ditemukan.");
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPersonalInfo = {
      full_name: fullName,
      gender: gender,
      email: email,
      phone: phone,
      address: address,
    };

    axios
      .put(`http://localhost:5000/personal-info/${id}`, updatedPersonalInfo) // Use ID in the URL
      .then((response) => {
        console.log(response.data);
        // Navigate to the desired route after successful form submission
        navigate("/home2");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        setError("Terjadi kesalahan saat mengupdate data.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Update Informasi Pribadi</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nama Lengkap</Label>
            <Input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Jenis Kelamin</Label>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
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
            />
          </FormGroup>
          <FormGroup>
            <Label>No Telepon</Label>
            <Input
              type="text"
              placeholder="Masukkan no telepon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Alamat</Label>
            <Input
              type="text"
              placeholder="Masukkan alamat"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Profile;
