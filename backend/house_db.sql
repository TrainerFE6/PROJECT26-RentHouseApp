-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jun 2024 pada 03.54
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `house_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(6, 'Tegar Robi', 'tegarrobi@gmail.com', '$2b$10$Y3mXhwSfGcrF3xHLJu1lhefAJWJnuoC9goAvsOcIpMOq9eEdFmHge', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjo2LCJuYW1lIjoiVGVnYXIgUm9iaSIsImVtYWlsIjoidGVnYXJyb2JpQGdtYWlsLmNvbSIsImlhdCI6MTcxNzM5MDYzNSwiZXhwIjoxNzE3NDc3MDM1fQ.9DXz5aDQtuY1aA6jf4ij7YnQ795uofAfa0i7ApO0m9A', '2024-05-31 16:20:43', '2024-06-03 04:57:15'),
(7, 'Slam Aziz', 'ayonksana@gmail.com', '$2b$10$Ky9PRGCTdKlLGGztQpJB.u45PBYhj1aVRWDb0VElOhVnoZvGVJWWS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjo3LCJuYW1lIjoiU2xhbSBBeml6IiwiZW1haWwiOiJheW9ua3NhbmFAZ21haWwuY29tIiwiaWF0IjoxNzE3MzkwNjAzLCJleHAiOjE3MTc0NzcwMDN9.uafYi2xq0p50Fe98xAUBGXtG1ITXKbXCp0MB8xezqS8', '2024-05-31 16:21:48', '2024-06-03 04:56:43'),
(8, 'Novan', 'novanmaulana@gmail.com', '$2b$10$5XkUnGdEaS9xGwdOArljruIzrOIkAD/L8g61nYKFQWZ7YhBgJPS6.', NULL, '2024-06-03 04:27:19', '2024-06-03 04:28:26'),
(10, 'ponang yoga', 'ponangyoga@gmail.com', '$2b$10$kV5cN0ovMRoUkp.sTwgKrepIaizoX.VfCdC6Cc7bd2BQ.zWrHkSUS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxMCwibmFtZSI6InBvbmFuZyB5b2dhIiwiZW1haWwiOiJwb25hbmd5b2dhQGdtYWlsLmNvbSIsImlhdCI6MTcxNzM5MDYxNiwiZXhwIjoxNzE3NDc3MDE2fQ.1k5CHDV9e4kEq0jbqLopS3P4oFbnfUEMLXeQjFtbjbw', '2024-06-03 04:34:01', '2024-06-03 04:56:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `tipe` varchar(255) DEFAULT NULL,
  `fasilitas` varchar(255) DEFAULT NULL,
  `ukuran` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`id`, `kode`, `tipe`, `fasilitas`, `ukuran`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'kamar 1', 'VIP', 'Ac, kamar mandi dalam', '3 x 4 m', '7e98a1580d70e9c8789a3de7696e6838.jpg', 'http://localhost:5000/images/7e98a1580d70e9c8789a3de7696e6838.jpg', '2024-06-03 16:21:31', '2024-06-03 16:21:31');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
