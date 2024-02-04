import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Camera } from "expo-camera";
import { Audio, Video } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import CameraView from "./src/components/cameraView";

export default function App() {
  const cameraRef = useRef<Camera>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>Não tem permisão de camera ou audio.</Text>;
  }

  if (hasMediaLibraryPermission === false) {
    return <Text>Você precisa dar acesso à biblioteca de media.</Text>;
  }
  return (
    <CameraView
      onRecording={onRecording}
      onStopRecording={stopRecording}
      cameraRef={cameraRef}
      isRecording={isRecording}
    />
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
