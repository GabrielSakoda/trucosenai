import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, Modal, Alert} from "react-native";
import logo from "./assets/truco-logo.png";
import naipe from "./assets/naipe-logo.png";
import Team from "./components/team";
import styles from "./Styles";

export default function App() {
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [winner, setWinner] = useState(null);
  function verificapontos(pontos, team) {
    if(pontos == 12){
      setWinner(team);
    }
  }
  return (
    <View style={styles.container}>
      <Modal visible={winner != null} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.congratsText}>Parabéns, {winner} ganhou!!</Text>
          <TouchableOpacity style ={styles.closeButton} onPress={() => {
              setWinner(null);
              setTime1(0);
              setTime2(0);
              }
            }>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
        </View>
      </Modal>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.team}>
        <Team image={naipe} onPress={() => {
          var newScore = time1 + 1;
          setTime1(newScore);
          verificapontos(newScore, "Time1");
        }} points={time1}/>
        <Team image={naipe} onPress={() => {
          var newScore = time2 + 1;
          setTime2(newScore);
          verificapontos(newScore, "Time2");
        }} points={time2}/>
      </View>
    </View>
  )
}