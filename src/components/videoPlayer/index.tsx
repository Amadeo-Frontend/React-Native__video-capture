import React from 'react';
import { View, Text } from 'react-native';

import { Audio, Video } from 'expo-av';

import { styles } from './styles';
import { VideoPlayerProps } from './props';

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDiscard,
}: VideoPlayerProps) {
  return (
    <View style={styles.container}>
      <Text>works</Text>
    </View>
  );
}
