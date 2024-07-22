CREATE DATABASE zoo;

USE zoo;

CREATE TABLE animaux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    habitat VARCHAR(100) NOT NULL
);

CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    habitat VARCHAR(100) NOT NULL,
    note TEXT NOT NULL
);

CREATE TABLE consommations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    animal VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    heure TIME NOT NULL,
    type_nourriture VARCHAR(100) NOT NULL,
    quantite DECIMAL(10, 2) NOT NULL
);

CREATE TABLE comptes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('employe', 'veterinaire', 'administrateur') NOT NULL
);
