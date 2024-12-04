-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2024 at 10:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `presensi_online`
--

-- --------------------------------------------------------

--
-- Table structure for table `presensis`
--

CREATE TABLE `presensis` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `time` time DEFAULT NULL,
  `status` enum('hadir','izin','sakit','alpha') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `presensis`
--

INSERT INTO `presensis` (`id`, `userID`, `date`, `time`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 1, '2024-03-12 00:00:00', '12:50:00', 'hadir', '2024-12-02 08:18:07', '2024-12-02 08:18:07'),
(3, 1, '2024-03-12 00:00:00', '22:01:00', 'hadir', '2024-12-02 15:02:09', '2024-12-02 15:02:09'),
(4, 1, '2024-03-12 00:00:00', '22:01:00', 'hadir', '2024-12-02 15:02:11', '2024-12-02 15:02:11'),
(5, 1, '2024-03-12 00:00:00', '12:50:00', 'hadir', '2024-12-02 15:03:40', '2024-12-02 15:03:40'),
(8, 4, '2024-03-12 00:00:00', '12:50:00', 'hadir', '2024-12-02 15:40:27', '2024-12-02 15:40:27'),
(9, 4, '2024-03-12 00:00:00', '12:50:00', 'hadir', '2024-12-02 15:48:36', '2024-12-02 15:48:36'),
(10, 4, '2024-03-12 00:00:00', '12:50:00', 'hadir', '2024-12-02 15:48:48', '2024-12-02 15:48:48'),
(11, 4, '2024-03-12 00:00:00', '12:50:00', 'izin', '2024-12-02 15:49:01', '2024-12-02 15:49:01'),
(12, 4, '2024-03-12 00:00:00', '12:50:00', 'sakit', '2024-12-02 15:49:07', '2024-12-02 15:49:07'),
(13, 4, '2024-03-12 00:00:00', '12:50:00', 'alpha', '2024-12-02 15:49:14', '2024-12-02 15:49:14'),
(14, 1, '2024-03-12 00:00:00', '07:20:00', 'hadir', '2024-12-03 00:20:56', '2024-12-03 00:20:56'),
(15, 1, '2024-03-12 00:00:00', '07:23:00', 'hadir', '2024-12-03 00:23:48', '2024-12-03 00:23:48'),
(16, 1, '2024-03-12 00:00:00', '07:23:00', 'hadir', '2024-12-03 00:25:10', '2024-12-03 00:25:10'),
(17, 1, '2024-03-12 00:00:00', '07:23:00', 'hadir', '2024-12-03 00:28:30', '2024-12-03 00:28:30'),
(18, 1, '2024-03-12 00:00:00', '07:23:00', 'hadir', '2024-12-03 00:28:38', '2024-12-03 00:28:38'),
(19, 1, '2024-03-12 00:00:00', '07:40:00', 'hadir', '2024-12-03 00:40:10', '2024-12-03 00:40:10'),
(20, 1, '2024-12-03 00:00:00', '07:40:00', 'hadir', '2024-12-03 02:03:34', '2024-12-03 02:03:34'),
(21, 1, '2024-12-04 00:00:00', '07:40:00', 'hadir', '2024-12-03 02:29:19', '2024-12-03 02:29:19'),
(22, 1, '2024-12-05 00:00:00', '07:40:00', 'hadir', '2024-12-03 02:29:23', '2024-12-03 02:29:23'),
(23, 1, '2024-12-06 00:00:00', '07:40:00', 'hadir', '2024-12-03 02:29:28', '2024-12-03 02:29:28'),
(24, 1, '2024-12-07 00:00:00', '07:40:00', 'sakit', '2024-12-03 02:29:37', '2024-12-03 02:29:37'),
(25, 1, '2024-12-08 00:00:00', '07:40:00', 'sakit', '2024-12-03 02:29:42', '2024-12-03 02:29:42'),
(26, 1, '2024-12-09 00:00:00', '07:40:00', 'sakit', '2024-12-03 02:29:48', '2024-12-03 02:29:48'),
(27, 1, '2024-12-09 00:00:00', '13:19:00', 'sakit', '2024-12-03 06:19:39', '2024-12-03 06:19:39'),
(28, 1, '2024-12-09 00:00:00', '13:46:00', 'sakit', '2024-12-03 06:46:48', '2024-12-03 06:46:48'),
(29, 1, '2024-12-10 00:00:00', '13:46:00', 'hadir', '2024-12-03 06:47:02', '2024-12-03 06:47:02'),
(30, 1, '2024-11-10 00:00:00', '13:46:00', 'hadir', '2024-12-03 06:49:22', '2024-12-03 06:49:22');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241202005533-create-user.js'),
('20241202044547-create-presensi.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('Siswa','Karyawan') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Bimantara Aryasatya Putra Maharani', 'bimantara_maharani', '202cb962ac59075b964b07152d234b70', 'Siswa', '2024-12-02 02:09:29', '2024-12-03 00:30:20'),
(4, 'David Bayu', 'david_bayu', '202cb962ac59075b964b07152d234b70', 'Karyawan', '2024-12-02 04:27:06', '2024-12-02 04:27:06'),
(5, 'John Smith', 'john_smith', '202cb962ac59075b964b07152d234b70', 'Karyawan', '2024-12-02 06:43:23', '2024-12-02 06:43:23'),
(9, 'Jeki Gondes', 'jeki_gondes', '202cb962ac59075b964b07152d234b70', 'Siswa', '2024-12-02 06:51:33', '2024-12-03 00:50:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `presensis`
--
ALTER TABLE `presensis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `presensis`
--
ALTER TABLE `presensis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `presensis`
--
ALTER TABLE `presensis`
  ADD CONSTRAINT `presensis_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
