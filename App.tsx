import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { Camera, CameraRecordingOptions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';
import CameraView from './src/components/cameraView';
import VideoPlayer from './src/components/videoPlayer';

export default function App() {
  const cameraRef = useRef<Camera>(null);
  const [video, setVideo] = useState<any>();
  const [isRecording, setIsRecording] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<
    boolean | null
  >(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrophonePermission(microphonePermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    };

    getPermissions();
  }, []);

  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>Não tem permissão de câmera ou áudio.</Text>;
  }

  if (hasMediaLibraryPermission === false) {
    return <Text>Você precisa dar acesso à biblioteca de mídia.</Text>;
  }

  const recordVideo = async () => {
    setIsRecording(true);

    const options: CameraRecordingOptions = {
      quality: '1080p',
      maxDuration: 60,
      mute: false,
    };

    try {
      if (cameraRef && cameraRef.current) {
        const recordedVideo = await cameraRef.current.recordAsync(options);
        setVideo(recordedVideo);
      }
    } catch (error) {
      console.error('Erro ao gravar vídeo:', error);
    } finally {
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);

    if (cameraRef && cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  if (video) {
    const saveVideo = async () => {
      try {
        await MediaLibrary.saveToLibraryAsync(video.uri);
        setVideo(undefined);
      } catch (error) {
        console.error('Erro ao salvar vídeo na biblioteca:', error);
      }
    };

    const shareVideo = async () => {
      try {
        await shareAsync(video.uri);
        setVideo(undefined);
      } catch (error) {
        console.error('Erro ao compartilhar vídeo:', error);
      }
    };

    const discardVideo = () => {
      setVideo(undefined);
    };

    return (
      <VideoPlayer
        video={video}
        onShare={shareVideo}
        onSave={saveVideo}
        onDiscard={discardVideo}
      />
    );
  }

  return (
    <CameraView
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecord={recordVideo}
      onStopRecording={stopRecording}
    />
  );
}
