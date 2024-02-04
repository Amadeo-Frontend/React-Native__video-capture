import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

import { Audio, Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { VideoPlayerProps } from './props';
import colors from '../../constants/Colors';

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDiscard,
}: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />
      <View style={styles.buttonsContainer}>
        <Pressable onPress={onShare}>
          <Ionicons name="share-sharp" size={40} color={colors.secundary} />
        </Pressable>
        <Pressable onPress={onSave}>
          <Ionicons name="clipboard-sharp" size={40} color={colors.secundary} />
        </Pressable>
        <Pressable onPress={onDiscard}>
          <Ionicons name="trash-sharp" size={40} color={colors.secundary} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
