-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2019 at 12:10 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manyulogistics`
--

-- --------------------------------------------------------

--
-- Table structure for table `MLPL_Driver_Support_Cashes`
--

CREATE TABLE `MLPL_Driver_Support_Cashes` (
  `id` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `openBookingId` int(11) NOT NULL,
  `driverName` varchar(255) DEFAULT NULL,
  `driverContact` varchar(255) DEFAULT NULL,
  `requestcashDate` date DEFAULT NULL,
  `releasecashDate` date DEFAULT NULL,
  `paymentType` varchar(255) DEFAULT NULL,
  `requestcashAmount` decimal(14,2) DEFAULT NULL,
  `releasecashAmount` decimal(14,2) DEFAULT NULL,
  `requestcashTime` time DEFAULT NULL,
  `releasecashTime` time DEFAULT NULL,
  `requestcashRemarks` text,
  `releasecashRemarks` text,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `createdBy` int(11) NOT NULL,
  `updatedBy` int(11) DEFAULT NULL,
  `resolvedBy` int(11) DEFAULT NULL,
  `unresolvedBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MLPL_Driver_Support_Cashes`
--

INSERT INTO `MLPL_Driver_Support_Cashes` (`id`, `vehicleId`, `openBookingId`, `driverName`, `driverContact`, `requestcashDate`, `releasecashDate`, `paymentType`, `requestcashAmount`, `releasecashAmount`, `requestcashTime`, `releasecashTime`, `requestcashRemarks`, `releasecashRemarks`, `status`, `createdBy`, `updatedBy`, `resolvedBy`, `unresolvedBy`, `createdAt`, `updatedAt`) VALUES
(2, 55, 1, 'Rahishuddin', '9634979233', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, 1, 1, '2019-04-01 17:46:50', '2019-04-02 12:07:37'),
(3, 55, 1, 'Rahishuddin', '9634979233', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, 1, 1, '2019-04-01 17:52:13', '2019-04-02 11:09:42'),
(4, 55, 1, 'Rahishuddin', '9634979233', '2019-03-01', NULL, NULL, '22.00', NULL, '23:28:03', NULL, 'asdfadfa', NULL, 1, 1, NULL, 1, 1, '2019-04-01 17:58:03', '2019-04-02 12:07:30'),
(5, 55, 1, 'Rahishuddin', '9634979233', '2019-03-01', NULL, NULL, '34.00', NULL, '23:28:42', NULL, '33sgf', NULL, 1, 1, NULL, 1, 1, '2019-04-01 17:58:42', '2019-04-02 12:07:35'),
(6, 55, 1, 'Rahishuddin', '9634979233', '2019-04-23', NULL, NULL, '12.00', NULL, '00:33:59', NULL, '12', NULL, 1, 1, NULL, 1, 1, '2019-04-01 19:03:59', '2019-04-02 12:07:34'),
(7, 55, 1, 'Rahishuddin', '9634979233', '2019-03-02', '2019-04-26', 'Driver Acount', '12.00', '3434.00', '01:05:48', '23:20:38', 'sa', '23', 0, 1, 1, 1, 1, '2019-04-01 19:35:48', '2019-04-02 15:11:42'),
(8, 55, 1, 'Rahishuddin', '9634979233', '2019-03-02', '2019-04-04', 'Driver Acount', '3400.00', '2300.00', '20:48:11', '22:49:36', 'okay', 'Okay', 1, 1, 1, NULL, NULL, '2019-04-02 15:18:11', '2019-04-02 15:18:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `MLPL_Driver_Support_Cashes`
--
ALTER TABLE `MLPL_Driver_Support_Cashes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicleId` (`vehicleId`),
  ADD KEY `openBookingId` (`openBookingId`),
  ADD KEY `createdBy` (`createdBy`),
  ADD KEY `updatedBy` (`updatedBy`),
  ADD KEY `resolvedBy` (`resolvedBy`),
  ADD KEY `unresolvedBy` (`unresolvedBy`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `MLPL_Driver_Support_Cashes`
--
ALTER TABLE `MLPL_Driver_Support_Cashes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `MLPL_Driver_Support_Cashes`
--
ALTER TABLE `MLPL_Driver_Support_Cashes`
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `MLPL_Vehicles` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_2` FOREIGN KEY (`openBookingId`) REFERENCES `MLPL_Bookings_Open_Market_Details` (`id`),
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_3` FOREIGN KEY (`createdBy`) REFERENCES `Users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_4` FOREIGN KEY (`updatedBy`) REFERENCES `Users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_5` FOREIGN KEY (`resolvedBy`) REFERENCES `Users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `mlpl_driver_support_cashes_ibfk_6` FOREIGN KEY (`unresolvedBy`) REFERENCES `Users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
