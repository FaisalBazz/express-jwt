-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Des 2023 pada 04.01
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_foods`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `daerah` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `foods`
--

INSERT INTO `foods` (`id`, `nama`, `daerah`, `deskripsi`, `createdAt`, `updatedAt`) VALUES
(1, 'Rendang', 'Padang', 'Makanan yang terbuat dari daging sapi', '2023-12-05 13:02:43', '2023-12-05 13:02:43'),
(3, 'Kerak Telur', 'Jakarta', 'Makanan yang terbuat dari bahan dasar telur', '2023-12-05 13:05:45', '2023-12-05 14:41:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `potos`
--

CREATE TABLE `potos` (
  `id` int(11) NOT NULL,
  `idfoods` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `potos`
--

INSERT INTO `potos` (`id`, `idfoods`, `path`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'wallpaperflare.com_wallpaper.jpg', '2023-12-06 11:52:57', '2023-12-06 11:52:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'faisalbas', '1111', 'faisal@yahoo.com', '2023-12-06 13:08:24', '2023-12-06 13:08:24'),
(2, 'rifky', '$2a$10$RxQV3NsI8nG6s/iV3SyJJOgAuIwnGn.ML4QbXO1Vk7mtlx/.0fvMy', 'rifky@yahoo.com', '2023-12-06 13:12:22', '2023-12-06 13:12:22'),
(3, 'maulana', '$2a$10$v1MswOTBMw292r6Tm6qVxufUn0BRpan2a1896ANA4wnp8/nTdHfXa', 'rifky@ya', '2023-12-06 13:39:24', '2023-12-06 13:39:24');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `potos`
--
ALTER TABLE `potos`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `potos`
--
ALTER TABLE `potos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
