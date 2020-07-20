-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 20, 2020 at 04:30 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_and_sql_aide_memoire_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts_tb`
--

CREATE TABLE `posts_tb` (
  `id_post` int(11) NOT NULL,
  `title_post` varchar(255) DEFAULT NULL,
  `body_post` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts_tb`
--

INSERT INTO `posts_tb` (`id_post`, `title_post`, `body_post`) VALUES
(62, 'Updated Title', 'test'),
(63, 'Updated Title', 'Argumentum baculinum non semper decorum est...'),
(64, 'Updated Title', 'Vicus gallicus parvus est.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts_tb`
--
ALTER TABLE `posts_tb`
  ADD PRIMARY KEY (`id_post`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts_tb`
--
ALTER TABLE `posts_tb`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
