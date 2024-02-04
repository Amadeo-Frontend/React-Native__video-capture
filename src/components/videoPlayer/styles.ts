import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonsContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    marginBottom: 80,
    flexDirection: 'row',
  },
});
