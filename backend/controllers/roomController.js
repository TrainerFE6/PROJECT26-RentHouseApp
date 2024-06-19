import Room from "../models/roomModel.js";
import path from "path";
import fs from "fs";

export const getRoom = async (req, res) => {
  try {
    const response = await Room.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const response = await Room.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addRoom = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { kode, tipe, fasilitas, ukuran, price } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Room.create({
        kode: kode,
        tipe: tipe,
        fasilitas: fasilitas,
        ukuran: ukuran,
        price: price,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Room Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const editRoom = async (req, res) => {
  try {
    console.log("Received request to edit room:", req.params.id);
    const room = await Room.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!room) {
      console.log("No room found with ID:", req.params.id);
      return res.status(404).json({ msg: "No Room Found!" });
    }

    let fileName = room.image;
    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase())) {
        console.log("Invalid image type:", ext);
        return res.status(422).json({ msg: "Invalid Images" });
      }
      if (fileSize > 5000000) {
        console.log("Image size too large:", fileSize);
        return res.status(422).json({ msg: "Images must be less than 5 MB" });
      }

      const filepath = `./public/images/${room.image}`;
      if (fs.existsSync(filepath)) {
        fs.unlink(filepath, (err) => {
          if (err) {
            console.log("Error deleting old image:", err);
            return res.status(500).json({ msg: err.message });
          }
        });
      }

      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) {
          console.log("Error saving new image:", err);
          return res.status(500).json({ msg: err.message });
        }
      });
    }

    const { kode, tipe, fasilitas, ukuran, price } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    await Room.update(
      {
        kode,
        tipe,
        fasilitas,
        ukuran,
        price,
        image: fileName,
        url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("Room updated successfully:", req.params.id);
    res.status(200).json({ msg: "Room Updated Successfully!" });
  } catch (error) {
    console.log("Error updating room:", error);
    res.status(500).json({ msg: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    console.log(`Received request to delete room with id: ${req.params.id}`);
    const room = await Room.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!room) {
      console.log("No Room Found!");
      return res.status(404).json({ msg: "No Room Found!" });
    }

    const filepath = `./public/images/${room.image}`;
    if (fs.existsSync(filepath)) {
      console.log(`Deleting file: ${filepath}`);
      try {
        fs.unlinkSync(filepath);
      } catch (err) {
        console.error("Error deleting file:", err);
        return res.status(500).json({ msg: "Failed to delete room image" });
      }
    } else {
      console.log(`File not found: ${filepath}`);
    }

    try {
      await Room.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log("Room Deleted Successfully!");
      res.status(200).json({ msg: "Room Deleted Successfully!" });
    } catch (err) {
      console.error("Error deleting room from database:", err);
      res.status(500).json({ msg: "Failed to delete room from database" });
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ msg: "Failed to delete room" });
  }
};
