import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { CameraViewProps } from './props';
import { Camera } from 'expo-camera';
import colors from '../../constants/Colors';

export default function CameraView({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnRecord}
          onPress={isRecording ? onStopRecording : onRecord}
        >
          <Ionicons
            name={isRecording ? 'stop-circle' : 'play-circle'}
            size={60}
            color={colors.accent}
          />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
