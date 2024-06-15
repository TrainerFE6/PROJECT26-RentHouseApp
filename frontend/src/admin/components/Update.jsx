import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [kode, setKode] = useState("");
  const [tipe, setTipe] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/room/${roomId}`
        );
        const roomData = response.data;
        setKode(roomData.kode);
        setTipe(roomData.tipe);
        setFasilitas(roomData.fasilitas);
        setUkuran(roomData.ukuran);
        setPrice(roomData.price);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    fetchRoomData();
  }, [roomId]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };

  const updateRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kode", kode);
    formData.append("tipe", tipe);
    formData.append("fasilitas", fasilitas);
    formData.append("ukuran", ukuran);
    formData.append("price", price);
    if (file) {
      formData.append("file", file);
    }
    try {
      await axios.patch(`http://localhost:5000/room/${roomId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlert({ type: "success", message: "Room updated successfully!" });
      setTimeout(() => navigate("/data"), 2000);
    } catch (error) {
      console.error("Error updating room:", error);
      setAlert({ type: "danger", message: "Failed to update room." });
    }
  };

  return (
    <div className="p-4 min-vh-100">
      <h1
        className="mb-1 text-primary fw-bold border-black pb-2"
        style={{ fontSize: "18px" }}
      >
        UPDATE ROOM
      </h1>
      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={updateRoom}>
        <div className="form-group mb-1">
          <label className="form-label">Nama Kamar : </label>
          <input
            type="text"
            className="form-control mt-1"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Tipe Kamar :</label> <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="reguler"
              className="form-check-input"
              name="tipe"
              value="REGULER"
              checked={tipe === "REGULER"}
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
              checked={tipe === "VIP"}
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
              checked={tipe === "VVIP"}
              onChange={(e) => setTipe(e.target.value)}
              required
            />
            <label htmlFor="vvip" className="form-label">
              VVIP
            </label>
          </div>
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Fasilitas Kamar : </label>
          <input
            type="text"
            className="form-control mt-1"
            value={fasilitas}
            onChange={(e) => setFasilitas(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Ukuran Kamar : </label>
          <input
            type="text"
            className="form-control mt-1"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Harga : </label>
          <input
            type="text"
            className="form-control mt-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-1">
          <label className="form-label">Gambar Kamar : </label> <br />
          <input
            type="file"
            className="form-control-file mt-1"
            onChange={loadImage}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
