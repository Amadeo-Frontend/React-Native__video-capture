import { Camera } from 'expo-camera';

export interface CameraViewProps {
  onRecording: () => void;
  onStopRecording: () => void;
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
}
