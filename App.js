import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  // === Informations de l'étudiant ===
  const etudiant = {
    nom: 'Ezzahraoui',
    prenom: 'Mehdi',
    age: 22,
    filiere: 'Génie Informatique',
    ecole: 'EMSI Casablanca',
    matricule: 'EMSI2025-1234',
  };

  // === Texte à encoder dans le QR Code ===
  const qrData = `
  Nom : ${etudiant.nom}
  Prénom : ${etudiant.prenom}
  Âge : ${etudiant.age}
  Filière : ${etudiant.filiere}
  École : ${etudiant.ecole}
  Matricule : ${etudiant.matricule}
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Fiche Étudiant</Text>

      {/* Photo de l'étudiant */}
      <Image
        source={require('./assets/logo-one-piece.jpg')} // Remplace cette URL par ta propre image
        style={styles.image}
      />

      {/* Informations de l'étudiant */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>👤 Nom : {etudiant.nom}</Text>
        <Text style={styles.infoText}>🧍 Prénom : {etudiant.prenom}</Text>
        <Text style={styles.infoText}>🎂 Âge : {etudiant.age} ans</Text>
        <Text style={styles.infoText}>💻 Filière : {etudiant.filiere}</Text>
        <Text style={styles.infoText}>🏫 École : {etudiant.ecole}</Text>
        <Text style={styles.infoText}>🆔 Matricule : {etudiant.matricule}</Text>
      </View>

      {/* QR Code généré à partir des informations */}
      <View style={styles.qrContainer}>
        <QRCode value={qrData} size={150} color="#000" backgroundColor="#fff" />
        <Text style={styles.qrLabel}>📎 QR Code de l’étudiant</Text>
      </View>
    </View>
  );
}

// === Styles ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0077b6',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#0077b6',
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: '#caf0f8',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 3,
    color: '#03045e',
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrLabel: {
    marginTop: 10,
    fontSize: 16,
    color: '#0077b6',
  },
});
