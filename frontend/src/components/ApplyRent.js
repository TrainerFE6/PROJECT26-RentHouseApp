// import React, { useState, useEffect } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import {
//   FormWrapper,
//   Input,
//   Select,
//   Option,
//   ButtonWrapper,
//   ImageWrapper,
// } from "../styles/ApplyRentStyles.js";
// import axios from "axios";
// import { useParams, useLocation, useNavigate } from "react-router-dom";

// const ApplyRent = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { state } = useLocation();
//   const [full_name, setFullName] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [file, setFile] = useState("");
//   const kos = state?.kos;

//   const loadImage = (e) => {
//     const image = e.target.files[0];
//     setFile(image);
//   };

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   useEffect(() => {
//     const getRoomById = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/room/${id}`);
//         // Assuming response.data contains kos details
//       } catch (error) {
//         console.error("Error fetching room details:", error);
//       }
//     };
//     getRoomById();
//   }, [id]);

//   const addApplyRent = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("full_name", full_name);
//     formData.append("address", address);
//     formData.append("gender", gender);
//     formData.append("phone", phone);
//     formData.append("file", file);

//     const order = {
//       kosName: kos.kode,
//       kosType: kos.tipe,
//       kosImage: kos.url,
//       fullName: full_name,
//       gender: gender,
//       address: address,
//       phone: phone,
//       file: file,
//     };

//     try {
//       await axios.post("http://localhost:5000/apply-rent", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Pesan Anda Terkirim");
//       navigate("/check-order", { state: { order } });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Container>
//       <FormWrapper>
//         {kos && (
//           <>
//             <h2>{kos.kode}</h2>
//             <h5>Kos : {kos.tipe}</h5>
//             <ImageWrapper>
//               <img src={kos.url} alt={kos.kode} className="img-fluid rounded" />
//             </ImageWrapper>
//           </>
//         )}
//         <Form onSubmit={addApplyRent}>
//           <Form.Group>
//             <Form.Label>Nama Lengkap :</Form.Label>
//             <Input
//               placeholder="Masukkan Nama Lengkap"
//               type="text"
//               value={full_name}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Jenis Kelamin :</Form.Label>
//             <Select value={gender} onChange={handleGenderChange} required>
//               <Option value="">Pilih</Option>
//               <Option value="Laki-laki">Laki - Laki</Option>
//               <Option value="Perempuan">Perempuan</Option>
//             </Select>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Alamat :</Form.Label>
//             <Input
//               placeholder="Masukkan Alamat"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>No.Telepon :</Form.Label>
//             <Input
//               placeholder="Masukkan No.Telepon"
//               type="number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Foto KTP :</Form.Label>
//             <Input
//               placeholder="Masukkan Nama Lengkap"
//               type="file"
//               onChange={loadImage}
//               required
//             />
//           </Form.Group>
//           <ButtonWrapper>
//             <Button type="submit">Submit</Button>
//           </ButtonWrapper>
//         </Form>
//       </FormWrapper>
//     </Container>
//   );
// };

// export default ApplyRent;
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  FormWrapper,
  Input,
  Select,
  Option,
  ButtonWrapper,
  ImageWrapper,
} from "../styles/ApplyRentStyles.js";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ApplyRent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [full_name, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");
  const kos = state?.kos;

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
        // Assuming response.data contains kos details
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };
    getRoomById();
  }, [id]);

  const addApplyRent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("file", file);

    const order = {
      kosName: kos.kode,
      kosType: kos.tipe,
      kosImage: kos.url,
      fullName: full_name,
      gender: gender,
      address: address,
      phone: phone,
      file: file,
    };

    try {
      const existingOrder = JSON.parse(localStorage.getItem("currentOrder"));
      if (
        existingOrder &&
        JSON.stringify(existingOrder) === JSON.stringify(order)
      ) {
        alert("Pesanan sudah ada dalam daftar.");
      } else {
        await axios.post("http://localhost:5000/apply-rent", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Pesan Anda Terkirim");
        navigate("/check-order", { state: { order } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        {kos && (
          <>
            <h2>{kos.kode}</h2>
            <h5>Kos : {kos.tipe}</h5>
            <ImageWrapper>
              <img src={kos.url} alt={kos.kode} className="img-fluid rounded" />
            </ImageWrapper>
          </>
        )}
        <Form onSubmit={addApplyRent}>
          <Form.Group>
            <Form.Label>Nama Lengkap :</Form.Label>
            <Input
              placeholder="Masukkan Nama Lengkap"
              type="text"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
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
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>No.Telepon :</Form.Label>
            <Input
              placeholder="Masukkan No.Telepon"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Foto KTP :</Form.Label>
            <Input
              placeholder="Masukkan Nama Lengkap"
              type="file"
              onChange={loadImage}
              required
            />
          </Form.Group>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default ApplyRent;
