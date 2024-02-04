import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 50,
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
    marginBottom: 100,
    flexDirection: 'row',
  },
});
