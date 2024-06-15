import React from "react";
import {
  Section,
  Content,
  Heading,
  Paragraph,
} from "../styles/KeunggulanSectionStyles";
import backgroundImage from "../img/bg.jpg";

const KeunggulanSection = () => {
  return (
    <Section backgroundImage={backgroundImage}>
      <Content>
        <Heading>Keunggulan Bang Kost</Heading>
        <Paragraph>
          Ada beberapa fitur di Bang Kost yang bisa anda pakai:
        </Paragraph>
        <Paragraph>
          1. Desain Responsif : Website bangkost dirancang agar terlihat menarik
          dan berfungsi dengan baik di berbagai perangkat, termasuk ponsel,
          tablet, dan komputer.
        </Paragraph>
        <Paragraph>
          2. Navigasi Mudah : Antarmuka pengguna yang intuitif memudahkan
          pengunjung untuk menemukan informasi yang mereka butuhkan dengan
          cepat, seperti informasi kamar, fasilitas, dan harga.
        </Paragraph>
        <Paragraph>
          3. Fitur Pencarian Lanjutan : Pengguna dapat mencari kamar kos
          berdasarkan kriteria spesifik seperti harga, fasilitas, lokasi, dan
          tipe kamar.
        </Paragraph>
        <Paragraph>
          4. Booking Online : Memungkinkan calon penyewa untuk memesan kamar kos
          secara online dengan mudah dan aman.
        </Paragraph>
        <Paragraph>
          5. Informasi Lengkap : Setiap kamar kos memiliki halaman detail yang
          mencakup foto, harga, tipe kamar dan fasilitas yang ditawarkan.
        </Paragraph>
        <Paragraph>
          6. Manajemen Kamar : Fitur bagi pemilik kos untuk mengelola daftar
          kamar, memantau status booking, dan memperbarui informasi secara
          real-time.
        </Paragraph>
        <Paragraph>
          7. Dukungan Pelanggan : Layanan dukungan pelanggan yang responsif
          melalui chat, email, atau telepon untuk membantu pengguna dengan
          pertanyaan atau masalah yang mereka hadapi.
        </Paragraph>
        <Paragraph>
          Kami berharap BangKost bisa menjadi satu aplikasi untuk semua
          kebutuhan kost Anda.
        </Paragraph>
      </Content>
    </Section>
  );
};

export default KeunggulanSection;
