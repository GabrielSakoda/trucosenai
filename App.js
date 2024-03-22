import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, ScrollView} from "react-native";
import logo from "./assets/truco-logo.png";
import img1 from "./assets/logo1.png";
import img2 from "./assets/logo2.png"
import Team from "./components/team";
import styles from "./Styles";

export default function App() {
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [winner, setWinner] = useState(null);

  function verificapontos(pontos, team) {
    if (pontos == 12) {
      setWinner(team);
    }
  }

  function removePoint(team) {
    if (team === "Time1") {
      setTime1(time1 > 0 ? time1 - 1 : 0);
    } else if (team === "Time2") {
      setTime2(time2 > 0 ? time2 - 1 : 0);
    }
  }

  return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
        <Modal visible={winner != null} transparent={true} animationType="slide">
          <View style={styles.modalView}>
            <Text style={styles.congratsText}>Parabéns, {winner} ganhou!!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setWinner(null);
                setTime1(0);
                setTime2(0);
              }}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Image source={logo} style={styles.logo} />
        <View style={styles.teams}>
          <Team
            image={img1}
            onPress={() => {
              var newScore = time1 + 1;
              setTime1(newScore);
              verificapontos(newScore, "Time1");
            }}
            onRemove={() => removePoint("Time1")}
            points={time1}
          />
          <Team
            image={img2}
            onPress={() => {
              var newScore = time2 + 1;
              setTime2(newScore);
              verificapontos(newScore, "Time2");
            }}
            onRemove={() => removePoint("Time2")}
            points={time2}
          />
        </View>
      </View>
    </ScrollView>
  );
}
