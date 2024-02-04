import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Camera } from "expo-camera";
import { Audio, Video } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
