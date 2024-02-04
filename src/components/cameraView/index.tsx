import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CameraViewProps } from './props';
import { Camera } from 'expo-camera';

export default function CameraView({
  cameraRef,
  isRecording,
  onRecording,
  onStopRecording,
}: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnRecord}
          onPress={isRecording ? onStopRecording : onRecording}
        >
          <Text style={styles.btnText}>{isRecording ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
