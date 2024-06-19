import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState("");

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

  const handleDelete = async (roomId) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus data ini?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/room/${roomId}`
        );
        setDeleteMsg(response.data.msg);
        setRooms(rooms.filter((room) => room.id !== roomId));
      } catch (error) {
        console.error("Error deleting room:", error.message);
        setDeleteMsg("Error deleting room!");
      }
    }
  };

  return (
    <div className="p-4 min-vh-100">
      <h1
        className="mb-3 text-primary fw-bold border-black pb-2"
        style={{ fontSize: "18px" }}
      >
        DATA ROOM
      </h1>
      <div className="row">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }} // Animasi saat hover
            whileTap={{ scale: 0.95 }} // Animasi saat di-tap (mobile)
          >
            <div className="card">
              <img
                src={room.url}
                className="card-img-top"
                alt="room"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{room.kode}</h5>
                <p className="card-text">
                  <strong>Tipe:</strong> {room.tipe} <br />
                  <strong>Fasilitas:</strong> {room.fasilitas} <br />
                  <strong>Ukuran:</strong> {room.ukuran} <br />
                  <strong>Harga:</strong> {room.price}
                </p>
                <div className="text-center">
                  <Link to={`/update/${room.id}`} className="p-1">
                    <button className="btn btn-outline-success me-2">
                      <BsPencilSquare />
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(room.id)}
                  >
                    <BsTrash />
                  </button>
                  {deleteMsg && <p>{deleteMsg}</p>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Room;
