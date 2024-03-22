import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";

export default function Team({ name, points, onPress, image, onRemove, onChangeText }) {
  const [teamName, setTeamName] = useState(name);

  const handleTextChange = (text) => {
    setTeamName(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.team}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.text}>{points}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image resizeMode="cover" style={styles.cards} source={image} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={teamName}
        onChangeText={handleTextChange}
        placeholder="Nome do Time" placeholderTextColor="white"
      />
      <TouchableOpacity onPress={onRemove} style={styles.removePointButton}>
        <Text style={styles.removePointButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  team: {
    justifyContent: "center",
    alignItems: "center",
  },
  teamName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#ffffff",
  },
  text: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: 8,
    color: "#ffffff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 16,
  },
  cards: { width: 150, height: 220 },
  input: {
    height: 40,
    borderColor: "#ffffff",
    borderWidth: 1,
    color: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    width: 150,
  },
  removePointButton: {
    marginTop: 25,
    backgroundColor: "#FF0000",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  removePointButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
    width: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});
