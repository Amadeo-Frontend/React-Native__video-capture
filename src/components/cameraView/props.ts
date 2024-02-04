import { Camera } from 'expo-camera';

export interface CameraViewProps {
  onRecord: () => void;
  onStopRecording: () => void;
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
}
