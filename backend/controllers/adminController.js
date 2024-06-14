import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      attributes: ["id", "username", "email"],
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Admin.create({
      username: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.error(error);
  }
};

export const Login = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, admin[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const adminId = admin[0].id;
    const name = admin[0].username;
    const email = admin[0].email;
    const accesssToken = jwt.sign(
      { adminId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { adminId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accesssToken });
    await Admin.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: adminId,
        },
      }
    );
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const admin = await Admin.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if(!admin[0]) return res.sendStatus(403);
  const adminId = admin[0].id;
  await Admin.update({refresh_token: null}, {
    where: {
      id: adminId
    }
  });
  res.clearCookie('refreshToken');
  return res.sendStatus(200)
};
