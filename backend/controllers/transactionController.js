import Transaction from "../models/transactionModel.js";
import path from "path";
import fs from "fs";

export const getTransaction = async (req, res) => {
  try {
    const response = await Transaction.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const response = await Transaction.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addTransaction = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { fullName, address, gender, phone, room, price } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get(
    "host"
  )}/images/transaction/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/transaction/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Transaction.create({
        fullName: fullName,
        address: address,
        gender: gender,
        phone: phone,
        room: room,
        price: price,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Transaction Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const deleteTransaction = async (req, res) => {
  const transaksi = await Transaction.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!transaksi) return res.status(404).json({ msg: "No transaksi found!" });

  try {
    const filepath = `./public/images/transaction/${transaksi.image}`;
    fs.unlinkSync(filepath);
    await Transaction.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transaction Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
