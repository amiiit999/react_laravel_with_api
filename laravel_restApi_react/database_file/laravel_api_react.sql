-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: laravel_api_react
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (6,'2014_10_12_000000_create_users_table',1),(7,'2014_10_12_100000_create_password_resets_table',1),(8,'2019_08_19_000000_create_failed_jobs_table',1),(9,'2019_12_14_000001_create_personal_access_tokens_table',1),(10,'2021_12_15_051112_create_user_infos_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\UserInfo',1,'ttt_Token','669b32b09d474e7a7d8f111b1b45c5f87633a307f386e7be0451d1e58423e063','[\"*\"]',NULL,'2021-12-16 04:56:13','2021-12-16 04:56:13'),(2,'App\\Models\\UserInfo',2,'ttt_Token','301890710516072be9d1c567edd3e19597c64b37c9dfb8173e809566b5a451cd','[\"*\"]',NULL,'2021-12-16 04:57:19','2021-12-16 04:57:19'),(3,'App\\Models\\UserInfo',3,'ttt_Token','1d9ffaa71a2c8924f0a10d1c91f59ede0cd6005f524f63c2b0a65f20ff5eb011','[\"*\"]',NULL,'2021-12-16 05:09:54','2021-12-16 05:09:54'),(4,'App\\Models\\UserInfo',4,'ttt_Token','2eb582b2c32e16c320c4c9a5c784065f3d8d4f73d9ba3ddcb1a5b1e82ebe3428','[\"*\"]',NULL,'2021-12-16 05:11:54','2021-12-16 05:11:54'),(5,'App\\Models\\UserInfo',5,'ttt_Token','956d81a8dcf3072eb2a0d9a716107b3a6104acdf5563f8dfd0ed4dc159090653','[\"*\"]',NULL,'2021-12-16 05:20:42','2021-12-16 05:20:42'),(6,'App\\Models\\UserInfo',6,'ttt_Token','cf87c869fa61933696a02bd41a356451eebe3670a418c4fafe04d0451b9d94a8','[\"*\"]',NULL,'2021-12-16 05:23:09','2021-12-16 05:23:09'),(7,'App\\Models\\UserInfo',7,'ttt_Token','476a8060bb2f55757c7eb637ca3153ffe8a65dcd63cf3672882a6d94d3a73286','[\"*\"]',NULL,'2021-12-16 05:39:35','2021-12-16 05:39:35'),(8,'App\\Models\\UserInfo',8,'ttt_Token','11010e426f5017074b9d3d4d5b2ef4c2360cdf2f76bb7434f96d53472a4159cc','[\"*\"]',NULL,'2021-12-16 05:39:56','2021-12-16 05:39:56'),(9,'App\\Models\\User',1,'amiiitshah@gmail.com_Token','47f4852bbdf6ad50ca608846f597695a4fae6309f302ac9184af275e0d37fdbe','[\"*\"]',NULL,'2021-12-16 05:45:53','2021-12-16 05:45:53'),(10,'App\\Models\\UserInfo',9,'tets_Token','574f218c71db847b570cea7d88a98f9918bd2227b1320838fd4851669756187e','[\"*\"]',NULL,'2021-12-16 05:47:29','2021-12-16 05:47:29'),(11,'App\\Models\\UserInfo',10,'test_Token','7514fbcd093c935999aaa31d2fac09304651a9227ce3be681f6d072c82e08864','[\"*\"]',NULL,'2021-12-16 07:48:29','2021-12-16 07:48:29'),(12,'App\\Models\\UserInfo',11,'test_Token','16dbd2020a7cefe648db1dcbf42ea75201a4f4076f412c112a51f7007126206c','[\"*\"]',NULL,'2021-12-16 07:48:41','2021-12-16 07:48:41'),(13,'App\\Models\\UserInfo',12,'test_Token','7d83dd28bf733f19b730ab3bb5428e54ee721e6cbcbccf6f592ba5a6e87e86af','[\"*\"]',NULL,'2021-12-16 07:49:14','2021-12-16 07:49:14'),(14,'App\\Models\\UserInfo',13,'test_Token','8bb301b392a91bc99ea0e5e2284a577dcad7ee99ed078ca4b112d6efe19dd59a','[\"*\"]',NULL,'2021-12-16 07:58:49','2021-12-16 07:58:49');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_infos`
--

DROP TABLE IF EXISTS `user_infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_infos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_joining` date NOT NULL,
  `phone_number` bigint NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_infos`
--

LOCK TABLES `user_infos` WRITE;
/*!40000 ALTER TABLE `user_infos` DISABLE KEYS */;
INSERT INTO `user_infos` VALUES (1,1,'rrrr','tttt','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 04:56:13','2021-12-16 04:56:13'),(2,1,'sss','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 04:57:19','2021-12-16 04:57:19'),(3,2,'helllo','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:09:54','2021-12-16 05:09:54'),(4,2,'hello','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:11:54','2021-12-16 05:11:54'),(5,2,'ttt','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:20:42','2021-12-16 05:20:42'),(6,2,'ttt','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:23:09','2021-12-16 05:23:09'),(7,1,'ttt','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:39:35','2021-12-16 05:39:35'),(8,1,'ttt','rrr','2021-12-08',8585585658,'ttt','Male',NULL,'2021-12-16 05:39:56','2021-12-16 05:39:56'),(9,1,'ttt','rrr','2021-12-01',8585585658,'tets','Male',NULL,'2021-12-16 05:47:29','2021-12-16 05:47:29'),(10,1,'tets','rrr','2021-12-10',8585585658,'test','Male',NULL,'2021-12-16 07:48:29','2021-12-16 07:48:29'),(11,1,'tets','rrr','2021-12-10',8585585658,'test','Male',NULL,'2021-12-16 07:48:40','2021-12-16 07:48:40'),(12,1,'tets','rrr','2021-12-10',8585585658,'test','Male',NULL,'2021-12-16 07:49:14','2021-12-16 07:49:14'),(13,1,'tets','rrr','2021-12-10',8585585658,'test','Male',NULL,'2021-12-16 07:58:49','2021-12-16 07:58:49');
/*!40000 ALTER TABLE `user_infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'aadarsh','amiiitshah@gmail.com',NULL,'$2y$10$NRMNCHZ/mdFTpBO96vitQuvDoJkfAeVtjppF4aGFJyQMsexCwXReu',NULL,'2021-12-16 05:45:52','2021-12-16 05:45:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-20 14:59:50
