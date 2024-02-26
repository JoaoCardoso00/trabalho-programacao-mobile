import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [imageClicks, setImageClicks] = useState(0);
  const [theme, setTheme] = useState<"white" | "yellow">("white");

  return (
    <TouchableOpacity
      style={theme === "white" ? styles.container : styles.containerAlt}
      onPress={() => {
        theme === "white" ? setTheme("yellow") : setTheme("white");
        imageClicks !== 3 && setImageClicks(0);
      }}
    >
      <View style={theme === "white" ? styles.container : styles.containerAlt}>
        <TouchableOpacity
          onPress={() => {
            count > 0 && setCount(count - 1);
            imageClicks !== 3 && setImageClicks(0);
          }}
          style={styles.countContainer}
        >
          <Text style={styles.count}>{count}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          {imageClicks === 3
            ? "Marcos paulo"
            : "João guilherme beltrão carvalho"}
        </Text>

        <TouchableOpacity
          onPress={() => {
            imageClicks < 3 && setImageClicks(imageClicks + 1);
          }}
        >
          <Image
            source={{
              uri:
                imageClicks === 3
                  ? "https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/389809921_1481893455921418_8196035401195254789_n.jpg?ccb=11-4&oh=01_AdRFvdmwa5m7MIyEkJ7tERLqmRsYh7-eZcnRjByrVrqsdA&oe=65E8D0AD&_nc_sid=e6ed6c&_nc_cat=101"
                  : "https://ih0.redbubble.net/image.3792024232.0668/raf,360x360,075,t,fafafa:ca443f4786.jpg",
            }}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
            imageClicks !== 3 && setImageClicks(0);
          }}
        >
          <View style={styles.button}>
            <Text>Somar</Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerAlt: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  count: {
    fontSize: 64,
  },
  countContainer: {
    position: "absolute",
    top: 145,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 14,
    borderColor: "black",
    borderWidth: 2,
    width: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 14,
    borderColor: "black",
    borderWidth: 2,
  },
});
