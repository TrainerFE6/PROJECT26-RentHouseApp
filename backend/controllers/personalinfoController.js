import PersonalInfo from "../models/personalinfoModel.js";

// Get all personal info
export const getAllPersonalInfo = async (req, res) => {
  try {
    const response = await PersonalInfo.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Get personal info by ID
export const getPersonalInfoById = async (req, res) => {
  try {
    const response = await PersonalInfo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Create a new personal info
// export const createPersonalInfo = async (req, res) => {
//   try {
//     const { full_name, gender, email, phone, address } = req.body;
//     await PersonalInfo.create({
//       full_name,
//       gender,
//       email,
//       phone,
//       address,
//     });
//     res.status(201).json({ msg: "Personal Info Created Successfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createPersonalInfo = async (req, res) => {
  try {
    const { full_name, gender, email, phone, address } = req.body;

    // Periksa apakah email sudah ada di database
    const existingInfo = await PersonalInfo.findOne({
      where: { email },
    });

    if (existingInfo) {
      return res.status(400).json({
        msg: "Kamu sudah pernah mengisi data pribadi, Silahkan abaikan form ini !",
      });
    }

    // Jika tidak ada, tambahkan data baru
    await PersonalInfo.create({
      full_name,
      gender,
      email,
      phone,
      address,
    });
    res.status(201).json({ msg: "Informasi pribadi berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: "Informasi pribadi Gagal ditambahkan" });
    console.log(error.message);
  }
};

// Update personal info by ID
export const updatePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!personalInfo) {
      return res.status(404).json({ msg: "No Personal Info Found!" });
    }

    const { full_name, gender, email, phone, address } = req.body;
    await PersonalInfo.update(
      { full_name, gender, email, phone, address },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Personal Info Updated Successfully!" });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete personal info by ID
export const deletePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!personalInfo) {
      return res.status(404).json({ msg: "No Personal Info Found!" });
    }

    await PersonalInfo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Personal Info Deleted Successfully!" });
  } catch (error) {
    console.log(error.message);
  }
};
