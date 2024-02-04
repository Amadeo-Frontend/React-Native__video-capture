import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera, CameraRecordingOptions } from 'expo-camera';
import { Audio, Video } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';
import CameraView from './src/components/cameraView';
import VideoPlayer from './src/components/videoPlayer';

export default function App() {
  const cameraRef = useRef<Camera>(null);
  const [video, setVideo] = useState<any>();
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
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrophonePermission(microphonePermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>Não tem permisão de camera ou audio.</Text>;
  }

  if (hasMediaLibraryPermission === false) {
    return <Text>Você precisa dar acesso à biblioteca de media.</Text>;
  }

  const recordVideo = () => {
    setIsRecording(true);
    const options: CameraRecordingOptions = {
      quality: '1080p',
      maxDuration: 60,
      mute: false,
    };
    if (cameraRef && cameraRef.current) {
      cameraRef.current.recordAsync(options).then((recordedVideo: any) => {
        setVideo(recordedVideo);
        setIsRecording(false);
      });
    }
  };
  const stopRecording = () => {
    setIsRecording(false);
    if (cameraRef && cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };
  if (video) {
    const shareVideo = () => {};

    const saveVideo = () => {};
    return (
      <VideoPlayer
        video={video}
        onShare={shareVideo}
        onSave={saveVideo}
        onDiscard={() => setVideo(undefined)}
      />
    );
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
