-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: artessan_app
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- database

drop database if exists artessan_app;

create database artessan_app;

use artessan_app;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rolId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nico','admin@mail.com','123456',NULL,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Ismael','user@mail.com','123456',NULL,2,'0000-00-00 00:00:00','2023-04-23 16:26:31'),(3,'Mellisent','mslyman1@go.com','O1rdg9z8Ja','https://robohash.org/atquenemoeos.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'Bear','bguerin2@joomla.org','xiokEul2P','https://robohash.org/iurevoluptatessequi.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'Falito','fscamal3@dropbox.com','vReoJk7HE','https://robohash.org/numquamdoloremtempore.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'Elyn','eblaszkiewicz4@youku.com','EaxzTxNceDo','https://robohash.org/doloremidaccusantium.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'Marris','mbroseke5@digg.com','ztmCct','https://robohash.org/velitconsequaturut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'Odessa','obrickell6@dot.gov','nGACds0','https://robohash.org/architectoquasiet.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,'Humfrey','hspeenden7@narod.ru','A7KY7AvIJGxg','https://robohash.org/sitomnisvoluptatibus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,'Stephanie','smussalli8@issuu.com','GLiTXlC','https://robohash.org/accusamusafugit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,'Berti','bblinkhorn9@deliciousdays.com','I5JuV00OPx6l','https://robohash.org/ipsaeadolore.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(12,'Keelby','kwickratha@symantec.com','pDgsVEP','https://robohash.org/sintquasquia.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(13,'Elicia','ejudeb@zimbio.com','pWgnAux','https://robohash.org/natusquiset.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(14,'Donaugh','dcallisterc@wikia.com','rzL0z9','https://robohash.org/quiitaquevoluptatem.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(15,'Garth','griseboroughd@devhub.com','aZn4S1rS','https://robohash.org/reiciendisoptioodio.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(16,'Myrna','mallchornee@pcworld.com','oLgDGQ','https://robohash.org/utnullarepellendus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(17,'Lacy','lmcquirterf@imdb.com','grU3ShW','https://robohash.org/odiomaioresaut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(18,'Gerald','gbaildong@aboutads.info','Df4JijklL2Y','https://robohash.org/estetillum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(19,'Everett','eshirth@parallels.com','dx7w7vGfB','https://robohash.org/erroritaquevelit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(20,'Jo','jsuffieldi@cyberchimps.com','SYuaLvXwlLig','https://robohash.org/magnamrepudiandaeipsam.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(21,'Audrie','ahassettj@dot.gov','MjLs2hqO','https://robohash.org/aliassaepevitae.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(22,'Neysa','nlindnerk@discuz.net','ZHC6p2lLkG3m','https://robohash.org/iuresitconsequatur.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(23,'Jen','jfaggl@technorati.com','EW38Vla1','https://robohash.org/velmaximesuscipit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(24,'Buffy','bbromehedm@icq.com','6doLI82e','https://robohash.org/vitaeperspiciatisillo.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(25,'Sabina','sizkoveskin@cisco.com','fPkrRBkH','https://robohash.org/minussapienteiure.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(26,'Tomasina','tmallindero@msu.edu','grpQr7vKCUe','https://robohash.org/delectusnemorepellat.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(27,'Roby','rcamelinp@rambler.ru','eIBIDSici','https://robohash.org/etquiipsum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(28,'Estelle','eleemingq@imgur.com','o73bCGA','https://robohash.org/abnullaaut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(29,'Gerry','gvernerr@census.gov','8Q8mKVVYZP','https://robohash.org/etetharum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(30,'Evangeline','erothermels@delicious.com','xCb80UDbm','https://robohash.org/ipsamvoluptatemeos.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(31,'Erv','edeeringt@skype.com','V7YwLExerVw9','https://robohash.org/nihilquoneque.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(32,'Hall','hscardifieldu@utexas.edu','zHgR8Vjm','https://robohash.org/cumquesimiliqueplaceat.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(33,'Lock','lhourahanv@thetimes.co.uk','IvtwR8bEOw','https://robohash.org/abpossimuspraesentium.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(34,'Aryn','arizziellow@reddit.com','c4Xsfyo','https://robohash.org/cumqueestblanditiis.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(35,'Blondy','bsandonx@msn.com','ATU13Aee','https://robohash.org/assumendasedculpa.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(36,'Margarita','mkenyamy@cloudflare.com','bgwEcq','https://robohash.org/nametdolor.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(37,'Guy','gbuxceyz@adobe.com','gwEFnd','https://robohash.org/eiuscorruptised.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(38,'Xavier','xboribal10@jalbum.net','iX9HhhN','https://robohash.org/etipsumaut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(39,'Delcina','dbasnall11@nps.gov','fBq0rSiwOXO','https://robohash.org/enimnisiaperiam.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(40,'Anissa','amaffini12@taobao.com','DFagkV','https://robohash.org/asperioresquiset.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(41,'Wally','wmedlar13@scientificamerican.com','H7qbVztmw','https://robohash.org/quiarecusandaevoluptatem.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(42,'Hailey','hsappson14@apache.org','B1qc94','https://robohash.org/etquidemconsectetur.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(43,'Woodie','wcawsey15@desdev.cn','74oSh93bjP','https://robohash.org/praesentiumquiitaque.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(44,'Dulcea','dspeachley16@goo.ne.jp','h6YkGj','https://robohash.org/inducimussint.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(45,'Batsheva','bcerie17@answers.com','2FvHi1R','https://robohash.org/etipsumdignissimos.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(46,'Carver','cbernhardsson18@nba.com','rQMTc0iO8','https://robohash.org/quidemquiavoluptatem.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(47,'Tara','tbrandi19@sbwire.com','WgNpCMWV9','https://robohash.org/temporamodisint.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(48,'Leanora','lemeline1a@sohu.com','pjI5eZ','https://robohash.org/veritatisnostrumqui.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(49,'Conway','cheeley1b@simplemachines.org','Tcksx7U','https://robohash.org/etrecusandaenumquam.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(50,'Gregg','gloukes1c@taobao.com','CCTUAhuTacIH','https://robohash.org/ipsaminveritatis.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(51,'Marrilee','msplaven1d@yahoo.com','ZFrSazm6vN','https://robohash.org/magnamenimet.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(52,'Andromache','acreigan1e@dailymail.co.uk','aBO00RNU','https://robohash.org/sunterrorea.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(53,'Rayshell','rstoakes1f@e-recht24.de','w5k6zky2QDa','https://robohash.org/vitaeomniset.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(54,'Lynnelle','lvowdon1g@digg.com','muRpKJy9','https://robohash.org/etoptioaut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(55,'Vyky','vizkoveski1h@phpbb.com','7NDMAKxjj','https://robohash.org/minusametquia.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(56,'Guillermo','gdoorly1i@ovh.net','6dD2zK','https://robohash.org/voluptasidaut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(57,'Yard','ymacmychem1j@jimdo.com','zwly8ItxAk','https://robohash.org/magnirecusandaead.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(58,'Stanly','sleddy1k@addtoany.com','6rAD18t','https://robohash.org/mollitiapossimusquia.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(59,'Peta','pbendare1l@myspace.com','Um2O63akXMPh','https://robohash.org/esteanostrum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(60,'Bertie','bsutcliffe1m@paypal.com','UjBPLMW','https://robohash.org/sedenimsunt.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(61,'Merci','mguwer1n@prnewswire.com','GGSj7x','https://robohash.org/voluptateteneturvelit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(62,'Stephine','skellogg1o@blogs.com','4AjUxlT7ZV9R','https://robohash.org/consequaturexpeditaodit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(63,'Gracia','grawle1p@google.com.au','tPozNsEnUDk8','https://robohash.org/quiabeataeexpedita.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(64,'Howard','hedens1q@admin.ch','Jvmw3Ye','https://robohash.org/numquamestquia.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(65,'Sande','ssalzen1r@networkadvertising.org','Qr0NiA','https://robohash.org/etofficianisi.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(66,'Tremain','tgrosier1s@aol.com','IHz6tv','https://robohash.org/doloreevenietin.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(67,'Ranique','rdryden1t@admin.ch','xJB2Lk1EF','https://robohash.org/eligendilaboreminus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(68,'Philly','pbarratt1u@un.org','banIh8a','https://robohash.org/repellatdictaerror.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(69,'Shirline','smctrustam1v@usnews.com','6QKeH3g0','https://robohash.org/molestiaecumquerecusandae.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(70,'Kittie','kstit1w@mysql.com','gNnJ3S2','https://robohash.org/debitisnostrumeius.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(71,'Tildy','tcowern1x@marriott.com','QKZMyh0e','https://robohash.org/sedetut.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(72,'Harli','hvasin1y@homestead.com','f9tJhGCljS','https://robohash.org/temporaquibusdamiure.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(73,'Myrah','mdeekes1z@drupal.org','S4uEnzfxT2','https://robohash.org/atqueexercitationemquidem.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(74,'Teena','trodriguez20@harvard.edu','eHPwajxO','https://robohash.org/etfacerererum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(75,'Jules','jrosling21@pagesperso-orange.fr','lNN3HrkLCA4','https://robohash.org/enimnecessitatibusconsequatur.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(76,'Em','eyerbury22@tinyurl.com','3ojMdp','https://robohash.org/ipsamconsequaturaccusamus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(77,'Deedee','dmacci23@fastcompany.com','4MKjHwyLKN','https://robohash.org/liberoimpedittemporibus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(78,'Jeanelle','jbassford24@hubpages.com','V4XqCy','https://robohash.org/impeditconsequaturipsum.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(79,'Fredra','fmcnickle25@wired.com','k3HUNLe','https://robohash.org/laborumiureipsa.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(80,'Heywood','hdunkerly26@cargocollective.com','NSQAXQW','https://robohash.org/nihilomnisvoluptatibus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(81,'Elroy','emcduall27@vistaprint.com','eoPtRlyBBG2Z','https://robohash.org/similiquetemporibusdolorem.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(82,'Ransell','rbennallck28@squarespace.com','HlvAuj','https://robohash.org/suntconsequaturnobis.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(83,'Susie','smoreinis29@nhs.uk','XpvaIP','https://robohash.org/placeatvoluptatemaccusantium.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(84,'Helge','hgaughan2a@nature.com','1LJ0TH','https://robohash.org/quosrerumet.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(85,'Tamiko','thambridge2b@ucoz.com','uoKJdzVX','https://robohash.org/utvoluptatemvoluptas.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(86,'Juline','jmcquarter2c@trellian.com','NZgN4v0K','https://robohash.org/ullamutitaque.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(87,'Torrie','tguly2d@dmoz.org','izirI7nP9','https://robohash.org/etnatusid.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(88,'Martina','mgoldsworthy2e@com.com','AM8dzvfO5Zji','https://robohash.org/magnamremanimi.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(89,'Ad','acommusso2f@over-blog.com','deYekW0GvpdL','https://robohash.org/doloressequiaccusantium.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(90,'Sibyl','sdaggett2g@time.com','APVhrsjab','https://robohash.org/inciduntlaboriosamodit.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(91,'Ninetta','nrodden2h@yelp.com','bW8tZMkxXT','https://robohash.org/quamillovoluptas.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(92,'Fredericka','fdishman2i@prnewswire.com','tnwNRms5aUrq','https://robohash.org/quorepellatincidunt.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(93,'Ludwig','lsevior2j@angelfire.com','lP87MYTJD','https://robohash.org/quonumquamiusto.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(94,'Ashlee','athomazin2k@myspace.com','sIcCAS','https://robohash.org/praesentiumetconsequatur.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(95,'Ingrim','ibyrnes2l@1688.com','sThXfb3','https://robohash.org/minimaadea.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(96,'Garvy','gtellesson2m@nasa.gov','DQZJWqX0DWiT','https://robohash.org/nihilsintitaque.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(97,'Gavra','gcallcott2n@va.gov','1ohsrm','https://robohash.org/etconsequaturdelectus.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(98,'Ty','tgartland2o@tuttocitta.it','Azc07caEC','https://robohash.org/laudantiumcupiditateasperiores.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(99,'Celestia','clascelles2p@wikimedia.org','iOYV7s','https://robohash.org/nihilsimiliqueeius.png?size=50x50&set=set1',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(100,NULL,'email@email.com',NULL,NULL,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(101,'MOTO G42','admin@mail.con','123456','',2,'2023-04-23 14:43:20','2023-04-23 14:43:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2023-04-23 02:55:18','2023-04-23 02:55:18'),(2,'user','2023-04-23 02:55:18','2023-04-23 02:55:18');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'comida','2023-04-23 02:55:18','2023-04-23 02:55:18'),(2,'artesanias','2023-04-23 02:55:18','2023-04-23 02:55:18'),(3,'pinturas','2023-04-23 02:55:18','2023-04-23 02:55:18');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `categoriesId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriesId` (`categoriesId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoriesId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Bijouterie',76000222,'se me rompio y tuve que borrar la descripcion jeje',10,'img4.jpg',1,'2023-04-23 02:55:18','2023-04-23 14:01:14'),(2,'Sombreros',760002,'Sombreros de distintos colores, variedad de diseño y colores por mayor',10,'2.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(3,'Colgantes',5000,'Colgantes de varios estilos, ideal para colgar en el hogar',10,'img8.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(4,'Macrame',1200,'Productos de Macrame, diseños a pedido, presupuesto a partir de 1200',10,'img6.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(5,'Pulseras',1000,'Pulseras y Colgantes hecho a mano, tienen muchas variedades y colores, se vende por mayor',10,'img5.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(6,'Pulseras ',1000,'Pulseras y Colgantes hecho a mano, tienen muchas variedades y colores, se vende por mayor',10,'img5.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(7,'Pulseras',1000,'Pulseras y Colgantes hecho a mano, tienen muchas variedades y colores, se vende por mayor',10,'img5.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(8,'Pulseras y Colgantes',1000,'Pulseras y Colgantes hecho a mano, tienen muchas variedades y colores, se vende por mayor',10,'img5.jpg',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(9,'Cake - Pancake',0,'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(10,'Cookie Dough - Oatmeal Rasin',0,'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia C',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(11,'Island Oasis - Peach Daiquiri',0,'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin ',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(12,'Mushroom - Morel Frozen',0,'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Eti',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(13,'Oil - Macadamia',0,'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt a',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(14,'Bar Special K',0,'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque ',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(15,'Tomatoes Tear Drop Yellow',0,'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sa',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(16,'Ice Cream Bar - Hagen Daz',0,'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede',10,'',1,'2023-04-23 02:55:18','2023-04-23 02:55:18'),(17,'ya basta multeeeer',76000,'NOOOOO!!!',10,'1682230962868_products_.jpeg',1,'2023-04-23 02:55:18','2023-04-23 06:22:42'),(19,'MOTO G42',0,'',10,'default-image.png',1,'2023-04-23 05:42:46','2023-04-23 06:47:43');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 13:56:34
