const express = require("express");
const router = express.Router();
const Tenant = require("../models/tenantModel");

// POST /api/tenants
router.post("/", async (req, res) => {
  try {
    // Logika untuk menyimpan data penyewa
    const tenant = await Tenant.create(req.body);
    res.json(tenant);
  } catch (error) {
    console.error("Gagal menyimpan data penyewa:", error);
    res.status(500).json({ error: "Gagal menyimpan data penyewa" });
  }
});

module.exports = router;
