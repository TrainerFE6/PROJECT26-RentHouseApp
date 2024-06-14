import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RoomsContext from "../../components/RoomsContext";

const Tambahkost = () => {
  const [kode, setKode] = useState("");
  const [tipe, setTipe] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { addRoom } = useContext(RoomsContext);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kode", kode);
    formData.append("tipe", tipe);
    formData.append("fasilitas", fasilitas);
    formData.append("ukuran", ukuran);
    formData.append("price", price);
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:5000/room",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      addRoom(response.data.room);
      navigate("/data");
    } catch (error) {
      console.error("Failed to save room", error);
    }
  };

  return (
    <div className="p-4 min-vh-100">
      <h1
        className="mb-1 text-primary fw-bold border-black pb-2"
        style={{ fontSize: "18px" }}
      >
        ADD ROOM
      </h1>
      <form onSubmit={saveRoom}>
        <div className="form-group mb-1">
          <label className="form-label">Nama Kamar: </label>
          <input
            type="text"
            className="form-control mt-1"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Tipe Kamar:</label> <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="reguler"
              className="form-check-input"
              name="tipe"
              value="REGULER"
              onChange={(e) => setTipe(e.target.value)}
              required
            />
            <label htmlFor="reguler" className="form-label">
              REGULER
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="vip"
              className="form-check-input"
              name="tipe"
              value="VIP"
              onChange={(e) => setTipe(e.target.value)}
              required
            />
            <label htmlFor="vip" className="form-label">
              VIP
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="vvip"
              className="form-check-input"
              name="tipe"
              value="VVIP"
              onChange={(e) => setTipe(e.target.value)}
              required
            />
            <label htmlFor="vvip" className="form-label">
              VVIP
            </label>
          </div>
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Fasilitas Kamar: </label>
          <input
            type="text"
            className="form-control mt-1"
            value={fasilitas}
            onChange={(e) => setFasilitas(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Ukuran Kamar: </label>
          <input
            type="text"
            className="form-control mt-1"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Harga: </label>
          <input
            type="text"
            className="form-control mt-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Gambar Kamar: </label> <br />
          <input
            type="file"
            className="form-control-file mt-1"
            onChange={loadImage}
            required
          />
        </div>
        {preview && (
          <div className="form-group mb-1">
            <img
              src={preview}
              alt="Room Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tambahkost;
