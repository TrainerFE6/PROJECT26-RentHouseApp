import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import ImgAbout from "./assets/image/pexels-olly-774909.jpg";
import { Button, Modal } from "react-bootstrap";
function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    console.log("Data disimpan");
    setShow(false);
  };
  return (
    <div class=" justify-content-center mt-3 px-5">
      <div>
        <div style={{ textAlign: "center" }}>
          <span className=" fs-4">Edit Profile</span>
        </div>
        <div className=" p-3 " style={{ textAlign: "center" }}>
          <Image
            src={ImgAbout}
            style={{ height: "100px", width: "100px", paddingRight: "5px" }}
            alt="Responsive Image"
            roundedCircle
          />
        </div>
        <div class="card pb-5 shadow ">
          <div class="card-body ">
            <label for="exampleFormControlInput1" class="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama Lengkap"
            />
            <label for="exampleFormControlInput1" class="form-label">
              Jenis Kelamin
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Jenis Kelamin"
            />
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama Pemilik"
            />
            <label for="exampleFormControlInput1" class="form-label">
              No Telepon
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="No telp"
            />
            <label for="exampleFormControlInput1" class="form-label">
              Upload Image
            </label>
            <div class="input-group mb-3 py-1 px-2">
              <input type="file" class="form-control" id="inputGroupFile02" />
              <label class="input-group-text" for="inputGroupFile02">
                Upload
              </label>
            </div>
            <Button variant="primary" onClick={handleShow}>
              Simpan Data
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Konfirmasi Penyimpanan</Modal.Title>
              </Modal.Header>
              <Modal.Body>Apakah Anda ingin menyimpan data?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Batal
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Simpan
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
