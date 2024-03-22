import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Team({ points, onPress, image }) {
    return (
        <View style={styles.team}>
            <Text style={styles.text}>{points}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode="cover" style={styles.cards} source={image} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
team: {
justifyContent: "center",
alignItems: "center",
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
cards: { width: 130, height: 200 },
});