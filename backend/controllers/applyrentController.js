import ApplyRent from "../models/applyrentModel.js";
import path from "path";
import fs from "fs";

export const getApplyRent = async (req, res) => {
  try {
    const response = await ApplyRent.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getApplyRentById = async (req, res) => {
  try {
    const response = await ApplyRent.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addApplyRent = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { full_name, gender, address, phone } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get(
    "host"
  )}/images/applyrent/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/applyrent/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await ApplyRent.create({
        full_name: full_name,
        gender: gender,
        address: address,
        phone: phone,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Apply Rent Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const deleteApplyRent = async (req, res) => {
  const applyrent = await ApplyRent.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!applyrent) return res.status(404).json({ msg: "No Apply Rent found!" });

  try {
    const filepath = `./public/images/applyrent/${applyrent.image}`;
    fs.unlinkSync(filepath);
    await ApplyRent.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "ApplyRent Delected Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
